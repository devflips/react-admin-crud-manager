import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  EllipsisVertical,
  Filter,
  User,
} from "lucide-react";
import { createPortal } from "react-dom";
import { formatDate, searchLocalData } from "../../lib/utils";
import Button from "../Button/Button";
import FilterDrawer from "../Filter/FilterDrawer";
import Chip from "../Chip/Chip";
import TableSkeleton from "./components/TableSkeleton";
import ImagePreview from "./components/ImagePreview";

const Table = ({ config }) => {
  const {
    data = [],
    table_head = [],
    loading = false,
    search = {
      enabled: false,
      placeholder: "Search...",
      useServerSideSearch: false,
    },
    filter = {
      enabled: false,
      useServerSideFilters: false,
    },
    pagination = {
      enabled: false,
      rows_per_page: 10,
      useServerSidePagination: false,
    },
    emptyMessage = "No data available",
    onMenuAction,
    setServerSidePaginationData = () => {},
    onFilterApply,
    filterConfig = null,
  } = config;

  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const [menuPosition, setMenuPosition] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  // image preview
  const [targetImage, setTargetImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = useMemo(() => {
    if (!search.enabled || !searchTerm.trim()) return data;
    if (search.useServerSideSearch) return data;
    return searchLocalData(data, searchTerm, search.searchKeys || []);
  }, [data, searchTerm, search]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pagination?.rows_per_page || 50);
  const [totalRecords, setTotalRecords] = useState(filteredData.length || 0);

  const totalPages = pagination?.useServerSidePagination
    ? pagination.total_pages
    : Math.ceil(filteredData.length / pageSize);

  const paginatedData = useMemo(() => {
    if (pagination.useServerSidePagination) return filteredData;
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const menuRef = useRef(null);
  const buttonRefs = useRef({});
  const searchTimeoutRef = useRef(null);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);

    if (search.useServerSideSearch) {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

      searchTimeoutRef.current = setTimeout(async () => {
        try {
          await setServerSidePaginationData((prev) => ({
            ...prev,
            search: value,
            current_page: 1,
          }));
        } catch (error) {
          console.error("Search error:", error);
        }
      }, 800);
    }
  };

  const handleActionClick = (action, item, e) => {
    e.stopPropagation();
    setActiveMenu(null);
    onMenuAction?.(action.type, item);
  };

  const handleMenuToggle = (itemId, e, menu_list) => {
    e.stopPropagation();
    setMenuList(menu_list);
    const button = e.currentTarget;
    buttonRefs.current[itemId] = button;
    const rect = button.getBoundingClientRect();
    const menuWidth = 192;
    const menuHeight = menu_list.length * 40;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const openLeft = viewportWidth - rect.right < menuWidth;
    const left = openLeft ? rect.left - menuWidth + rect.width : rect.left;

    const openUp =
      viewportHeight - rect.bottom < menuHeight && rect.top > menuHeight;
    const top = openUp ? rect.top - menuHeight - 2 : rect.bottom + 2;

    setMenuPosition({
      top: Math.max(8, Math.min(top, viewportHeight - menuHeight - 8)),
      left: Math.max(8, Math.min(left, viewportWidth - menuWidth - 8)),
    });

    setActiveMenu(activeMenu === itemId ? null : itemId);
  };

  const calculateRowNumber = (index) => {
    return (currentPage - 1) * pageSize + index + 1;
  };

  const openPreview = (image) => {
    setTargetImage(image);
    setIsOpen(true);
  };

  const renderAvatar = (
    imageSrc,
    imageAlt,
    className,
    fallback_icon = null,
  ) => {
    return (
      <>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || "Avatar"}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              openPreview({ src: imageSrc, alt: imageAlt });
            }}
            className={`w-10 h-10 cursor-pointer rounded-full object-cover border border-gray-200 dark:border-gray-700 ${className || ""}`}
          />
        ) : (
          <>
            {fallback_icon ? (
              fallback_icon
            ) : (
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${className || ""}`}
              >
                <User className="w-6 h-6 text-gray-400 dark:text-gray-400" />
              </div>
            )}
          </>
        )}
      </>
    );
  };

  const renderGroupCell = (row, col) => {
    return (
      <div className={`flex items-center space-x-4 ${col.className || ""}`}>
        {col.imageKey
          ? renderAvatar(row[col.imageKey], row[col.titleKey], "group-avatar")
          : ""}
        <div>
          <p className="font-medium text-gray-900 dark:text-white group-title">
            {row[col.titleKey] || ""}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 group-sub-title">
            {row[col.subtitleKey] || ""}
          </p>
        </div>
      </div>
    );
  };

  const handleRenderChip = (value, col) => {
    let label = String(value);
    const variant = col.variant || "contained";
    let color = col.defaultColor;

    if (col?.chipOptions?.length > 0) {
      let chipObj = col?.chipOptions.find((obj) => obj.value == value);
      if (chipObj) {
        label = chipObj.label;
        color = chipObj.color;
      }
    }

    return (
      <Chip
        label={label}
        variant={variant}
        color={color}
        className={col.className || ""}
      />
    );
  };

  const handleRenderCellValue = (col, row, index) => {
    const value = row[col.key];
    if (col.type === "menu_actions") {
      return (
        <div className={`text-center ${col.className || ""}`}>
          <button
            ref={(el) => (buttonRefs.current[row.id] = el)}
            onClick={(e) => handleMenuToggle(row.id, e, col.menuList)}
            className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300"
          >
            <EllipsisVertical className="h-4 w-4" />
          </button>
        </div>
      );
    } else if (col.type === "index") {
      return (
        <span className={col.className || ""}>{calculateRowNumber(index)}</span>
      );
    } else if (col.type === "group") {
      return renderGroupCell(row, col);
    } else if (col.type === "chip") {
      return <>{handleRenderChip(value, col)}</>;
    } else if (col.type === "date") {
      return (
        <span className={col.className || ""}>
          {formatDate(value, col.format || "DD MMM YYYY")}
        </span>
      );
    } else if (col.type === "avatar") {
      return (
        <>{renderAvatar(value, col.alt, col.className, col.fallback_icon)}</>
      );
    } else {
      return <span className={col.className || ""}>{value || "N/A"}</span>;
    }
  };

  //  handle CLick on cell

  const handleColumnClick = (col, row) => {
    if (col.onClickDetails) {
      return onMenuAction?.("view", row);
    }

    if (typeof col.handleClick === "function") {
      return col.handleClick(row);
    }
  };

  // Helper to check if column is clickable
  const isColumnClickable = (col) =>
    col.onClickDetails || typeof col.handleClick === "function";

  // Close menu on scroll -------------------
  useEffect(() => {
    const handleScroll = () => {
      if (activeMenu) setActiveMenu(null);
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [activeMenu]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (pagination?.rows_per_page && pagination?.useServerSidePagination) {
      setPageSize(pagination?.rows_per_page || 50);
    }

    if (pagination.current_page) {
      setCurrentPage(pagination.current_page);
    }
  }, [
    pagination.rows_per_page,
    pagination?.useServerSidePagination,
    pagination.current_page,
  ]);

  useEffect(() => {
    setTotalRecords(
      pagination?.useServerSidePagination
        ? pagination.total_records
        : filteredData.length,
    );

    if (
      filteredData.length <= pageSize * (currentPage - 1) &&
      !pagination?.useServerSidePagination
    ) {
      setCurrentPage((prev) => prev - 1 || 1);
    }
  }, [
    filteredData.length,
    pagination.total_records,
    pagination?.useServerSidePagination,
  ]);

  if (loading) return <TableSkeleton rows={6} columns={6} />;

  return (
    <>
      {/* Search Bar */}
      <div className="flex justify-end items-center mb-6 gap-2">
        {search.enabled && (
          <div className="">
            <div className="relative min-w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" />
              <input
                type="text"
                placeholder={search.placeholder || "Search..."}
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
              />
            </div>
          </div>
        )}

        {filterConfig && filter.enabled && (
          <Button onClick={() => setShowFilters(true)} variant="contained">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        )}
      </div>

      {/* =========================== Table =========================== */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700/60">
              <tr>
                {table_head.map((col) => (
                  <th
                    key={col.key}
                    className="px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate"
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={table_head.length}
                    className="text-center py-10 text-gray-500 dark:text-gray-400"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, index) => (
                  <tr
                    key={row.id || index}
                    className="hover:bg-gray-50 dark:hover:bg-blue-800/10 transition"
                  >
                    {table_head.map((col) => (
                      <td
                        key={col.key}
                        className={`px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max max-w-[300px] truncate ${
                          isColumnClickable(col) ? "cursor-pointer" : ""
                        }`}
                        title={String(row[col.key] ?? "")}
                        onClick={() => handleColumnClick(col, row)}
                      >
                        {col.render
                          ? col.render(row, index)
                          : handleRenderCellValue(col, row, index)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {pagination?.enabled && filteredData.length > 0 && (
          <div className=" bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing {(currentPage - 1) * pageSize + 1} to{" "}
              {Math.min(currentPage * pageSize, totalRecords)} of {totalRecords}{" "}
              results
            </div>

            <div className="flex items-center gap-4">
              {/* Rows per page selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Rows per page:
                </span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    const newLimit = Number(e.target.value);
                    setPageSize(newLimit);
                    setCurrentPage(1);
                    if (pagination.useServerSidePagination) {
                      setServerSidePaginationData((prev) => ({
                        ...prev,
                        current_page: 1,
                        rows_per_page: newLimit,
                      }));
                    }
                  }}
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {[2, 10, 25, 50, 100].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              {/* ============= Pagination ============= */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (currentPage > 1) {
                      const newPage = currentPage - 1;
                      setCurrentPage(newPage);
                      if (pagination.useServerSidePagination) {
                        setServerSidePaginationData((prev) => ({
                          ...prev,
                          current_page: newPage,
                        }));
                      }
                    }
                  }}
                  disabled={currentPage === 1}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="text-sm text-gray-800 dark:text-gray-200">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => {
                    if (currentPage < totalPages) {
                      const newPage = currentPage + 1;
                      setCurrentPage(newPage);
                      if (pagination.useServerSidePagination) {
                        setServerSidePaginationData((prev) => ({
                          ...prev,
                          current_page: newPage,
                        }));
                      }
                    }
                  }}
                  disabled={currentPage === totalPages}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Portal Menu */}
      {activeMenu &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              zIndex: 9999,
            }}
            className="w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600"
          >
            {menuList.map((action, i) => (
              <button
                key={i}
                onClick={(e) =>
                  handleActionClick(
                    action,
                    data.find((d) => d.id === activeMenu),
                    e,
                  )
                }
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${
                  action.variant === "danger"
                    ? "text-red-600 dark:text-red-500"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {action.icon && <span className="shrink-0">{action.icon}</span>}
                {action.title}
              </button>
            ))}
          </div>,
          document.body,
        )}

      {/* Filter Drawer */}
      {filterConfig && (
        <FilterDrawer
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          config={filterConfig}
          onApply={onFilterApply}
        />
      )}

      {isOpen && (
        <ImagePreview
          src={targetImage.src}
          alt={targetImage.alt}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default Table;
