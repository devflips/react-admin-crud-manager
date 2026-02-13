import React, { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import Table from "./Table/Table";
import Modal from "./Modal/Modal";
import Form from "./Form/Form";
import Button from "./Button/Button";
import { Icon } from "@iconify/react";
import { enqueueSnackbar } from "notistack";
import Details from "./Details/Details";
import PropTypes from "prop-types";

const CrudPage = ({ config }) => {
  const {
    title,
    fetchData = async () => {},
    isStaticData = false,
    tableConfig = {},
    modalConfig = {},
    filterConfig,
  } = config;

  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);

  const [listingData, setListingData] = useState([]);
  const [paginationData, setPaginationData] = useState(null);
  const [serverSidePaginationData, setServerSidePaginationData] = useState({
    search: "",
    rows_per_page: 50,
    current_page: 1,
  });
  const [filterData, setFilterData] = useState({});
  const [changeFilterData, setChangeFilterData] = useState(false);

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

  const executeAction = async (
    action,
    onSuccess,
    success_message = "",
    error_message = "",
  ) => {
    setFormLoading(true);

    try {
      const resp = await action?.();
      if (success_message || resp.message) {
        enqueueSnackbar(success_message || resp.message, {
          variant: "success",
        });
      }
      onSuccess?.(resp);
    } catch (error) {
      if (error_message || error.message) {
        enqueueSnackbar(error_message || error.message, { variant: "error" });
      }
    } finally {
      setFormLoading(false);
    }
  };

  const handleAddResult = (resp) => {
    let newObj = resp.newObject;
    if (isStaticData) {
      setListingData((prev) => [newObj, ...prev]);
      setPaginationData((prev) => ({
        ...prev,
        current_page: 1,
      }));
    } else {
      setServerSidePaginationData((prev) => ({
        ...prev,
        current_page: 1,
      }));
      if (serverSidePaginationData.current_page == 1) {
        handleGetListing();
      }
    }
    setShowAdd(false);
  };

  const handleEditResult = (resp) => {
    let updatedObj = resp.newObject;
    let targetObj = resp.targetObject;
    if (isStaticData) {
      setListingData((prev) =>
        prev.map((item) =>
          item.id === targetObj.id ? { ...item, ...updatedObj } : item,
        ),
      );
    } else {
      handleGetListing();
    }
    setShowEdit(false);
  };

  const handleDeleteResult = (resp) => {
    if (!resp) {
      setShowDelete(false);
      setSelectedItem(null);
      return;
    }

    if (isStaticData) {
      setListingData((prev) =>
        prev.filter((item) => item.id !== resp.targetObject.id),
      );
    } else {
      if (
        listingData.length == 1 &&
        serverSidePaginationData.current_page > 1
      ) {
        setServerSidePaginationData((prev) => ({
          ...prev,
          current_page: prev.current_page - 1,
        }));
      } else {
        handleGetListing();
      }
    }
    setShowDelete(false);
    setSelectedItem(null);
  };

  const handleAddFormSubmit = (formData) =>
    executeAction(
      () => modalConfig?.addModal?.handleSubmit?.(formData),
      handleAddResult,
    );

  const handleEditFormSubmit = (formData) =>
    executeAction(
      () => modalConfig?.editModal?.handleSubmit?.(formData, selectedItem),
      handleEditResult,
    );

  const handleDeleteConfirm = () =>
    executeAction(
      () => modalConfig?.deleteModal?.action?.(selectedItem),
      handleDeleteResult,
    );

  const handleGetListing = async () => {
    setLoading(true);

    fetchData?.({ ...serverSidePaginationData, ...filterData })
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

  const handleFilterData = (data) => {
    setFilterData((prev) => ({
      ...data,
    }));
    if (tableConfig?.filter?.useServerSideFilters) {
      setChangeFilterData((prev) => !prev);
    }
  };

  const filterByMatchingFields = (data, filters) => {
    return data.filter((item) =>
      Object.entries(filters).every(([key, value]) => item[key] === value),
    );
  };

  const filteredData = useMemo(() => {
    if (tableConfig?.filter?.useServerSideFilters) return data;
    return filterByMatchingFields(listingData, filterData);
  }, [listingData, filterData]);

  useEffect(() => {
    handleGetListing();
  }, [
    serverSidePaginationData.search,
    serverSidePaginationData.rows_per_page,
    serverSidePaginationData.current_page,
    changeFilterData,
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
          data: filteredData,
          setServerSidePaginationData: setServerSidePaginationData,
          onMenuAction: handleMenuAction,
          filterConfig,
          onFilterApply: handleFilterData,
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
        onFormSubmit={() => document.querySelector("#addForm")?.requestSubmit()}
        loadingBtn={formLoading}
        actionButtons={modalConfig.addModal.actionButtons}
      >
        <Form
          config={modalConfig?.addModal || []}
          onSubmit={handleAddFormSubmit}
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
        onFormSubmit={() =>
          document.querySelector("#editForm")?.requestSubmit()
        }
        actionButtons={modalConfig.editModal.actionButtons}
        loadingBtn={formLoading}
      >
        <Form
          config={modalConfig.editModal || []}
          onSubmit={handleEditFormSubmit}
          initialData={selectedItem}
          loading={formLoading}
        />
      </Modal>

      {/* Delete Modal */}
      {showDelete && (
        <Modal
          isOpen={showDelete}
          onClose={(resp) => {
            handleDeleteResult(resp);
          }}
          icon={
            modalConfig.deleteModal?.icon || (
              <Icon icon="ph:warning-bold" className="w-6 h-6 text-red-500" />
            )
          }
          title={modalConfig.deleteModal?.title || "Confirm Delete"}
          size={modalConfig.deleteModal?.size || "md"}
          loading={formLoading}
          actionButtons={modalConfig.deleteModal.actionButtons}
          executeFunction={executeAction}
          selectedItem={selectedItem}
        >
          <div className="flex items-center space-x-2 py-3">
            <div>
              <p className="text-md text-gray-700 dark:text-white">
                {modalConfig.deleteModal?.confirmText ||
                  "Are you sure you want to delete this item?"}
              </p>
              {modalConfig.deleteModal?.referenceKey && (
                <p className="text-md font-semibold text-gray-700 dark:text-white">
                  {selectedItem[modalConfig.deleteModal?.referenceKey]}
                </p>
              )}
            </div>
          </div>
        </Modal>
      )}

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
          {modalConfig.viewModal?.component ? (
            <modalConfig.viewModal.component data={selectedItem} />
          ) : (
            <Details data={selectedItem} config={modalConfig.viewModal || {}} />
          )}
        </Modal>
      )}
    </div>
  );
};

