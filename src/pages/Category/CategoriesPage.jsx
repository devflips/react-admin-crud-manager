import React, { useState } from "react";
import {
  Eye,
  Pencil,
  Trash2,
  Tag,
  Calendar,
  Activity,
  FileText,
} from "lucide-react";
import CrudPage from "../../components/CrudPage";

const CategoriesPage = () => {
  const [data, setData] = useState([
    {
      id: "cat-1",
      name: "Technology",
      slug: "technology",
      description: "Latest updates, gadgets, AI, and software trends.",
      status: true,
      createdAt: new Date("2024-01-12"),
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      id: "cat-2",
      name: "Business",
      slug: "business",
      description: "Entrepreneurship, startups, and market insights.",
      status: true,
      createdAt: new Date("2024-02-05"),
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
    {
      id: "cat-3",
      name: "Health & Fitness",
      slug: "health-fitness",
      description: "Wellness, workouts, nutrition, and mental health.",
      status: true,
      createdAt: new Date("2024-03-18"),
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    },
    {
      id: "cat-4",
      name: "Education",
      slug: "education",
      description: "Online learning, academic resources, and study tips.",
      status: false,
      createdAt: new Date("2024-04-02"),
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    },
    {
      id: "cat-5",
      name: "Travel",
      slug: "travel",
      description: "Destinations, travel guides, and adventures.",
      status: true,
      createdAt: new Date("2024-05-10"),
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
    },
    {
      id: "cat-6",
      name: "Food & Recipes",
      slug: "food-recipes",
      description: "Delicious recipes, cooking tips, and cuisines.",
      status: true,
      createdAt: new Date("2024-06-15"),
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
    {
      id: "cat-7",
      name: "Finance",
      slug: "finance",
      description: "Investing, personal finance, and money management.",
      status: false,
      createdAt: new Date("2024-07-01"),
      image:
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
    },
    {
      id: "cat-8",
      name: "Lifestyle",
      slug: "lifestyle",
      description: "Daily life inspiration, productivity, and trends.",
      status: true,
      createdAt: new Date("2024-08-22"),
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
  ]);

  const handleSubmit = async (formData, selectedItem = null) => {
    return new Promise((resolve, reject) => {
      try {
        resolve({
          newObject: {
            ...formData,
            createdAt: new Date(),
            id: `cat-${formData.slug}`,
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
    return new Promise((resolve, reject) => {
      try {
        resolve({
          targetObject: selectedItem,
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const fetchTableData = async () => {
    return {
      data: [...data],
      pagination: {
        current_page: 1,
        rows_per_page: 50,
        total_pages: 1,
        total_records: data.length,
      },
    };
  };

  // ================= TABLE CONFIG =================
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
        title: "Category",
        type: "group",
        imageKey: "image",
        titleKey: "name",
        subtitleKey: "slug",
        onClickDetails: true,
      },
      {
        key: "description",
        title: "Description",
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
      searchKeys: ["name", "slug"],
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

  // ================= MODALS =================
  const modalConfig = {
    addModal: {
      title: "Add New Category",
      size: "lg",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [
        {
          key: "image",
          label: "Category Image",
          type: "image",
          dragDrop: true,
          parentClass: "col-span-12",
        },
        {
          key: "name",
          label: "Category Name",
          type: "text",
          required: true,
          minLength: 3,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "slug",
          label: "Slug",
          type: "text",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "description",
          label: "Description",
          type: "textarea",
          rows: 3,
          parentClass: "col-span-12",
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
      ],
      handleSubmit,
      actionButtons: [
        {
          type: "submit",
          label: "Add Category",
        },
      ],
    },

    editModal: {
      title: "Edit Category",
      size: "lg",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [
        {
          key: "image",
          label: "Category Image",
          type: "image",
          dragDrop: true,
          parentClass: "col-span-12",
        },
        {
          key: "name",
          label: "Category Name",
          type: "text",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "slug",
          label: "Slug",
          type: "text",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "description",
          label: "Description",
          type: "textarea",
          rows: 3,
          parentClass: "col-span-12",
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
      ],
      handleSubmit,
      actionButtons: [
        {
          type: "submit",
          label: "Update Category",
        },
      ],
    },

    deleteModal: {
      title: "Confirm Delete",
      size: "md",
      confirmText: "Are you sure you want to delete this category?",
      referenceKey: "name",
      actionButtons: [
        {
          type: "button",
          label: "Delete Category",
          color: "error",
          onClick: handleDelete,
        },
      ],
    },

    viewModal: {
      title: "Category Details",
      size: "lg",
      fields: [
        {
          key: "group",
          type: "group",
          imageKey: "image",
          titleKey: "name",
          subtitleKey: "slug",
        },
        {
          key: "description",
          label: "Description",
          blockClass: "col-span-12",
          icon: <FileText size={18} />,
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
          blockClass: "col-span-6",
          icon: <Activity size={18} />,
        },
        {
          key: "createdAt",
          label: "Created Date",
          type: "date",
          format: "DD MMM YYYY",
          blockClass: "col-span-6",
          icon: <Calendar size={18} />,
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
    ],
  };

  const config = {
    title: "Category Management",
    description: "Manage blog or product categories",
    buttonText: "Add New Category",
    fetchData: fetchTableData,
    isStaticData: true,
    tableConfig,
    modalConfig,
    filterConfig,
  };

  return <CrudPage config={config} />;
};

export default CategoriesPage;
