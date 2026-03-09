import { useEffect, useState } from "react";
import DetailRow from "./components/DetailRow";
import CardGroup from "./components/CardGroup";
import GroupRow from "./components/GroupRow";
import { enqueueSnackbar } from "notistack";

interface DetailsProps {
  data: Record<string, any> | null;
  config: {
    fields?: Array<Record<string, any>>;
    containerClass?: string;
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
  const { fields = [], containerClass } = config || {};

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
      <div className="flex items-center justify-center h-64">
        <div
          className="rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8"
          style={{
            borderTopColor: "border-primary-500",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-12 gap-4 ${containerClass || ""}`}>
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
            />
          ) : col.type == "cardGroup" ? (
            <CardGroup
              key={col.key || col.titleKey}
              col={col}
              data={detailsData}
            />
          ) : (
            <DetailRow
              key={col.key || col.label}
              col={col}
              data={detailsData}
            />
          );
        })}
      </div>
    </>
  );
}
