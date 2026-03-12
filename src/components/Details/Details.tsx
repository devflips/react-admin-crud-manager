import { useEffect, useState } from "react";
import DetailRow from "./components/DetailRow";
import CardGroup from "./components/CardGroup";
import GroupRow from "./components/GroupRow";
import { enqueueSnackbar } from "notistack";
import { crudClasses, joinClasses } from "../../lib/crudClasses";

interface DetailsProps {
  data: Record<string, any> | null;
  config: {
    fields?: Array<Record<string, any>>;
    containerClass?: string;
    variant?: "default" | "card" | "split";
    styles?: {
      containerClass?: string;
      rowClass?: string;
      groupClass?: string;
      cardGroupClass?: string;
      labelClass?: string;
      valueClass?: string;
      iconClass?: string;
      mediaGridClass?: string;
    };
  };
  fetchRowDetails?: (
    payload: Record<string, any>,
  ) => Promise<{ data: Record<string, any> }>;
}

export default function Details({
  data,
  config,
  fetchRowDetails,
}: DetailsProps) {
  const {
    fields = [],
    containerClass,
    variant = "default",
    styles = {},
  } = config || {};

  const safeData = data || {};

  const [detailsData, setDetailsData] = useState<Record<string, any>>(safeData);

  const [dataLoading, setDataLoading] = useState(true);

  const handleGetDetails = async () => {
    fetchRowDetails?.(safeData)
      .then((resp) => {
        setDetailsData(resp.data);
      })
      .catch((error: Error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      })
      .finally(() => {
        setDataLoading(false);
      });
  };

  useEffect(() => {
    if (fetchRowDetails instanceof Function) {
      handleGetDetails();
    } else {
      setDetailsData(safeData);
      setDataLoading(false);
    }
  }, []);

  if (dataLoading) {
    return (
      <div
        className={joinClasses(
          crudClasses.form.loading,
          "flex items-center justify-center h-64",
        )}
      >
        <div
          className="rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8"
          style={{
            borderTopColor: "border-primary-500",
          }}
        />
      </div>
    );
  }

  const variantContainerClass: Record<string, string> = {
    default: "grid grid-cols-12 gap-4",
    // card: each field is a standalone elevated card in a 12-col grid
    card: "grid grid-cols-12 gap-3",
    // split: clean property-sheet — bordered box, rows divided by hairlines
    split:
      "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800",
  };

  return (
    <>
      <div
        className={joinClasses(
          crudClasses.details.root,
          crudClasses.details.container,
          variantContainerClass[variant] || variantContainerClass.default,
          containerClass || "",
          styles.containerClass || "",
        )}
      >
        {fields.map((col) => {
          if (
            col.renderCondition &&
            typeof col.renderCondition === "function"
          ) {
            const shouldRender = col.renderCondition(detailsData);
            if (!shouldRender) {
              return null;
            }
          }
          return col.type == "group" ? (
            <GroupRow
              key={col.key || col.titleKey}
              col={col}
              data={detailsData}
              uiVariant={variant}
              styleConfig={styles}
            />
          ) : col.type == "cardGroup" ? (
            <CardGroup
              key={col.key || col.titleKey}
              col={col}
              data={detailsData}
              uiVariant={variant}
              styleConfig={styles}
            />
          ) : (
            <DetailRow
              key={col.key || col.label}
              col={col}
              data={detailsData}
              uiVariant={variant}
              styleConfig={styles}
            />
          );
        })}
      </div>
    </>
  );
}
