import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface TableSkeletonProps {
  rows: number;
  columns: number;
}

const TableSkeleton = ({ rows = 5, columns = 5 }: TableSkeletonProps) => {
  return (
    <>
      <div className="w-full mb-6 inline-flex justify-end items-center">
        <div className="h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
      </div>
      <div className="overflow-hidden rounded-md border border-gray-200 dark:border-gray-800">
        <table
          className={joinClasses(
            crudClasses.tableSkeleton.root,
            crudClasses.tableSkeleton.table,
            "w-full border-collapse",
          )}
        >
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900">
              {Array.from({ length: columns }).map((_, i) => (
                <th key={i} className="px-4 py-3">
                  <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-gray-200 dark:border-gray-800"
              >
                {Array.from({ length: columns }).map((_, colIndex) => (
                  <td key={colIndex} className="px-4 py-6">
                    <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableSkeleton;
