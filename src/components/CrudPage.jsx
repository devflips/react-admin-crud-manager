import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Table from "./Table/Table";
import Modal from "./Modal/Modal";
import Form from "./Form/Form";
import Button from "./Button/Button";
import { Icon } from "@iconify/react";
import { set } from "date-fns";
import { enqueueSnackbar } from "notistack";

const CrudPage = ({ config }) => {
  const {
    title,
    fetchData = async () => {},
    formLoading = false,
    tableConfig = {},
    modalConfig = {},
    filterConfig,
    onDelete,
    onSubmit,
    onFilterApply,
  } = config;

  const [loading, setLoading] = useState(true);
  const [listingData, setListingData] = useState([]);
  const [paginationData, setPaginationData] = useState(null);
  const [serverSidePaginationData, setServerSidePaginationData] = useState({
    search: "",
    rows_per_page: 50,
    current_page: 1,
  });

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuAction = (action, item) => {
    if (action === "edit") {
      setSelectedItem(item);
      setShowEdit(true);
    } else if (action === "view") {
      setSelectedItem(item);
      setShowView(true);
    } else if (action === "delete") {
      setSelectedItem(item);
      setShowDelete(true);
    }
  };

  const handleFormSubmit = async (formData) => {
    await onSubmit?.(formData, selectedItem);
    setShowAdd(false);
    setShowEdit(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      await onDelete?.(selectedItem);
      setShowDelete(false);
    } finally {
      setSelectedItem(null);
    }
  };

  const handleGetListing = async () => {
    setLoading(true);

    fetchData?.(serverSidePaginationData)
      .then((resp) => {
        setListingData(resp.data);
        setPaginationData(resp.pagination);
      })
      .catch((error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetListing();
  }, [
    serverSidePaginationData.search,
    serverSidePaginationData.rows_per_page,
    serverSidePaginationData.current_page,
  ]);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
            {config?.description}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            onClick={() => setShowAdd(true)}
            variant="contained"
            color="primary"
          >
            <Plus className="w-4 h-4 mr-2" />
            {config.buttonText || "Add New"}
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table
        config={{
          ...tableConfig,
          pagination: {
            ...tableConfig.pagination,
            ...paginationData,
          },
          data: listingData,
          setServerSidePaginationData: setServerSidePaginationData,
          onMenuAction: handleMenuAction,
          filterConfig,
          onFilterApply,
          loading,
        }}
      />

      {/* Add Modal */}
      <Modal
        isOpen={showAdd}
        onClose={() => setShowAdd(false)}
        icon={modalConfig.addModal?.icon}
        title={modalConfig.addModal?.title || "Add New"}
        size={modalConfig.addModal?.size || "md"}
        footerConfig={modalConfig.addModal?.footer}
        onFormSubmit={() => document.querySelector("#addForm")?.requestSubmit()}
        onCancel={() => setShowAdd(false)}
        loadingBtn={formLoading}
      >
        <Form
          config={modalConfig?.addModal || []}
          onSubmit={handleFormSubmit}
          initialData={{}}
          loading={formLoading}
        />
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={showEdit}
        onClose={() => setShowEdit(false)}
        icon={modalConfig.editModal?.icon}
        title={modalConfig.editModal?.title || "Edit"}
        size={modalConfig.editModal?.size || "md"}
        footerConfig={modalConfig.editModal?.footer}
        onFormSubmit={() =>
          document.querySelector("#editForm")?.requestSubmit()
        }
        onCancel={() => setShowEdit(false)}
        loadingBtn={formLoading}
      >
        <Form
          config={modalConfig.editModal || []}
          onSubmit={handleFormSubmit}
          initialData={selectedItem}
          loading={formLoading}
        />
      </Modal>

      {/* Delete Modal */}
      <Modal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        icon={
          modalConfig.deleteModal?.icon || (
            <Icon icon="ph:warning-bold" className="w-6 h-6 text-red-500" />
          )
        }
        title={modalConfig.deleteModal?.title || "Confirm Delete"}
        size={modalConfig.deleteModal?.size || "md"}
        footerConfig={modalConfig.deleteModal?.footer}
        onFormSubmit={handleDeleteConfirm}
        onCancel={() => setShowDelete(false)}
        loading={formLoading}
      >
        <div className="flex items-center space-x-2 py-3">
          <div>
            <p className="text-md text-gray-700 dark:text-white">
              {modalConfig.deleteModal?.confirmText ||
                "Are you sure you want to delete this item?"}
            </p>
          </div>
        </div>
      </Modal>

      {/* View Detail Modal */}
      {modalConfig.viewModal && (
        <Modal
          isOpen={showView}
          onClose={() => {
            setShowView(false);
            setSelectedItem(null);
          }}
          icon={modalConfig.viewModal?.icon}
          title={modalConfig.viewModal?.title || "View Details"}
          size={modalConfig.viewModal?.size || "lg"}
          footerConfig={modalConfig?.viewModal.footer}
        >
          {modalConfig.viewModal?.component && (
            <modalConfig.viewModal.component data={selectedItem} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default CrudPage;
