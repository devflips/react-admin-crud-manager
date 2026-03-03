import React, { useEffect, useState } from "react";
import DetailRow from "./components/DetailRow";
import CardGroup from "./components/CardGroup";
import GroupRow from "./components/GroupRow";
import { enqueueSnackbar } from "notistack";

export default function Details({ data, config, fetchRowDetails }) {
  const { fields, containerClass } = config;

  const [detailsData, setDetailsData] = useState(data);

  const [dataLoading, setDataLoading] = useState(true);

  const handleGetDetails = async () => {
    fetchRowDetails?.(data)
      .then((resp) => {
        setDetailsData(resp.data);
      })
      .catch((error) => {
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
      setDetailsData(data);
      setDataLoading(false);
    }
  }, []);

  if (dataLoading) {
    return (
      // spinner loader
      <div className="flex items-center justify-center h-64">
        <div
          className={`rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8 border-4`}
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
            <GroupRow col={col} data={detailsData} />
          ) : col.type == "cardGroup" ? (
            <CardGroup col={col} data={detailsData} />
          ) : (
            <DetailRow col={col} data={detailsData} />
          );
        })}
      </div>
    </>
  );
}
