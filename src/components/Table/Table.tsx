import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  EllipsisVertical,
  Filter,
  User,
  Music,
  Plus,
  Download,
} from "lucide-react";
import { createPortal } from "react-dom";
import { formatDate, searchLocalData } from "../../lib/utils";
import Button from "../Button/Button";
import FilterDrawer from "../Filter/FilterDrawer";
import Chip from "../Chip/Chip";
import TableSkeleton from "./components/TableSkeleton";
import ImagePreview from "./components/ImagePreview";
import SortDropdown from "./components/SortDropdown";
import {
  normalizeSortConfig,
  getSortableColumns,
  getNormalizedSortOptions,
  sortTableData,
} from "./utils/sortUtils";
import { crudClasses, joinClasses } from "../../lib/crudClasses";

interface TableProps {
  config: Record<string, any>;
  setShowAdd: (value: boolean) => void;
  title: string;
  buttonText?: string;
  description?: string;
  showAddButton?: boolean;
}

interface CSVField {
  label: string;
  key: string;
}

interface CustomToolbarButton {
  key?: string;
  label: string;
  icon?: React.ReactNode;
  variant?: string;
  color?: string;
  className?: string;
  disabled?: boolean;
  show?: boolean;
  onClick?: (
    event: React.MouseEvent,
    context: Record<string, any>,
  ) => void | Promise<void>;
}

interface CustomToolbarMenuItem {
  key?: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  show?: boolean;
  onClick?: (
    event: React.MouseEvent,
    context: Record<string, any>,
  ) => void | Promise<void>;
}

