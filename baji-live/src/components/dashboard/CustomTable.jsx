const CustomTable = ({ title, headers, data, borderColor }) => (
  <div
    className="bg-white p-4 rounded-sm shadow-md"
    style={{ borderTop: `2px solid ${borderColor}` }}
  >
    <h2 className="text-lg font-semibold mb-4 border-b pb-2">{title}</h2>
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-[#0f5b85]">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border p-3 text-left font-medium text-sm text-yellow-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-gray-100 ${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              {Object.values(row).map((value, colIndex) => (
                <td
                  key={colIndex}
                  className="border p-3 text-sm text-gray-700 whitespace-nowrap"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default CustomTable;
