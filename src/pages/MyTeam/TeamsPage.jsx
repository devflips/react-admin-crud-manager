import React, { useState, useEffect, useMemo } from "react";
import { useSnackbar } from "notistack";
import { Eye, Pencil, Trash2, User } from "lucide-react";
import CrudPage from "../../components/CrudPage";
import { mockData } from "../../data/teams";
import { formatDate } from "../../lib/utils";
import { Icon } from "@iconify/react";
import TeamFilters from "./TeamFilters";
import TeamMemberDetail from "./TeamMemberDetail";

const TeamsPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState(mockData.data);
  const [filters, setFilters] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [pagination, setPagination] = useState(mockData.pagination);

  const handleSubmit = async (formData, selectedItem) => {
    setFormLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (selectedItem) {
        // Update existing item
        setData((prev) =>
          prev.map((item) =>
            item.id === selectedItem.id ? { ...item, ...formData } : item,
          ),
        );
        enqueueSnackbar("User updated successfully", { variant: "success" });
      } else {
        // Add new item at top and reassign IDs
        const newItem = {
          ...formData,
          createdAt: new Date().toISOString().split("T")[0],
        };

        setData((prev) => {
          const updated = [newItem, ...prev];
          // reassign IDs starting from 1
          return updated.map((item, index) => ({ ...item, id: index + 1 }));
        });

        enqueueSnackbar("User added successfully", { variant: "success" });
      }
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (selectedItem) => {
    setFormLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      setData((prev) => prev.filter((item) => item.id !== selectedItem.id));
      enqueueSnackbar("User deleted successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Delete failed", { variant: "error" });
    } finally {
      setFormLoading(false);
    }
  };

  const filteredData = useMemo(() => {
    let result = [...data];
    if (filters.status)
      result = result.filter((item) => item.status === filters.status);
    if (filters.role)
      result = result.filter((item) => item.role === filters.role);
    if (filters.department)
      result = result.filter((item) =>
        item.department
          ?.toLowerCase()
          .includes(filters.department.toLowerCase()),
      );
    return result;
  }, [data, filters]);

  const handleSearch = async (searchTerm) => {
    console.log("API search called with:", searchTerm);
  };

  const tableConfig = {
    table_head: [
      {
        key: "index",
        title: "#",
        type: "index",
      },
      {
        key: "user_profile",
        title: "Info",
        type: "user_profile",
      },
      {
        key: "phone",
        title: "Phone Number",
      },
      {
        key: "role",
        title: "Role",
        type: "chip",
        variant: "contained",
        label: (row) => {
          return row.role === "admin"
            ? "Super Admin"
            : row.role === "moderator"
              ? "Moderator"
              : row.role === "editor"
                ? "Editor"
                : row.role === "viewer"
                  ? "Viewer"
                  : "No Role";
        },
        color: (row) => {
          return row.role === "admin"
            ? "blue"
            : row.role === "moderator"
              ? "teal"
              : row.role === "editor"
                ? "purple"
                : row.role === "viewer"
                  ? "yellow"
                  : "gray";
        },
      },
      {
        key: "status",
        title: "Status",
        type: "chip",
        variant: "outline",
        label: (row) => (row.status === true ? "Active" : "Inactive"),
        className: "uppercase",
      },
      {
        key: "createdAt",
        title: "Created Date",
        type: "date",
        format: "DD MMM YYYY",
      },
    ],
    actions: [
      {
        title: "Edit",
        type: "edit",
        icon: <Pencil className="w-4 h-4" />,
      },
      {
        title: "View Details",
        type: "view",
        icon: <Eye className="w-4 h-4" />,
      },
      {
        title: "Delete",
        type: "delete",
        variant: "danger",
        icon: <Trash2 className="w-4 h-4" />,
      },
    ],
    actionsPosition: "start",
    onSearch: handleSearch,
    search: {
      enabled: true,
      placeholder: "Search...",
      useLocalSearch: true,
    },
    pagination: {
      enabled: true,
      pageSize: pagination.records_per_page,
      currentPage: pagination.current_page,
      totalPages: pagination.total_pages,
      totalRecords: pagination.total_records,
      hasNextPage: pagination.has_next_page,
      hasPreviousPage: pagination.has_previous_page,
      onPageChange: (page, limit) => {
        console.log(`Page changed → Page: ${page}, Limit: ${limit}`);
        // Example: update pagination state
        setPagination((prev) => ({
          ...prev,
          current_page: page,
          records_per_page: limit,
        }));

        // Simulate API call or filter change
        // here you can fetch new page data if using API
      },
      setPageSize: (limit) => {
        console.log("Limit changed:", limit);
        setPagination((prev) => ({ ...prev, records_per_page: limit }));
      },
    },
  };

  const modalConfig = {
    addModal: {
      title: "Add New Team Member",
      size: "lg",
      formFields: {
        gridClass: "grid grid-cols-12 gap-4",
        config: [
          {
            key: "first_name",
            label: "First Name",
            type: "text",
            required: true,
            minLength: 3,
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "last_name",
            label: "Last Name",
            type: "text",
            minLength: 3,
            required: true,
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "email",
            label: "Email",
            type: "email",
            required: true,
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "password",
            label: "Password",
            type: "password",
            minLength: 6,
            required: true,
            parentClass: "col-span-12 sm:col-span-6",
          },

          {
            key: "phone",
            label: "Phone Number",
            type: "phone",
            required: true,
            search: true,
            showFlag: true,
            placeholder: "Enter Phone Number",
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "role",
            label: "Role",
            type: "select",
            search: true,
            parentClass: "col-span-12 sm:col-span-6",
            options: [
              { value: "admin", label: "Super Administrator" },
              { value: "moderator", label: "Moderator" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ],
          },
          {
            key: "bio",
            label: "Bio",
            type: "textarea",
            rows: 3,
            parentClass: "col-span-12",
          },
        ],
      },
      footer: {
        submitButton: true,
        submitText: "Add Member",
        cancelButton: true,
        cancelText: "Cancel",
      },
    },

    editModal: {
      title: "Edit Member",
      size: "lg",
      formFields: {
        gridClass: "grid grid-cols-12 gap-4",
        config: [
          {
            key: "image",
            label: "Profile Image",
            type: "image",
            required: false,
            dragDrop: true,
            parentClass: "col-span-12",
          },
          {
            key: "first_name",
            label: "First Name",
            type: "text",
            required: true,
            minLength: 3,
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "last_name",
            label: "Last Name",
            type: "text",
            minLength: 3,
            required: true,
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "email",
            label: "Email Address",
            type: "email",
            required: true,
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "status",
            label: "Status",
            type: "select",
            parentClass: "col-span-12 sm:col-span-6",
            options: [
              { value: true, label: "Active" },
              { value: false, label: "Inactive" },
            ],
          },
          {
            key: "is_active",
            label: "Allow Editing",
            type: "switch",
            text: "",
            options: [
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ],
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "role",
            label: "Role",
            type: "select",
            search: true,
            parentClass: "col-span-12 sm:col-span-6",
            options: [
              { value: "admin", label: "Super Administrator" },
              { value: "moderator", label: "Moderator" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ],
          },
          {
            key: "phone",
            label: "Phone Number",
            type: "phone",
            required: true,
            search: true,
            showFlag: true,
            placeholder: "Enter Phone Number",
            parentClass: "col-span-12 sm:col-span-6",
          },
          {
            key: "bio",
            label: "Bio / Notes",
            type: "textarea",
            rows: 3,
            placeholder: "Additional information about this member...",
            parentClass: "col-span-12",
          },
        ],
      },
      footer: {
        submitButton: true,
        submitText: "Update Member",
        cancelButton: true,
        cancelText: "Cancel",
      },
    },
    deleteModal: {
      title: "Confirm Delete",
      size: "md",
      confirmText: "Are you sure you want to delete this member?",
      footer: {
        submitButton: true,
        submitText: "Delete",
        cancelButton: true,
        cancelText: "Cancel",
        color: "error",
      },
    },
    viewModal: {
      title: "Team Member Details",
      size: "lg",
      component: TeamMemberDetail,
      footer: {
        cancelButton: true,
        cancelText: "Close",
      },
    },
  };

  const filterConfig = {
    component: TeamFilters,
  };

  const config = {
    title: "Team Management",
    description: "Manage team members and their roles and permissions",
    buttonText: "Add New Member",
    data: filteredData,
    onSubmit: handleSubmit,
    onDelete: handleDelete,
    onFilterApply: setFilters,
    tableConfig,
    modalConfig,
    filterConfig,
    formLoading,
  };

  return <CrudPage config={config} />;
};

export default TeamsPage;
