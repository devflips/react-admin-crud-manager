import React, { useEffect, useMemo, useState } from "react";
import Table from "./Table/Table";
import Modal from "./Modal/Modal";
import Form from "./Form/Form";
import { Icon } from "@iconify/react";
import { useSnackbar } from "notistack";
import Details from "./Details/Details";
import type {
  CrudPageProps,
  ServerSidePaginationData,
} from "../types/crudtypes";
import { crudClasses, joinClasses } from "../lib/crudClasses";

// ─── Dynamic RRD loader ───────────────────────────────────────────────────────
let _rrd: any = null;
let _rrdPromise: Promise<any> | null = null;

function loadRRD(): Promise<any> {
  if (_rrd) return Promise.resolve(_rrd);
  if (_rrdPromise) return _rrdPromise;
  _rrdPromise = import("react-router-dom")
    .then((mod) => {
      _rrd = mod;
      return mod;
    })
    .catch(() => {
      _rrd = null;
      console.warn("[CrudPage] react-router-dom not found — modal mode.");
      return null;
    });
  return _rrdPromise;
}

// ─────────────────────────────────────────────────────────────────────────────

interface RRDHooks {
  useNavigate: () => (to: any, opts?: any) => void;
  useParams: () => Record<string, string | undefined>;
  useLocation: () => { state?: any; pathname: string };
}

interface PageProps {
  modalConfig: any;
  fetchRowDetails?: (row: any) => Promise<any>;
  enqueueSnackbar: any;
  hooks: RRDHooks;
  onSuccess?: (type: "add" | "edit", resp: any) => void; // ← ADDED
}

