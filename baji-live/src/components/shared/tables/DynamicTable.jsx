import clsx from "clsx";

// Helper function to access nested properties
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
};

const DynamicTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-nowrap">
        <thead className="text-sm md:text-base bg-[#14815f]">
          <tr className=" text-white">
            {columns.map((col, index) => (
              <th
                key={index}
                className="border border-gray-300  px-2 md:px-4 py-1 md:py-2 text-left"
              >
                {col.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm md:text-base">
          {data?.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="border border-gray-300 px-4 py-2">
                  {col.customRender ? (
                    col.customRender(row)
                  ) : col.buttonConfig ? (
                    <button
                      onClick={() => col.buttonConfig.onClick(row)}
                      className={clsx(
                        "px-4 py-1 rounded text-white",
                        col.buttonConfig.bgColor || "bg-blue-500",
                        col.buttonConfig.hoverColor || "hover:bg-blue-600"
                      )}
                    >
                      {col.buttonConfig.label}
                    </button>
                  ) : (
                    getNestedValue(row, col.field) || "N/A"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