const optionType = PropTypes.shape({
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
});

const actionButtonType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
});

const menuActionType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string,
  icon: PropTypes.node,
});

const tableHeadType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  imageKey: PropTypes.string,
  titleKey: PropTypes.string,
  subtitleKey: PropTypes.string,
  onClickDetails: PropTypes.bool,
  variant: PropTypes.string,
  chipOptions: PropTypes.arrayOf(optionType),
  defaultColor: PropTypes.string,
  className: PropTypes.string,
  format: PropTypes.string,
  menuList: PropTypes.arrayOf(menuActionType),
});

const formFieldType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  parentClass: PropTypes.string,
  search: PropTypes.bool,
  multiple: PropTypes.bool,
  dropdownMaxHeight: PropTypes.string,
  dragDrop: PropTypes.bool,
  countriesList: PropTypes.bool,
  defaultCountry: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  text: PropTypes.string,
  editorKey: PropTypes.string,
  options: PropTypes.arrayOf(optionType),
});

const viewFieldType = PropTypes.shape({
  key: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  imageKey: PropTypes.string,
  titleKey: PropTypes.string,
  subtitleKey: PropTypes.string,
  blockClass: PropTypes.string,
  icon: PropTypes.node,
  variant: PropTypes.string,
  chipOptions: PropTypes.arrayOf(optionType),
  defaultColor: PropTypes.string,
  className: PropTypes.string,
  format: PropTypes.string,
});

CrudPage.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    fetchData: PropTypes.func.isRequired,
    isStaticData: PropTypes.bool,

    /* ================= TABLE CONFIG ================= */

    tableConfig: PropTypes.shape({
      table_head: PropTypes.arrayOf(tableHeadType).isRequired,

      search: PropTypes.shape({
        enabled: PropTypes.bool,
        useServerSideSearch: PropTypes.bool,
        searchKeys: PropTypes.arrayOf(PropTypes.string),
      }),

      pagination: PropTypes.shape({
        enabled: PropTypes.bool,
        useServerSidePagination: PropTypes.bool,
      }),

      filter: PropTypes.shape({
        enabled: PropTypes.bool,
        useServerSideFilters: PropTypes.bool,
      }),
    }).isRequired,

    /* ================= MODAL CONFIG ================= */

    modalConfig: PropTypes.shape({
      addModal: PropTypes.shape({
        title: PropTypes.string.isRequired,
        size: PropTypes.string,
        formClass: PropTypes.string,
        formFields: PropTypes.arrayOf(formFieldType),
        handleSubmit: PropTypes.func.isRequired,
        actionButtons: PropTypes.arrayOf(actionButtonType),
      }),

      editModal: PropTypes.shape({
        title: PropTypes.string.isRequired,
        size: PropTypes.string,
        formClass: PropTypes.string,
        formFields: PropTypes.arrayOf(formFieldType),
        handleSubmit: PropTypes.func.isRequired,
        actionButtons: PropTypes.arrayOf(actionButtonType),
      }),

      deleteModal: PropTypes.shape({
        title: PropTypes.string.isRequired,
        size: PropTypes.string,
        confirmText: PropTypes.string,
        referenceKey: PropTypes.string,
        actionButtons: PropTypes.arrayOf(actionButtonType),
      }),

      viewModal: PropTypes.shape({
        title: PropTypes.string.isRequired,
        size: PropTypes.string,

        // 👇 This covers your commented code:
        component: PropTypes.elementType, // for custom component like TeamMemberDetail

        fields: PropTypes.arrayOf(viewFieldType),

        footer: PropTypes.shape({
          cancelButton: PropTypes.bool,
          cancelText: PropTypes.string,
        }),
      }),
    }),

    /* ================= FILTER CONFIG ================= */

    filterConfig: PropTypes.shape({
      fields: PropTypes.arrayOf(formFieldType),
    }),
  }).isRequired,
};

export default CrudPage;