// ─── Path matcher — :param wildcards ko handle karta hai ─────────────────────
function matchPath(
  pattern: string,
  pathname: string,
): Record<string, string> | null {
  const patternParts = pattern.split("/").filter(Boolean);
  const pathParts = pathname.split("/").filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(":")) {
      params[patternParts[i].slice(1)] = pathParts[i];
    } else if (patternParts[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── PageLayout ───────────────────────────────────────────────────────────────
const PageLayout: React.FC<{
  title: string;
  onBack: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ title, onBack, children, footer }) => (
  <div className="racm-root flex flex-col min-h-screen w-full bg-white dark:bg-gray-900">
    {/* Header */}
    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </button>
      <div className="w-px h-5 bg-gray-300 dark:bg-gray-600" />
      <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h1>
    </div>

    {/* Body */}
    <div className="flex-1 p-6 w-full">{children}</div>

    {/* Sticky footer */}
    {footer && (
      <div className="sticky bottom-0 z-10 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-4">
        {footer}
      </div>
    )}
  </div>
);

// ─── PageActionButtons ────────────────────────────────────────────────────────
const PageActionButtons: React.FC<{
  formId: string;
  actionButtons?: Array<{
    type: string;
    label: string;
    color?: string;
    variant?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent, item?: any) => void;
  }>;
  loading?: boolean;
  onBack: () => void;
}> = ({ formId, actionButtons = [], loading, onBack }) => {
  const colorMap: Record<string, string> = {
    error: "bg-red-600 hover:bg-red-700 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    default: "bg-primary-600 hover:bg-primary-700 text-white",
  };

  const submitBtn = actionButtons.find((b) => b.type === "submit");
  const otherBtns = actionButtons.filter((b) => b.type !== "submit");

  return (
    <div className="flex items-center justify-end gap-3">
      {/* <button
        type="button"
        onClick={onBack}
        className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        Cancel
      </button> */}

      {otherBtns.map((btn, i) => (
        <button
          key={i}
          type="button"
          disabled={btn.disabled || loading}
          onClick={(e) => btn.onClick?.(e)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 ${colorMap[btn.color || "default"]}`}
        >
          {btn.label}
        </button>
      ))}

      <button
        type="button"
        disabled={loading}
        onClick={() =>
          document
            .getElementById(formId)
            ?.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true }),
            )
        }
        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white transition-colors disabled:opacity-60"
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
        {submitBtn?.label ?? "Save"}
      </button>
    </div>
  );
};

// ─── AddPage ──────────────────────────────────────────────────────────────────
const AddPage: React.FC<PageProps> = ({
  modalConfig,
  enqueueSnackbar,
  hooks,
  onSuccess, // ← ADDED
}) => {
  const nav = hooks.useNavigate();
  const [fl, setFl] = useState(false);

  const submit = async (fd: any) => {
    setFl(true);
    try {
      const resp = await modalConfig?.addModal?.handleSubmit?.(fd);
      onSuccess?.("add", resp); // ← CALL BEFORE nav so list updates
      nav(-1);
    } catch (e: any) {
      enqueueSnackbar(e?.message || "Error", { variant: "error" });
    } finally {
      setFl(false);
    }
  };

  return (
    <PageLayout
      title={modalConfig?.addModal?.title ?? "Add"}
      onBack={() => nav(-1)}
      footer={
        <PageActionButtons
          formId="addForm"
          actionButtons={modalConfig?.addModal?.actionButtons || []}
          loading={fl}
          onBack={() => nav(-1)}
        />
      }
    >
      <Form
        config={modalConfig?.addModal || {}}
        onSubmit={submit}
        initialData={{}}
        type="add"
        loading={fl}
      />
    </PageLayout>
  );
};

// ─── EditPage ─────────────────────────────────────────────────────────────────
const EditPage: React.FC<
  PageProps & { routeParams: Record<string, string> }
> = ({
  modalConfig,
  fetchRowDetails,
  enqueueSnackbar,
  hooks,
  routeParams,
  onSuccess,
}) => {
  // ← onSuccess ADDED
  const nav = hooks.useNavigate();
  const loc = hooks.useLocation();
  const [data, setData] = useState<any>(loc?.state?.item ?? null);
  const [pl, setPl] = useState(!loc?.state?.item);
  const [fl, setFl] = useState(false);

  useEffect(() => {
    if (!data && routeParams.id && fetchRowDetails) {
      fetchRowDetails({ id: routeParams.id })
        .then((r: any) => setData(r?.data ?? r))
        .finally(() => setPl(false));
    } else {
      setPl(false);
    }
  }, [routeParams.id]);

  const submit = async (fd: any) => {
    setFl(true);
    try {
      const resp = await modalConfig?.editModal?.handleSubmit?.(fd, data);
      onSuccess?.("edit", resp); // ← CALL BEFORE nav so list updates
      nav(-1);
    } catch (e: any) {
      enqueueSnackbar(e?.message || "Error", { variant: "error" });
    } finally {
      setFl(false);
    }
  };

  if (pl)
    return (
      <div className="flex justify-center p-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400" />
      </div>
    );

  return (
    <PageLayout
      title={modalConfig?.editModal?.title ?? "Edit"}
      onBack={() => nav(-1)}
      footer={
        <PageActionButtons
          formId="editForm"
          actionButtons={modalConfig?.editModal?.actionButtons || []}
          loading={fl}
          onBack={() => nav(-1)}
        />
      }
    >
      <Form
        config={modalConfig?.editModal || {}}
        onSubmit={submit}
        initialData={data ?? {}}
        type="edit"
        loading={fl}
        fetchRowDetails={fetchRowDetails}
      />
    </PageLayout>
  );
};

// ─── ViewPage ─────────────────────────────────────────────────────────────────
const ViewPage: React.FC<
  PageProps & { routeParams: Record<string, string> }
> = ({ modalConfig, fetchRowDetails, hooks, routeParams }) => {
  const nav = hooks.useNavigate();
  const loc = hooks.useLocation();
  const [data, setData] = useState<any>(loc?.state?.item ?? null);
  const [pl, setPl] = useState(!loc?.state?.item);

  useEffect(() => {
    if (!data && routeParams.id && fetchRowDetails) {
      fetchRowDetails({ id: routeParams.id })
        .then((r: any) => setData(r?.data ?? r))
        .finally(() => setPl(false));
    } else {
      setPl(false);
    }
  }, [routeParams.id]);

  if (pl)
    return (
      <div className="flex justify-center p-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400" />
      </div>
    );

  return (
    <PageLayout
      title={modalConfig?.viewModal?.title ?? "Details"}
      onBack={() => nav(-1)}
      // footer={
      //   <div className="flex justify-end">
      //     <button
      //       type="button"
      //       onClick={() => nav(-1)}
      //       className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      //     >
      //       {modalConfig?.viewModal?.footer?.cancelText ?? "Close"}
      //     </button>
      //   </div>
      // }
    >
      <Details
        data={data}
        fetchRowDetails={fetchRowDetails}
        config={modalConfig?.viewModal || {}}
      />
    </PageLayout>
  );
};

// ─── CrudPageInner ────────────────────────────────────────────────────────────
const CrudPageInner: React.FC<
  CrudPageProps & {
    onNavigate: (path: string, opts?: any) => void;
    rrdHooks: RRDHooks | null;
  }
> = ({ config, onNavigate, rrdHooks }) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    title,
    fetchData,
    fetchRowDetails,
    isStaticData = false,
    tableConfig,
    modalConfig,
    filterConfig,
  } = config;

  const renderInPage = !!config.routes && !!rrdHooks;
  const renderInPageAdd = !!config.routes && config?.routes?.add && !!rrdHooks;
  const renderInPageEdit =
    !!config.routes && config?.routes?.edit && !!rrdHooks;
  const renderInPageDetails =
    !!config.routes && config?.routes?.view && !!rrdHooks;

  const location = rrdHooks?.useLocation?.();
  const pathname = location?.pathname ?? "";

  const activeRoute = useMemo(() => {
    if (!renderInPage || !config.routes) return null;
    if (config.routes.add) {
      const p = matchPath(config.routes.add, pathname);
      if (p) return { type: "add" as const, params: p };
    }
    if (config.routes.edit) {
      const p = matchPath(config.routes.edit, pathname);
      if (p) return { type: "edit" as const, params: p };
    }
    if (config.routes.view) {
      const p = matchPath(config.routes.view, pathname);
      if (p) return { type: "view" as const, params: p };
    }
    return null;
  }, [pathname, renderInPage, config.routes]);

  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
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
  const [changeFilterData, setChangeFilterData] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Record<string, any> | null>(
    null,
  );

  const buildRoute = (pattern: string, item: any) =>
    pattern.replace(/:[^/]+/, String(item?.id ?? item?._id ?? ""));

  const handleMenuAction = (action: string, item: any): void => {
    if (renderInPage && config.routes) {
      if (action === "edit" && config.routes.edit) {
        onNavigate(buildRoute(config.routes.edit, item), { state: { item } });
        return;
      }
      if (action === "view" && config.routes.view) {
        onNavigate(buildRoute(config.routes.view, item), { state: { item } });
        return;
      }
    }
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

  const handleAddClick = () => {
    if (renderInPage && config.routes?.add) {
      onNavigate(config.routes.add);
      return;
    }
    setShowAdd(true);
  };

  const executeAction = async (
    action: (() => Promise<any>) | null,
    onSuccess?: (resp: any) => void,
    success_message = "",
    error_message = "",
  ): Promise<void> => {
    setFormLoading(true);
    try {
      if (!action) return;
      const resp = await action();
      if (success_message || resp?.message)
        enqueueSnackbar(success_message || resp.message || "Success", {
          variant: "success",
        });
      onSuccess?.(resp);
    } catch (error: any) {
      if (error_message || error?.message)
        enqueueSnackbar(error_message || error.message || "Error occurred", {
          variant: "error",
        });
    } finally {
      setFormLoading(false);
    }
  };

  const handleAddResult = (resp: { newObject: any }): void => {
    if (isStaticData) {
      setListingData((prev) => [resp.newObject, ...prev]);
      setPaginationData((prev: any) => ({ ...prev, current_page: 1 }));
    } else {
      setServerSidePaginationData((prev) => ({ ...prev, current_page: 1 }));
      if (serverSidePaginationData.current_page === 1) handleGetListing();
    }
    setShowAdd(false);
  };

  const handleEditResult = (resp: {
    newObject: any;
    targetObject: any;
  }): void => {
    if (isStaticData) {
      setListingData((prev) =>
        prev.map((item) =>
          item.id === resp.targetObject.id
            ? { ...item, ...resp.newObject }
            : item,
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
      if (listingData.length === 1 && serverSidePaginationData.current_page > 1)
        setServerSidePaginationData((prev) => ({
          ...prev,
          current_page: prev.current_page - 1,
        }));
      else handleGetListing();
    }
    setShowDelete(false);
    setSelectedItem(null);
  };

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
    if (tableConfig?.filter?.useServerSideFilters)
      setChangeFilterData((p) => !p);
  };

  const filterByMatchingFields = (data: any[], filters: Record<string, any>) =>
    data.filter((item) =>
      Object.entries(filters).every(([key, value]) => {
        if (value === "" || value === null || value === undefined) return true;
        if (Array.isArray(value)) {
          if (value.length === 0) return true;
          const iv = item[key];
          return Array.isArray(iv)
            ? value.some((v) => iv.includes(v))
            : value.includes(iv);
        }
        return item[key] === value;
      }),
    );

  const filteredData = useMemo(() => {
    if (tableConfig?.filter?.useServerSideFilters) return listingData;
    return filterByMatchingFields(listingData, filterData);
  }, [listingData, filterData, tableConfig?.filter?.useServerSideFilters]);

  useEffect(() => {
    handleGetListing();
  }, [
    serverSidePaginationData.search,
    serverSidePaginationData.rows_per_page,
    serverSidePaginationData.current_page,
    serverSidePaginationData.sort_by,
    serverSidePaginationData.sort_order,
    (serverSidePaginationData as any).active_tab,
    changeFilterData,
  ]);

  const ViewComponent = modalConfig?.viewModal?.component;

  // ─── ADDED: callback jo page route se add/edit result handle kare ──────────
  const handlePageSuccess = (type: "add" | "edit", resp: any) => {
    if (type === "add") {
      handleAddResult(resp);
    } else if (type === "edit") {
      handleEditResult(resp);
    }
  };
  // ──────────────────────────────────────────────────────────────────────────

  const pageProps: PageProps = {
    modalConfig,
    fetchRowDetails,
    enqueueSnackbar,
    hooks: rrdHooks!,
    onSuccess: handlePageSuccess, // ← ADDED
  };

  if (activeRoute?.type === "add") return <AddPage {...pageProps} />;
  if (activeRoute?.type === "edit")
    return <EditPage {...pageProps} routeParams={activeRoute.params} />;
  if (activeRoute?.type === "view")
    return <ViewPage {...pageProps} routeParams={activeRoute.params} />;

  const handleAddFormSubmit = (fd: Record<string, any>) =>
    executeAction(
      () =>
        modalConfig?.addModal?.handleSubmit
          ? modalConfig.addModal.handleSubmit(fd)
          : Promise.resolve({ newObject: null }),
      handleAddResult,
    );
  const handleEditFormSubmit = (fd: Record<string, any>) =>
    executeAction(
      () =>
        modalConfig?.editModal?.handleSubmit
          ? modalConfig.editModal.handleSubmit(fd, selectedItem)
          : Promise.resolve({ newObject: null, targetObject: null }),
      handleEditResult,
    );

  return (
    <div className={crudClasses.crudPage.root}>
      <Table
        title={title}
        setShowAdd={handleAddClick}
        description={config.description}
        buttonText={config.buttonText}
        showAddButton={!!modalConfig?.addModal}
        config={{
          ...tableConfig,
          pagination: { ...tableConfig.pagination, ...paginationData },
          data: filteredData,
          setServerSidePaginationData,
          onMenuAction: handleMenuAction,
          filterConfig,
          onFilterApply: handleFilterData,
          loading,
        }}
      />

      {!renderInPageAdd && (
        <Modal
          isOpen={showAdd}
          onClose={() => {
            if (!formLoading) setShowAdd(false);
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
      )}

      {!renderInPageEdit && (
        <Modal
          isOpen={showEdit}
          onClose={() => {
            if (!formLoading) setShowEdit(false);
          }}
          icon={modalConfig?.editModal?.icon}
          title={modalConfig?.editModal?.title || "Edit"}
          size={modalConfig?.editModal?.size || "md"}
          onFormSubmit={() =>
            document
              .querySelector<HTMLFormElement>("#editForm")
              ?.requestSubmit()
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
      )}

      <Modal
        isOpen={showDelete}
        onClose={(resp) => handleDeleteResult(resp)}
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
        <div
          className={joinClasses(
            crudClasses.crudPage.deleteContent,
            "flex items-center space-x-2 py-3",
          )}
        >
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

      {!renderInPageDetails && modalConfig?.viewModal && (
        <Modal
          isOpen={showView}
          onClose={() => {
            setShowView(false);
            setSelectedItem(null);
          }}
          icon={modalConfig?.viewModal?.icon}
          title={modalConfig?.viewModal?.title || "View Details"}
          size={modalConfig?.viewModal?.size || "lg"}
          footerConfig={modalConfig?.viewModal?.footer}
          classNames={modalConfig?.viewModal?.modalClassNames}
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

// ─── NavigationBridge ─────────────────────────────────────────────────────────
const NavigationBridge: React.FC<{ config: CrudPageProps["config"] }> = ({
  config,
}) => {
  const routerContext = _rrd?.useInRouterContext();

  if (routerContext) {
    const navigate = _rrd?.useNavigate();
    const rrdHooks: RRDHooks = {
      useNavigate: _rrd?.useNavigate || null,
      useParams: _rrd?.useParams || null,
      useLocation: _rrd?.useLocation || null,
    };
    return (
      <CrudPageInner
        config={config}
        onNavigate={(path, opts) => navigate(path, opts)}
        rrdHooks={rrdHooks}
      />
    );
  } else {
    return (
      <CrudPageInner config={config} onNavigate={() => {}} rrdHooks={null} />
    );
  }
};

// ─── Main export ──────────────────────────────────────────────────────────────
const CrudPage: React.FC<CrudPageProps> = ({ config }) => {
  const [rrdStatus, setRrdStatus] = useState<
    "loading" | "available" | "unavailable"
  >(_rrd ? "available" : "loading");
  useEffect(() => {
    if (_rrd) {
      setRrdStatus("available");
      return;
    }
    loadRRD().then((rrd) => setRrdStatus(rrd ? "available" : "unavailable"));
  }, []);
  if (rrdStatus === "loading") return null;
  if (rrdStatus === "available" && config.routes) {
    return <NavigationBridge config={config} />;
  }
  return (
    <CrudPageInner config={config} onNavigate={() => {}} rrdHooks={null} />
  );
};

export default CrudPage;
