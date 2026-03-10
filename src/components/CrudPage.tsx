import React, { useEffect, useMemo, useState } from "react";
import Table from "./Table/Table";
import Modal from "./Modal/Modal";
import Form from "./Form/Form";
import { Icon } from "@iconify/react";
import { enqueueSnackbar } from "notistack";
import Details from "./Details/Details";
import type {
  ServerSidePaginationData,
  CrudPageProps,
} from "../types/crudtypes";

const CrudPage: React.FC<CrudPageProps> = ({ config }) => {
  const {
    title,
    fetchData,
    fetchRowDetails,
    isStaticData = false,
    tableConfig,
    modalConfig,
    filterConfig,
  } = config;

  const [loading, setLoading] = useState<boolean>(true);
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [listingData, setListingData] = useState<Record<string, any>[]>([]);
  const [paginationData, setPaginationData] = useState<any>(null);
  const [serverSidePaginationData, setServerSidePaginationData] =
    useState<ServerSidePaginationData>({
      search: "",
      rows_per_page: 50,
      current_page: 1,
      sort_by: "",
      sort_order: "",
    });
  const [filterData, setFilterData] = useState<Record<string, any>>({});
  const [changeFilterData, setChangeFilterData] = useState<boolean>(false);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showView, setShowView] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Record<string, any> | null>(
    null,
  );

  const handleMenuAction = (action: string, item: any): void => {
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
    action: (() => Promise<any>) | null,
    onSuccess?: (resp: any) => void,
    success_message: string = "",
    error_message: string = "",
  ): Promise<void> => {
    setFormLoading(true);

    try {
      if (!action) return;
      const resp = await action();
      if (success_message || resp?.message) {
        enqueueSnackbar(success_message || resp.message || "Success", {
          variant: "success" as const,
        });
      }
      onSuccess?.(resp);
    } catch (error: any) {
      if (error_message || error?.message) {
        enqueueSnackbar(error_message || error.message || "Error occurred", {
          variant: "error" as const,
        });
      }
    } finally {
      setFormLoading(false);
    }
  };

  const handleAddResult = (resp: { newObject: any }): void => {
    const newObj = resp.newObject;
    if (isStaticData) {
      setListingData((prev) => [newObj, ...prev]);
      setPaginationData((prev: any) => ({
        ...prev,
        current_page: 1,
      }));
    } else {
      setServerSidePaginationData((prev) => ({
        ...prev,
        current_page: 1,
      }));
      if (serverSidePaginationData.current_page === 1) {
        handleGetListing();
      }
    }
    setShowAdd(false);
  };

  const handleEditResult = (resp: {
    newObject: any;
    targetObject: any;
  }): void => {
    const { newObject: updatedObj, targetObject } = resp;
    if (isStaticData) {
      setListingData((prev) =>
        prev.map((item) =>
          item.id === targetObject.id ? { ...item, ...updatedObj } : item,
        ),
      );
    } else {
      handleGetListing();
    }
    setShowEdit(false);
  };

  const handleDeleteResult = (resp: { targetObject: any } | null): void => {
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
        listingData.length === 1 &&
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

  const handleAddFormSubmit = (formData: Record<string, any>): Promise<void> =>
    executeAction(
      () =>
        modalConfig?.addModal?.handleSubmit
          ? modalConfig.addModal.handleSubmit(formData)
          : Promise.resolve({ newObject: null }),
      handleAddResult,
    );

  const handleEditFormSubmit = (formData: Record<string, any>): Promise<void> =>
    executeAction(
      () =>
        modalConfig?.editModal?.handleSubmit
          ? modalConfig.editModal.handleSubmit(formData, selectedItem)
          : Promise.resolve({ newObject: null, targetObject: null }),
      handleEditResult,
    );

  const handleGetListing = async (): Promise<void> => {
    setLoading(true);

    try {
      const resp = await fetchData({
        ...serverSidePaginationData,
        ...filterData,
      });
      setListingData(resp.data || []);
      setPaginationData(resp.pagination || null);
    } catch (error: any) {
      enqueueSnackbar(error.message || "Failed to fetch data", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFilterData = (data: Record<string, any>): void => {
    setFilterData(() => ({ ...data }));
    if (tableConfig?.filter?.useServerSideFilters) {
      setChangeFilterData((prev) => !prev);
    }
  };

  const filterByMatchingFields = (
    data: any[],
    filters: Record<string, any>,
  ): any[] => {
    return data.filter((item) =>
      Object.entries(filters).every(([key, value]) => item[key] === value),
    );
  };

  const filteredData = useMemo(() => {
    if (tableConfig?.filter?.useServerSideFilters) return listingData;
    return filterByMatchingFields(listingData, filterData);
  }, [listingData, filterData, tableConfig?.filter?.useServerSideFilters]);

  const ViewComponent = modalConfig?.viewModal?.component;

  useEffect(() => {
    handleGetListing();
  }, [
    serverSidePaginationData.search,
    serverSidePaginationData.rows_per_page,
    serverSidePaginationData.current_page,
    serverSidePaginationData.sort_by,
    serverSidePaginationData.sort_order,
    changeFilterData,
  ]);

  return (
    <div>
      <Table
        title={title}
        setShowAdd={setShowAdd}
        description={config.description}
        buttonText={config.buttonText}
        showAddButton={!!modalConfig?.addModal}
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

      <Modal
        isOpen={showAdd}
        onClose={() => {
          if (!formLoading) {
            setShowAdd(false);
          }
        }}
        icon={modalConfig?.addModal?.icon}
        title={modalConfig?.addModal?.title || "Add New"}
        size={modalConfig?.addModal?.size || "md"}
        onFormSubmit={() =>
          document.querySelector<HTMLFormElement>("#addForm")?.requestSubmit()
        }
        loadingBtn={formLoading}
        actionButtons={modalConfig?.addModal?.actionButtons || []}
      >
        <Form
          config={modalConfig?.addModal || {}}
          onSubmit={handleAddFormSubmit}
          initialData={{}}
          type="add"
          loading={formLoading}
        />
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={showEdit}
        onClose={() => {
          if (!formLoading) {
            setShowEdit(false);
          }
        }}
        icon={modalConfig?.editModal?.icon}
        title={modalConfig?.editModal?.title || "Edit"}
        size={modalConfig?.editModal?.size || "md"}
        onFormSubmit={() =>
          document.querySelector<HTMLFormElement>("#editForm")?.requestSubmit()
        }
        actionButtons={modalConfig?.editModal?.actionButtons || []}
        loadingBtn={formLoading}
      >
        <Form
          config={modalConfig?.editModal || {}}
          onSubmit={handleEditFormSubmit}
          initialData={selectedItem}
          type="edit"
          loading={formLoading}
          fetchRowDetails={fetchRowDetails}
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
            modalConfig?.deleteModal?.icon || (
              <Icon icon="ph:warning-bold" className="w-6 h-6 text-red-500" />
            )
          }
          title={modalConfig?.deleteModal?.title || "Confirm Delete"}
          size={modalConfig?.deleteModal?.size || "md"}
          loading={formLoading}
          actionButtons={modalConfig?.deleteModal?.actionButtons || []}
          executeFunction={executeAction}
          selectedItem={selectedItem}
        >
          <div className="flex items-center space-x-2 py-3">
            <div>
              <p className="text-md text-gray-700 dark:text-white">
                {modalConfig?.deleteModal?.confirmText ||
                  "Are you sure you want to delete this item?"}
              </p>
              {modalConfig?.deleteModal?.referenceKey && (
                <p className="text-md font-semibold text-gray-700 dark:text-white">
                  {selectedItem?.[modalConfig?.deleteModal?.referenceKey]}
                </p>
              )}
            </div>
          </div>
        </Modal>
      )}

      {/* View Detail Modal */}
      {modalConfig?.viewModal && (
        <Modal
          isOpen={showView}
          onClose={() => {
            setShowView(false);
            setSelectedItem(null);
          }}
          icon={modalConfig?.viewModal?.icon}
          title={modalConfig?.viewModal?.title || "View Details"}
          size={modalConfig?.viewModal?.size || "lg"}
          footerConfig={modalConfig?.viewModal.footer}
        >
          {ViewComponent ? (
            <ViewComponent data={selectedItem} />
          ) : (
            <Details
              data={selectedItem}
              fetchRowDetails={fetchRowDetails}
              config={modalConfig?.viewModal || {}}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default CrudPage;