const Table = ({
  config,
  setShowAdd,
  title,
  buttonText,
  description,
  showAddButton,
}: TableProps) => {
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
    sort = { enabled: false },
    pagination = {
      enabled: false,
      rows_per_page: 10,
      useServerSidePagination: false,
    },
    exportCSV = {
      enabled: false,
      fileName: "",
      fields: [],
    },
    customButtons = [],
    customMenuItems = [],
    emptyMessage = "No data available",
    onMenuAction,
    setServerSidePaginationData = () => {},
    onFilterApply,
    filterConfig = null,
    rowClick = null,
  } = config;

  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState<any>(null);
  const [menuList, setMenuList] = useState<any[]>([]);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [showFilters, setShowFilters] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<Record<string, any>>({});
  const [toolbarMenuOpen, setToolbarMenuOpen] = useState(false);

  const normalizedSortConfig = useMemo(() => normalizeSortConfig(sort), [sort]);

  const sortableColumns = useMemo(
    () => getSortableColumns(table_head),
    [table_head],
  );

  const normalizedSortOptions = useMemo(() => {
    return getNormalizedSortOptions(normalizedSortConfig, sortableColumns);
  }, [normalizedSortConfig, sortableColumns]);

  const [sortBy, setSortBy] = useState(
    normalizedSortConfig?.defaultValue || "",
  );

  const [targetImage, setTargetImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = useMemo(() => {
    if (!search.enabled || !searchTerm.trim()) return data;
    if (search.useServerSideSearch) return data;
    return searchLocalData(data, searchTerm, search.searchKeys || []);
  }, [data, searchTerm, search]);

  const sortedData = useMemo(() => {
    return sortTableData(
      filteredData,
      sortBy,
      normalizedSortConfig,
      normalizedSortOptions,
    );
  }, [filteredData, sortBy, normalizedSortConfig, normalizedSortOptions]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pagination?.rows_per_page || 50);
  const [totalRecords, setTotalRecords] = useState(filteredData.length || 0);

  const totalPages = pagination?.useServerSidePagination
    ? pagination.total_pages
    : Math.ceil(filteredData.length / pageSize);

  const paginatedData = useMemo(() => {
    if (pagination.useServerSidePagination) return sortedData;
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize, pagination.useServerSidePagination]);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const toolbarMenuRef = useRef<HTMLDivElement | null>(null);
  const tableScopeRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuPortalTarget =
    typeof document !== "undefined"
      ? (tableScopeRef.current?.closest(".racm-root") as HTMLElement | null) ||
        document.body
      : null;

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);

    if (search.useServerSideSearch) {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

      searchTimeoutRef.current = setTimeout(async () => {
        try {
          await setServerSidePaginationData((prev: Record<string, any>) => ({
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

  const handleSortChange = (value: string, selectedOption: any = null) => {
    setSortBy(value);
    setCurrentPage(1);

    const payload = {
      value,
      option: selectedOption,
      key: selectedOption?.key || "",
      order: selectedOption?.order || "",
      type: selectedOption?.type || "",
    };

    if (typeof normalizedSortConfig?.onChange === "function") {
      normalizedSortConfig.onChange(payload);
    }
  };

  const handleActionClick = async (
    action: any,
    item: any,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setActiveMenu(null);

    if (typeof action?.onClick === "function") {
      await action.onClick(e, item);
      return;
    }

    onMenuAction?.(action.type, item);
  };

  const handleMenuToggle = (
    itemId: any,
    e: React.MouseEvent<HTMLButtonElement>,
    menu_list: any[],
  ) => {
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

  const calculateRowNumber = (index: number) => {
    return (currentPage - 1) * pageSize + index + 1;
  };

  const openPreview = (image: any) => {
    let imageObj = image;
    if (imageObj && imageObj.src instanceof File) {
      imageObj = { ...imageObj, src: URL.createObjectURL(imageObj.src) };
    }
    setTargetImage(imageObj);
    setIsOpen(true);
  };

  const getImageSource = (image: any): string => {
    if (!image) return "";

    if (typeof image === "string") {
      return image;
    }

    if (image instanceof File) {
      return URL.createObjectURL(image);
    }

    if (typeof image === "object") {
      if (typeof image.preview === "string") {
        return image.preview;
      }
      if (typeof image.src === "string") {
        return image.src;
      }
      if (image.src instanceof File) {
        return URL.createObjectURL(image.src);
      }
      if (image.file instanceof File) {
        return URL.createObjectURL(image.file);
      }
    }

    return "";
  };

  const renderMultiImageCell = (value: any, col: any) => {
    const images = Array.isArray(value) ? value : [];

    if (images.length === 0) {
      return <span className={col.className || ""}>N/A</span>;
    }

    const maxPreview = col.maxPreview || 3;
    const visibleImages = images.slice(0, maxPreview);
    const remaining = images.length - visibleImages.length;

    return (
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {visibleImages.map((image: any, idx: number) => {
            const src = getImageSource(image);
            if (!src) return null;

            return (
              <button
                key={`${src}-${idx}`}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openPreview({ src, alt: `Gallery ${idx + 1}` });
                }}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
              >
                <img
                  src={src}
                  alt={`gallery-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

        {remaining > 0 && (
          <span className="ml-2 text-xs font-medium text-gray-600 dark:text-gray-300">
            +{remaining}
          </span>
        )}
      </div>
    );
  };

  const renderSingleImageCell = (value: any, col: any) => {
    const src = getImageSource(value);

    if (!src) {
      return <span className={col.className || ""}>N/A</span>;
    }

    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          openPreview({ src, alt: col.title || "Image" });
        }}
        className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <img
          src={src}
          alt={col.title || "image"}
          className="w-full h-full object-cover"
        />
      </button>
    );
  };

  const renderAvatar = (
    imageSrc: any,
    imageAlt: string,
    className: string,
    fallback_icon: any = null,
    row: any = null,
  ) => {
    return (
      <>
        {imageSrc ? (
          <img
            src={
              imageSrc instanceof File
                ? URL.createObjectURL(imageSrc)
                : imageSrc
            }
            alt={imageAlt || "Avatar"}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              openPreview({ src: imageSrc, alt: imageAlt });
            }}
            className={`w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${className || ""}`}
          />
        ) : (
          <>
            {fallback_icon ? (
              typeof fallback_icon === "function" ? (
                fallback_icon(row)
              ) : (
                fallback_icon
              )
            ) : (
              <div
                className={`w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${className || ""}`}
              >
                <User className="w-6 h-6 text-gray-400 dark:text-gray-400" />
              </div>
            )}
          </>
        )}
      </>
    );
  };

  const renderAudio = (audioSrc: any, className: string) => {
    return (
      <>
        {audioSrc ? (
          <audio
            key={
              audioSrc instanceof File
                ? URL.createObjectURL(audioSrc)
                : audioSrc
            }
            controls
            src={
              audioSrc instanceof File
                ? URL.createObjectURL(audioSrc)
                : audioSrc
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`w-64 cursor-pointer ${className || ""}`}
          />
        ) : (
          <>
            <div
              className={`w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${className || ""}`}
            >
              <Music className="w-6 h-6 text-gray-400 dark:text-gray-400" />
            </div>
          </>
        )}
      </>
    );
  };

  const renderGroupCell = (row: any, col: any) => {
    return (
      <div className={`flex items-center space-x-4 ${col.className || ""}`}>
        {col.imageKey
          ? renderAvatar(
              row[col.imageKey],
              row[col.titleKey],
              "group-avatar",
              col.fallback_icon,
              row,
            )
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

  const handleRenderChip = (value: any, col: any) => {
    let label = String(value);
    const variant = col.variant || "contained";
    let color = col.defaultColor;

    if (col?.chipOptions?.length > 0) {
      const chipObj = col?.chipOptions.find((obj: any) => obj.value == value);
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

  const handleRenderCellValue = (col: any, row: any, index: number) => {
    const value = row[col.key];
    if (col.type === "menu_actions") {
      return (
        <div className={`text-center ${col.className || ""}`}>
          <button
            ref={(el) => {
              buttonRefs.current[row.id || row._id] = el;
            }}
            onClick={(e) =>
              handleMenuToggle(row.id || row._id, e, col.menuList)
            }
            className={joinClasses(
              crudClasses.table.actionButton,
              "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
            )}
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
        <>
          <div className="min-w-[40px]">
            {renderAvatar(
              value,
              col.alt,
              col.className,
              col.fallback_icon,
              row,
            )}
          </div>
        </>
      );
    } else if (col.type === "audio") {
      return <>{renderAudio(value, col.className)}</>;
    } else if (col.type === "image") {
      return <>{renderSingleImageCell(value, col)}</>;
    } else if (col.type === "multiImage") {
      return <>{renderMultiImageCell(value, col)}</>;
    } else {
      return <span className={col.className || ""}>{value || "N/A"}</span>;
    }
  };

  const handleRowClick = (row: any) => {
    if (typeof rowClick === "function") {
      return rowClick(row);
    }
    if (rowClick) {
      return onMenuAction?.("view", row);
    }
  };

  const handleColumnClick = (col: any, row: any) => {
    if (col.onClickDetails) {
      return onMenuAction?.("view", row);
    }

    if (typeof col.handleClick === "function") {
      return col.handleClick(row);
    }
  };

  const isRowClickable = () => rowClick || typeof rowClick === "function";
  const isColumnClickable = (col: any) =>
    col.onClickDetails || typeof col.handleClick === "function";

  const handleExportCSV = () => {
    if (!data?.length || !exportCSV?.fields?.length) return;

    // Create headers
    const headers = exportCSV.fields.map((field: CSVField) => field.label);

    // Create rows
    const rows = paginatedData.map((row: Record<string, any>) =>
      exportCSV.fields.map((field: CSVField) => {
        const value = row?.[field.key];
        return `"${value !== undefined && value !== null ? value : ""}"`;
      }),
    );

    const csvContent = [
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ].join("\n");

    // Filename
    const now = new Date();
    const defaultName = `export-${formatDate(now, "YYYY-MM-DD_HH-mm-ss")}.csv`;
    const finalName = exportCSV.fileName || defaultName;

    // Create blob
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Download file
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.href = url;
    link.download = finalName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCustomButtonClick = async (
    button: CustomToolbarButton,
    event: React.MouseEvent,
  ) => {
    if (typeof button.onClick !== "function") return;

    await button.onClick(event, {
      data,
      filteredData,
      sortedData,
      paginatedData,
      searchTerm,
      appliedFilters,
      currentPage,
      pageSize,
      totalRecords,
    });
  };

  const handleToolbarMenuItemClick = async (
    item: CustomToolbarMenuItem,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    setToolbarMenuOpen(false);

    if (typeof item.onClick !== "function") return;

    await item.onClick(event, {
      data,
      filteredData,
      sortedData,
      paginatedData,
      searchTerm,
      appliedFilters,
      currentPage,
      pageSize,
      totalRecords,
    });
  };

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
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }

      if (
        toolbarMenuRef.current &&
        !toolbarMenuRef.current.contains(e.target as Node)
      ) {
        setToolbarMenuOpen(false);
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
        : sortedData.length,
    );

    if (
      sortedData.length <= pageSize * (currentPage - 1) &&
      !pagination?.useServerSidePagination
    ) {
      setCurrentPage((prev) => prev - 1 || 1);
    }
  }, [
    sortedData.length,
    pagination.total_records,
    pagination?.useServerSidePagination,
  ]);

  useEffect(() => {
    if (!normalizedSortConfig?.enabled) {
      setSortBy("");
      return;
    }

    const hasMatchingDefault = normalizedSortOptions.some(
      (opt: any) => opt.value === normalizedSortConfig.defaultValue,
    );

    if (hasMatchingDefault) {
      setSortBy(normalizedSortConfig.defaultValue);
      return;
    }

    setSortBy("");
  }, [normalizedSortConfig, normalizedSortOptions]);

  useEffect(() => {
    if (
      !normalizedSortConfig?.enabled ||
      !normalizedSortConfig?.useServerSideSorting
    ) {
      return;
    }

    const selectedOption = normalizedSortOptions?.find(
      (opt: any) => opt.value === sortBy,
    );

    setServerSidePaginationData((prev: Record<string, any>) => ({
      ...prev,
      current_page: 1,
      sort_by: selectedOption?.key || "",
      sort_order: selectedOption?.order || "",
    }));
  }, [
    sortBy,
    normalizedSortConfig?.enabled,
    normalizedSortConfig?.useServerSideSorting,
    normalizedSortOptions,
    setServerSidePaginationData,
  ]);

  return (
    <div ref={tableScopeRef}>
      {loading ? (
        <TableSkeleton rows={6} columns={6} />
      ) : (
        <>
          <div
            className={joinClasses(
              crudClasses.table.toolbar,
              "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3",
            )}
          >
            <div className="table-heading">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto">
              {(showAddButton ||
                customButtons?.length > 0 ||
                customMenuItems?.length > 0) && (
                <div className="flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full">
                  {showAddButton && (
                    <Button
                      onClick={() => setShowAdd(true)}
                      variant="contained"
                      color="primary"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {buttonText || "Add New"}
                    </Button>
                  )}

                  {customButtons
                    .filter(
                      (button: CustomToolbarButton) => button?.show !== false,
                    )
                    .map((button: CustomToolbarButton, index: number) => (
                      <Button
                        key={button.key || `${button.label}-${index}`}
                        onClick={(event) =>
                          handleCustomButtonClick(button, event)
                        }
                        variant={button.variant || "contained"}
                        color={button.color || "default"}
                        className={button.className || ""}
                        disabled={button.disabled}
                      >
                        {button.icon ? (
                          <span className="mr-2">{button.icon}</span>
                        ) : null}
                        {button.label}
                      </Button>
                    ))}

                  {customMenuItems.filter(
                    (item: CustomToolbarMenuItem) => item?.show !== false,
                  ).length > 0 && (
                    <div className="relative" ref={toolbarMenuRef}>
                      <Button
                        onClick={(event) => {
                          event.stopPropagation();
                          setToolbarMenuOpen((prev) => !prev);
                        }}
                        variant="outlined"
                        className="px-2"
                        aria-label="More actions"
                      >
                        <EllipsisVertical className="w-4 h-4" />
                      </Button>

                      {toolbarMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 z-50 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg py-1">
                          {customMenuItems
                            .filter(
                              (item: CustomToolbarMenuItem) =>
                                item?.show !== false,
                            )
                            .map(
                              (item: CustomToolbarMenuItem, index: number) => (
                                <button
                                  key={item.key || `${item.label}-${index}`}
                                  type="button"
                                  onClick={(event) =>
                                    handleToolbarMenuItemClick(item, event)
                                  }
                                  disabled={item.disabled}
                                  className={joinClasses(
                                    "w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center",
                                    item.className || "",
                                  )}
                                >
                                  {item.icon ? (
                                    <span className="mr-2 inline-flex">
                                      {item.icon}
                                    </span>
                                  ) : null}
                                  {item.label}
                                </button>
                              ),
                            )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
              <div className="flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full">
                {search.enabled && (
                  <div className="w-full sm:!w-auto">
                    <div
                      className={joinClasses(
                        crudClasses.table.searchField,
                        "table-search-field",
                      )}
                    >
                      <Search className="search-icon" />
                      <input
                        type="text"
                        placeholder={search.placeholder || "Search..."}
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className={crudClasses.table.searchInput}
                      />
                    </div>
                  </div>
                )}

                {(normalizedSortConfig?.enabled &&
                  normalizedSortOptions?.length > 0) ||
                (filterConfig && filter.enabled) ||
                (exportCSV && exportCSV.enabled) ? (
                  <div className="flex items-center justify-end gap-2 w-full sm:!w-auto">
                    {filterConfig && filter.enabled && (
                      <div className="filter-button-wrapper">
                        <Button
                          onClick={() => setShowFilters(true)}
                          variant="contained"
                          className="w-full sm:!w-auto"
                        >
                          <Filter className="w-4 h-4 mr-2" />
                          Filters
                        </Button>
                        {Object.keys(appliedFilters).length > 0 && (
                          <span className="red-dot"></span>
                        )}
                      </div>
                    )}
                    {exportCSV && exportCSV.enabled && (
                      <div className="filter-button-wrapper">
                        <Button
                          onClick={() => handleExportCSV()}
                          variant="contained"
                          className="w-full sm:!w-auto"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Export CSV
                        </Button>
                      </div>
                    )}
                    {normalizedSortConfig?.enabled &&
                      normalizedSortOptions?.length > 0 && (
                        <SortDropdown
                          options={normalizedSortOptions}
                          value={sortBy}
                          onChange={handleSortChange}
                          clearLabel={normalizedSortConfig?.clearLabel}
                        />
                      )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div
            className={joinClasses(
              crudClasses.table.root,
              crudClasses.table.container,
              "table-container",
            )}
          >
            <div className="overflow-x-auto">
              <table className={crudClasses.table.element}>
                <thead className={crudClasses.table.head}>
                  <tr className={crudClasses.table.headRow}>
                    {table_head.map((col: any) => (
                      <th
                        key={col.key}
                        className={joinClasses(
                          crudClasses.table.headCell,
                          "table-head-data",
                          col.headClass || "",
                        )}
                      >
                        {col.title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className={crudClasses.table.body}>
                  {paginatedData.length === 0 ? (
                    <tr>
                      <td
                        colSpan={table_head.length}
                        className={joinClasses(
                          crudClasses.table.noData,
                          "no-data-message",
                        )}
                      >
                        {emptyMessage}
                      </td>
                    </tr>
                  ) : (
                    paginatedData.map((row: any, index: number) => (
                      <tr
                        key={row.id || row._id || index}
                        className={joinClasses(
                          crudClasses.table.row,
                          "table-row",
                          isRowClickable() ? "cursor-pointer" : "",
                        )}
                        onClick={() => {
                          isRowClickable() && handleRowClick(row);
                        }}
                      >
                        {table_head.map((col: any) => (
                          <td
                            key={col.key}
                            className={joinClasses(
                              crudClasses.table.cell,
                              "table-data",
                              col.type == "audio" ? "" : "max-w-[300px]",
                              "truncate",
                              isColumnClickable(col) ? "cursor-pointer" : "",
                            )}
                            title={String(row[col.key] ?? "")}
                            onClick={(e) => {
                              if (isColumnClickable(col)) {
                                e.stopPropagation();
                                e.preventDefault();
                                handleColumnClick(col, row);
                              }
                            }}
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

            {pagination?.enabled && sortedData.length > 0 && (
              <div
                className={joinClasses(
                  crudClasses.table.pagination,
                  "pagination-wrapper",
                )}
              >
                <span>
                  Showing {(currentPage - 1) * pageSize + 1} to{" "}
                  {Math.min(currentPage * pageSize, totalRecords)} of{" "}
                  {totalRecords} results
                </span>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span>Rows per page:</span>
                    <select
                      value={pageSize}
                      onChange={(e) => {
                        const newLimit = Number(e.target.value);
                        setPageSize(newLimit);
                        setCurrentPage(1);
                        if (pagination.useServerSidePagination) {
                          setServerSidePaginationData(
                            (prev: Record<string, any>) => ({
                              ...prev,
                              current_page: 1,
                              rows_per_page: newLimit,
                            }),
                          );
                        }
                      }}
                      className="rows-number-select"
                    >
                      {[10, 25, 50, 100].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (currentPage > 1) {
                          const newPage = currentPage - 1;
                          setCurrentPage(newPage);
                          if (pagination.useServerSidePagination) {
                            setServerSidePaginationData(
                              (prev: Record<string, any>) => ({
                                ...prev,
                                current_page: newPage,
                              }),
                            );
                          }
                        }
                      }}
                      disabled={currentPage === 1}
                      className="arrow-icons"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <span>
                      Page {currentPage} of {totalPages}
                    </span>

                    <button
                      onClick={() => {
                        if (currentPage < totalPages) {
                          const newPage = currentPage + 1;
                          setCurrentPage(newPage);
                          if (pagination.useServerSidePagination) {
                            setServerSidePaginationData(
                              (prev: Record<string, any>) => ({
                                ...prev,
                                current_page: newPage,
                              }),
                            );
                          }
                        }
                      }}
                      disabled={currentPage === totalPages}
                      className="arrow-icons"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {activeMenu &&
        menuPortalTarget &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              zIndex: 9999,
            }}
            className={joinClasses(
              crudClasses.table.menu,
              "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
            )}
          >
            {menuList.map((action: any, i: number) => (
              <button
                key={i}
                onClick={(e) =>
                  handleActionClick(
                    action,
                    data.find(
                      (d: any) => d.id === activeMenu || d._id == activeMenu,
                    ),
                    e,
                  )
                }
                className={joinClasses(
                  crudClasses.table.menuItem,
                  "w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600",
                  action.variant === "danger"
                    ? "text-red-600 dark:text-red-500"
                    : "text-gray-700 dark:text-gray-200",
                )}
              >
                {action.icon && <span className="shrink-0">{action.icon}</span>}
                {action.title}
              </button>
            ))}
          </div>,
          menuPortalTarget,
        )}

      {filterConfig && (
        <FilterDrawer
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          config={filterConfig}
          onApply={(filters) => {
            setAppliedFilters(filters);
            onFilterApply?.(filters);
          }}
        />
      )}

      {isOpen && targetImage && (
        <ImagePreview
          src={targetImage.src}
          alt={targetImage.alt}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Table;
