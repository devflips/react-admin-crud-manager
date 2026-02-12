import React, { useState, useEffect } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import CrudPage from "../../components/CrudPage";
import { mockData } from "../../data/teams";
import TeamFilters from "./TeamFilters";
import TeamMemberDetail from "./TeamMemberDetail";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Shield,
  Activity,
  FileText,
  Users,
} from "lucide-react";

const TeamsPage = () => {
  const [data, setData] = useState(mockData.data);

  const handleSubmit = async (formData, selectedItem = null) => {
    return new Promise(async (resolve, reject) => {
      try {
        // call here api's for add edit
        resolve({
          newObject: {
            ...formData,
            createdAt: new Date(),
            id: `testing-${formData.first_name}`,
          },
          targetObject: selectedItem,
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleDelete = async (e, selectedItem) => {
    e.preventDefault();
    return new Promise(async (resolve, reject) => {
      try {
        // call here api's for delete
        resolve({
          targetObject: selectedItem,
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const fetchTableData2 = (params) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${params.search}&limit=${params.rows_per_page}&skip=${params.rows_per_page * (params.current_page - 1)}&page=${params.current_page}&delay=2000`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch listing");
        }

        let data = await response.json();

        let list = data?.products?.map((obj) => ({
          ...obj,
          image: obj.images[0],
          first_name: obj.title,
          email: obj.brand,
          phone: obj.price,
        }));

        data = {
          data: [...list],
          pagination: {
            current_page: params.current_page,
            rows_per_page: params.rows_per_page,
            total_pages: Math.ceil(data.total / params.rows_per_page),
            total_records: data.total,
          },
        };
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const fetchTableData = async () => {
    // Api Call goes here
    let list = data.map((obj) => ({
      ...obj,
      name: `${obj.first_name} ${obj.last_name || ""}`,
    }));
    return {
      data: [...list],
      pagination: {
        current_page: 1,
        rows_per_page: 50,
        total_pages: 1,
        total_records: 9,
      },
    };
  };

  useEffect(() => {
    fetchTableData2();
  }, []);

  const tableConfig = {
    table_head: [
      {
        key: "menu_actions",
        title: "Actions",
        type: "menu_actions",
        menuList: [
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
      },
      {
        key: "index",
        title: "#",
        type: "index",
      },
      {
        key: "group",
        title: "Info",
        type: "group",
        imageKey: "image",
        titleKey: "name",
        subtitleKey: "email",
        onClickDetails: true,
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
        chipOptions: [
          { value: "admin", label: "Super Admin", color: "blue" },
          { value: "moderator", label: "Moderator", color: "teal" },
          { value: "editor", label: "Editor", color: "purple" },
          { value: "viewer", label: "Viewer", color: "yellow" },
        ],
        defaultColor: "gray",
      },
      {
        key: "status",
        title: "Status",
        type: "chip",
        variant: "outline",
        chipOptions: [
          { value: true, label: "Active", color: "green" },
          { value: false, label: "Inactive", color: "red" },
        ],
        defaultColor: "gray",
        className: "uppercase",
      },
      {
        key: "createdAt",
        title: "Created Date",
        type: "date",
        format: "DD MMM YYYY",
      },
    ],
    search: {
      enabled: true,
      useServerSideSearch: false,
      searchKeys: ["name", "email"], // optional for the static search
    },
    pagination: {
      enabled: true,
      useServerSidePagination: false,
    },
    filter: {
      enabled: true,
      useServerSideFilters: false,
    },
  };

  const modalConfig = {
    addModal: {
      title: "Add New Team Member",
      size: "lg",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [
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
          countriesList: true,
          defaultCountry: "PK",
          placeholder: "Enter Phone Number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "role",
          label: "Role",
          type: "select",
          search: true,
          multiple: true,
          dropdownMaxHeight: "75px",
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
          type: "tinyEditor",
          editorKey: import.meta.env.VITE_EDITOR_KEY,
          rows: 3,
          required: true,
          parentClass: "col-span-12",
        },
      ],
      handleSubmit: handleSubmit,
      actionButtons: [
        {
          type: "submit",
          label: "Add Member",
        },
      ],
    },
    editModal: {
      title: "Edit Member",
      size: "lg",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [
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
          required: true,
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
          countriesList: true,
          defaultCountry: "PK",
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
      handleSubmit: handleSubmit,
      actionButtons: [
        {
          type: "submit",
          label: "Update Member",
        },
      ],
    },
    deleteModal: {
      title: "Confirm Delete",
      size: "md",
      confirmText: "Are you sure you want to delete this member?",
      referenceKey: "name",
      actionButtons: [
        {
          type: "button",
          label: "Delete Member",
          color: "error",
          onClick: handleDelete,
        },
      ],
    },
    viewModal: {
      title: "Team Member Details",
      size: "lg",
      // component: TeamMemberDetail,

      fields: [
        {
          key: "group",
          type: "group",
          imageKey: "image",
          titleKey: "name",
          subtitleKey: "email",
        },

        {
          label: "First Name",
          key: "first_name",
          blockClass: "col-span-6",
          icon: <User size={18} />,
        },
        {
          label: "Last Name",
          key: "last_name",
          blockClass: "col-span-6",
          icon: <User size={18} />,
        },

        {
          key: "phone",
          label: "Phone Number",
          blockClass: "col-span-6",
          icon: <Phone size={18} />,
        },
        {
          key: "createdAt",
          label: "Created Date",
          type: "date",
          format: "DD MMM YYYY",
          blockClass: "col-span-6",
          icon: <Calendar size={18} />,
        },
        {
          key: "role",
          label: "Role",
          type: "chip",
          variant: "contained",
          chipOptions: [
            { value: "admin", label: "Super Admin", color: "blue" },
            { value: "moderator", label: "Moderator", color: "teal" },
            { value: "editor", label: "Editor", color: "purple" },
            { value: "viewer", label: "Viewer", color: "yellow" },
          ],
          defaultColor: "gray",
          blockClass: "col-span-6",
          icon: <Shield size={18} />,
        },
        {
          key: "status",
          label: "Status",
          type: "chip",
          variant: "outline",
          chipOptions: [
            { value: true, label: "Active", color: "green" },
            { value: false, label: "Inactive", color: "red" },
          ],
          defaultColor: "gray",
          className: "uppercase",
          blockClass: "col-span-6",
          icon: <Activity size={18} />,
        },
        {
          key: "bio",
          label: "Bio / Notes",
          type: "tinyEditor",
          blockClass: "col-span-12",
          icon: <FileText size={18} />,
        },
      ],

      footer: {
        cancelButton: true,
        cancelText: "Close",
      },
    },
  };

  const filterConfig = {
    fields: [
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
        key: "role",
        label: "Role",
        type: "select",
        search: false,
        parentClass: "col-span-12 sm:col-span-6",
        options: [
          { value: "admin", label: "Super Administrator" },
          { value: "moderator", label: "Moderator" },
          { value: "editor", label: "Editor" },
          { value: "viewer", label: "Viewer" },
        ],
      },
    ],
  };

  const config = {
    title: "Team Management",
    description: "Manage team members and their roles and permissions",
    buttonText: "Add New Member",
    fetchData: fetchTableData,
    isStaticData: true,
    tableConfig,
    modalConfig,
    filterConfig,
  };

  return <CrudPage config={config} />;
};

export default TeamsPage;
