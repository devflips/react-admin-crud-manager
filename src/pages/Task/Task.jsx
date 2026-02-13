import React, { useState } from "react";
import {
  Eye,
  Pencil,
  Trash2,
  Calendar,
  User,
  Activity,
  Flag,
  FileText,
} from "lucide-react";
import CrudPage from "../../components/CrudPage";

const TasksPage = () => {
  const [data, setData] = useState([
    {
      id: "task-1",
      project_name: "Admin Dashboard",
      task_title: "Design User Management UI",
      assigned_name: "Ali Khan",
      assigned_email: "ali@example.com",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      priority: "high",
      status: "in_progress",
      estimated_hours: 12,
      due_date: new Date("2025-02-25"),
      tags: "UI, Dashboard",
      description: "Create responsive user management section.",
      createdAt: new Date("2025-02-10"),
    },
    {
      id: "task-2",
      project_name: "HRMS System",
      task_title: "Implement Salary Module",
      assigned_name: "Sara Ahmed",
      assigned_email: "sara@example.com",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      priority: "urgent",
      status: "pending",
      estimated_hours: 20,
      due_date: new Date("2025-03-05"),
      tags: "Backend, Finance",
      description: "Develop salary CRUD and payroll logic.",
      createdAt: new Date("2025-02-12"),
    },
    {
      id: "task-3",
      project_name: "Ecommerce Platform",
      task_title: "Add Product Filters",
      assigned_name: "Usman Tariq",
      assigned_email: "usman@example.com",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      priority: "medium",
      status: "completed",
      estimated_hours: 8,
      due_date: new Date("2025-02-15"),
      tags: "Frontend, Filters",
      description: "Add dynamic filtering by category and price.",
      createdAt: new Date("2025-02-01"),
    },

    // 4 - 10
    {
      id: "task-4",
      project_name: "Mobile App",
      task_title: "Setup Authentication API",
      assigned_name: "Hira Malik",
      assigned_email: "hira@example.com",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      priority: "high",
      status: "in_progress",
      estimated_hours: 15,
      due_date: new Date("2025-03-01"),
      tags: "API, Auth",
      description: "Implement JWT authentication.",
      createdAt: new Date("2025-02-14"),
    },
    {
      id: "task-5",
      project_name: "CRM System",
      task_title: "Create Leads Table",
      assigned_name: "Zain Raza",
      assigned_email: "zain@example.com",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      priority: "medium",
      status: "pending",
      estimated_hours: 10,
      due_date: new Date("2025-03-03"),
      tags: "Database",
      description: "Design leads table schema.",
      createdAt: new Date("2025-02-15"),
    },
    {
      id: "task-6",
      project_name: "Admin Dashboard",
      task_title: "Implement Role Permissions",
      assigned_name: "Ayesha Noor",
      assigned_email: "ayesha@example.com",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      priority: "urgent",
      status: "blocked",
      estimated_hours: 18,
      due_date: new Date("2025-02-28"),
      tags: "Security",
      description: "Role based access control implementation.",
      createdAt: new Date("2025-02-11"),
    },
    {
      id: "task-7",
      project_name: "Ecommerce Platform",
      task_title: "Payment Gateway Integration",
      assigned_name: "Bilal Sheikh",
      assigned_email: "bilal@example.com",
      image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg",
      priority: "urgent",
      status: "in_progress",
      estimated_hours: 22,
      due_date: new Date("2025-03-10"),
      tags: "Stripe, Payments",
      description: "Integrate Stripe API.",
      createdAt: new Date("2025-02-13"),
    },
    {
      id: "task-8",
      project_name: "Marketing Website",
      task_title: "SEO Optimization",
      assigned_name: "Fatima Zahra",
      assigned_email: "fatima@example.com",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      priority: "low",
      status: "completed",
      estimated_hours: 6,
      due_date: new Date("2025-02-18"),
      tags: "SEO",
      description: "Improve meta tags and page speed.",
      createdAt: new Date("2025-02-05"),
    },
    {
      id: "task-9",
      project_name: "HRMS System",
      task_title: "Attendance Tracking Module",
      assigned_name: "Omar Farooq",
      assigned_email: "omar@example.com",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      priority: "high",
      status: "in_progress",
      estimated_hours: 14,
      due_date: new Date("2025-03-08"),
      tags: "HR, Tracking",
      description: "Implement attendance logging system.",
      createdAt: new Date("2025-02-16"),
    },
    {
      id: "task-10",
      project_name: "CRM System",
      task_title: "Email Notification Setup",
      assigned_name: "Nida Khan",
      assigned_email: "nida@example.com",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      priority: "medium",
      status: "pending",
      estimated_hours: 9,
      due_date: new Date("2025-03-12"),
      tags: "Email, Backend",
      description: "Setup SMTP integration.",
      createdAt: new Date("2025-02-18"),
    },

    // 11 - 25
    ...Array.from({ length: 15 }, (_, i) => ({
      id: `task-${11 + i}`,
      project_name: [
        "Admin Dashboard",
        "CRM System",
        "Mobile App",
        "Ecommerce Platform",
      ][i % 4],
      task_title: `Additional Feature Task ${i + 1}`,
      assigned_name: ["Ali Khan", "Sara Ahmed", "Usman Tariq", "Hira Malik"][
        i % 4
      ],
      assigned_email: [
        "ali@example.com",
        "sara@example.com",
        "usman@example.com",
        "hira@example.com",
      ][i % 4],
      image: [
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      ][i % 4],
      priority: ["low", "medium", "high", "urgent"][i % 4],
      status: ["pending", "in_progress", "completed", "blocked"][i % 4],
      estimated_hours: 5 + i,
      due_date: new Date(`2025-03-${10 + i}`),
      tags: "Feature, Enhancement",
      description: "Implement additional project feature.",
      createdAt: new Date("2025-02-20"),
    })),
  ]);

  const handleSubmit = async (formData, selectedItem = null) => {
    return new Promise((resolve, reject) => {
      try {
        resolve({
          newObject: {
            ...formData,
            id: `task-${Date.now()}`,
            createdAt: new Date(),
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
    return new Promise((resolve) => {
      resolve({ targetObject: selectedItem });
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
          { title: "Edit", type: "edit", icon: <Pencil className="w-4 h-4" /> },
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
      { key: "index", title: "#", type: "index" },
      {
        key: "task_title",
        title: "Task",
      },
      {
        key: "project_name",
        title: "Project",
      },
      {
        key: "group",
        title: "Assigned To",
        type: "group",
        imageKey: "image",
        titleKey: "assigned_name",
        subtitleKey: "assigned_email",
      },
      {
        key: "priority",
        title: "Priority",
        type: "chip",
        variant: "contained",
        chipOptions: [
          { value: "low", label: "Low", color: "green" },
          { value: "medium", label: "Medium", color: "blue" },
          { value: "high", label: "High", color: "orange" },
          { value: "urgent", label: "Urgent", color: "red" },
        ],
        defaultColor: "gray",
      },
      {
        key: "status",
        title: "Status",
        type: "chip",
        variant: "outline",
        chipOptions: [
          { value: "pending", label: "Pending", color: "yellow" },
          { value: "in_progress", label: "In Progress", color: "blue" },
          { value: "completed", label: "Completed", color: "green" },
          { value: "blocked", label: "Blocked", color: "red" },
        ],
      },
      {
        key: "due_date",
        title: "Due Date",
        type: "date",
        format: "DD MMM YYYY",
      },
    ],
    search: {
      enabled: true,
      useServerSideSearch: false,
      searchKeys: ["task_title", "project_name", "assigned_name"],
    },
    pagination: {
      enabled: true,
      useServerSidePagination: false,
    },
  };

  // ================= MODALS =================
  const modalConfig = {
    addModal: {
      title: "Create New Task",
      size: "lg",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [
        {
          key: "project_name",
          label: "Project Name",
          type: "text",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "task_title",
          label: "Task Title",
          type: "text",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "assigned_name",
          label: "Assigned To",
          type: "text",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "assigned_email",
          label: "Assigned Email",
          type: "email",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "priority",
          label: "Priority",
          type: "select",
          parentClass: "col-span-12 sm:col-span-6",
          options: [
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
            { value: "urgent", label: "Urgent" },
          ],
        },
        {
          key: "status",
          label: "Status",
          type: "select",
          parentClass: "col-span-12 sm:col-span-6",
          options: [
            { value: "pending", label: "Pending" },
            { value: "in_progress", label: "In Progress" },
            { value: "completed", label: "Completed" },
            { value: "blocked", label: "Blocked" },
          ],
        },
        {
          key: "estimated_hours",
          label: "Estimated Hours",
          type: "number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "due_date",
          label: "Due Date",
          type: "date",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "tags",
          label: "Tags",
          type: "text",
          parentClass: "col-span-12",
        },
        {
          key: "description",
          label: "Task Description",
          type: "textarea",
          rows: 3,
          parentClass: "col-span-12",
        },
      ],
      handleSubmit,
      actionButtons: [{ type: "submit", label: "Create Task" }],
    },

    editModal: {
      title: "Edit Task",
      size: "lg",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [], // you can reuse same fields if your system supports inheritance
      handleSubmit,
      actionButtons: [{ type: "submit", label: "Update Task" }],
    },

    deleteModal: {
      title: "Confirm Delete",
      size: "md",
      confirmText: "Are you sure you want to delete this task?",
      referenceKey: "task_title",
      actionButtons: [
        {
          type: "button",
          label: "Delete Task",
          color: "error",
          onClick: handleDelete,
        },
      ],
    },
    viewModal: {
      title: "Task Details",
      size: "lg",

      fields: [
        {
          key: "project_name",
          label: "Project Name",
          type: "text",
        },
        {
          key: "task_title",
          label: "Task Title",
          type: "text",
        },
        {
          key: "assigned_name",
          label: "Assigned To",
          type: "user",
        },
        {
          key: "assigned_email",
          label: "Email",
          type: "email",
        },
        {
          key: "priority",
          label: "Priority",
          type: "chip",
          chipOptions: [
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
            { value: "urgent", label: "Urgent" },
          ],
        },
        {
          key: "status",
          label: "Status",
          type: "chip",
          chipOptions: [
            { value: "pending", label: "Pending" },
            { value: "in_progress", label: "In Progress" },
            { value: "completed", label: "Completed" },
            { value: "blocked", label: "Blocked" },
          ],
        },
        {
          key: "estimated_hours",
          label: "Estimated Hours",
          type: "number",
        },
        {
          key: "due_date",
          label: "Due Date",
          type: "date",
        },
        {
          key: "tags",
          label: "Tags",
          type: "text",
        },
        {
          key: "description",
          label: "Description",
          type: "textarea",
          fullWidth: true,
        },
        {
          key: "createdAt",
          label: "Created At",
          type: "date",
        },
      ],
    },
  };

  const config = {
    title: "Tasks / Project Management",
    description: "Manage projects and team tasks efficiently",
    buttonText: "Create Task",
    fetchData: fetchTableData,
    isStaticData: true,
    tableConfig,
    modalConfig,
  };

  return <CrudPage config={config} />;
};

export default TasksPage;
