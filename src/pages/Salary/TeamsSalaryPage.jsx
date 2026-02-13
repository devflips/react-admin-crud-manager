import React, { useState } from "react";
import {
  Eye,
  Pencil,
  Trash2,
  DollarSign,
  Calendar,
  User,
  FileText,
  Activity,
} from "lucide-react";
import CrudPage from "../../components/CrudPage";

const TeamsSalaryPage = () => {
  const [data, setData] = useState([
    {
      id: "sal-1",
      employee_name: "Ali Khan",
      email: "ali@example.com",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      base_salary: 120000,
      bonus: 15000,
      allowances: 10000,
      deductions: 5000,
      net_salary: 140000,
      month: "2025-01",
      status: true,
      createdAt: new Date("2025-01-30"),
      notes: "Performance bonus included",
    },
    {
      id: "sal-2",
      employee_name: "Sara Ahmed",
      email: "sara@example.com",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      base_salary: 95000,
      bonus: 8000,
      allowances: 5000,
      deductions: 2000,
      net_salary: 106000,
      month: "2025-01",
      status: true,
      createdAt: new Date("2025-01-30"),
      notes: "Late penalty deducted",
    },
    {
      id: "sal-3",
      employee_name: "Usman Tariq",
      email: "usman@example.com",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      base_salary: 110000,
      bonus: 10000,
      allowances: 7000,
      deductions: 3000,
      net_salary: 124000,
      month: "2025-02",
      status: true,
      createdAt: new Date("2025-02-28"),
      notes: "Overtime included",
    },
    {
      id: "sal-4",
      employee_name: "Hira Malik",
      email: "hira@example.com",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      base_salary: 85000,
      bonus: 5000,
      allowances: 4000,
      deductions: 1000,
      net_salary: 93000,
      month: "2025-02",
      status: false,
      createdAt: new Date("2025-02-28"),
      notes: "Pending approval",
    },
    {
      id: "sal-5",
      employee_name: "Zain Raza",
      email: "zain@example.com",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      base_salary: 130000,
      bonus: 20000,
      allowances: 15000,
      deductions: 8000,
      net_salary: 157000,
      month: "2025-03",
      status: true,
      createdAt: new Date("2025-03-30"),
      notes: "Annual increment applied",
    },
    {
      id: "sal-6",
      employee_name: "Ayesha Noor",
      email: "ayesha@example.com",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      base_salary: 90000,
      bonus: 6000,
      allowances: 5000,
      deductions: 2500,
      net_salary: 98500,
      month: "2025-03",
      status: true,
      createdAt: new Date("2025-03-30"),
      notes: "Full attendance bonus",
    },
    {
      id: "sal-7",
      employee_name: "Bilal Sheikh",
      email: "bilal@example.com",
      image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg",
      base_salary: 100000,
      bonus: 0,
      allowances: 5000,
      deductions: 7000,
      net_salary: 98000,
      month: "2025-04",
      status: false,
      createdAt: new Date("2025-04-30"),
      notes: "Advance salary deduction",
    },
    {
      id: "sal-8",
      employee_name: "Fatima Zahra",
      email: "fatima@example.com",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      base_salary: 115000,
      bonus: 12000,
      allowances: 8000,
      deductions: 4000,
      net_salary: 131000,
      month: "2025-04",
      status: true,
      createdAt: new Date("2025-04-30"),
      notes: "Project completion reward",
    },
  ]);

  const calculateNetSalary = (formData) => {
    const base = Number(formData.base_salary || 0);
    const bonus = Number(formData.bonus || 0);
    const allowances = Number(formData.allowances || 0);
    const deductions = Number(formData.deductions || 0);

    return base + bonus + allowances - deductions;
  };

  const handleSubmit = async (formData, selectedItem = null) => {
    return new Promise((resolve, reject) => {
      try {
        const netSalary = calculateNetSalary(formData);

        resolve({
          newObject: {
            ...formData,
            net_salary: netSalary,
            createdAt: new Date(),
            id: `sal-${Date.now()}`,
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
        resolve({ targetObject: selectedItem });
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
        key: "group",
        title: "Employee",
        type: "group",
        imageKey: "image",
        titleKey: "employee_name",
        subtitleKey: "email",
        onClickDetails: true,
      },
      { key: "month", title: "Salary Month" },
      {
        key: "base_salary",
        title: "Base Salary",
        type: "currency",
      },
      {
        key: "net_salary",
        title: "Net Salary",
        type: "currency",
      },
      {
        key: "status",
        title: "Status",
        type: "chip",
        variant: "outline",
        chipOptions: [
          { value: true, label: "Paid", color: "green" },
          { value: false, label: "Pending", color: "yellow" },
        ],
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
      searchKeys: ["employee_name", "email"],
    },
    pagination: {
      enabled: true,
      useServerSidePagination: false,
    },
  };

  // ================= MODAL CONFIG =================
  const modalConfig = {
    addModal: {
      title: "Add Salary Record",
      size: "lg",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [
        {
          key: "employee_name",
          label: "Employee Name",
          type: "text",
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
          key: "month",
          label: "Salary Month",
          type: "month",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "base_salary",
          label: "Base Salary",
          type: "number",
          required: true,
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "bonus",
          label: "Bonus",
          type: "number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "allowances",
          label: "Allowances",
          type: "number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "deductions",
          label: "Deductions",
          type: "number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "status",
          label: "Payment Status",
          type: "select",
          parentClass: "col-span-12 sm:col-span-6",
          options: [
            { value: true, label: "Paid" },
            { value: false, label: "Pending" },
          ],
        },
        {
          key: "notes",
          label: "Notes",
          type: "textarea",
          rows: 3,
          parentClass: "col-span-12",
        },
      ],
      handleSubmit,
      actionButtons: [{ type: "submit", label: "Save Salary" }],
    },

    editModal: {
      title: "Edit Salary Record",
      size: "lg",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [
        {
          key: "employee_name",
          label: "Employee Name",
          type: "text",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "email",
          label: "Email",
          type: "email",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "month",
          label: "Salary Month",
          type: "month",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "base_salary",
          label: "Base Salary",
          type: "number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "bonus",
          label: "Bonus",
          type: "number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "allowances",
          label: "Allowances",
          type: "number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "deductions",
          label: "Deductions",
          type: "number",
          parentClass: "col-span-12 sm:col-span-6",
        },
        {
          key: "status",
          label: "Payment Status",
          type: "select",
          parentClass: "col-span-12 sm:col-span-6",
          options: [
            { value: true, label: "Paid" },
            { value: false, label: "Pending" },
          ],
        },
        {
          key: "notes",
          label: "Notes",
          type: "textarea",
          rows: 3,
          parentClass: "col-span-12",
        },
      ],
      handleSubmit,
      actionButtons: [{ type: "submit", label: "Update Salary" }],
    },

    deleteModal: {
      title: "Confirm Delete",
      size: "md",
      confirmText: "Are you sure you want to delete this salary record?",
      referenceKey: "employee_name",
      actionButtons: [
        {
          type: "button",
          label: "Delete Record",
          color: "error",
          onClick: handleDelete,
        },
      ],
    },

    viewModal: {
      title: "Salary Details",
      size: "lg",
      fields: [
        {
          key: "employee",
          label: "Employee",
          type: "group",
          imageKey: "image",
          titleKey: "employee_name",
          subtitleKey: "email",
        },
        {
          key: "base_salary",
          label: "Base Salary",
          type: "number",
          blockClass: "col-span-6",
        },
        {
          key: "allowances",
          label: "Allowances",
          type: "number",
          blockClass: "col-span-6",
        },
        {
          key: "deductions",
          label: "Deductions",
          type: "number",
          blockClass: "col-span-6",
        },
        {
          key: "net_salary",
          label: "Net Salary",
          type: "number",
          blockClass: "col-span-6",
        },
        { key: "createdAt", label: "Payment Date", type: "date" },
        {
          key: "status",
          label: "Payment Status",
          type: "chip",
          variant: "outline",
          chipOptions: [
            { value: true, label: "Paid" },
            { value: false, label: "Pending" },
          ],
        },
        { key: "notes", label: "Notes", type: "textarea", fullWidth: true },
      ],
    },
  };

  const config = {
    title: "Teams Salary Management",
    description: "Manage monthly salary records of team members",
    buttonText: "Add Salary Record",
    fetchData: fetchTableData,
    isStaticData: true,
    tableConfig,
    modalConfig,
  };

  return <CrudPage config={config} />;
};

export default TeamsSalaryPage;
