import clsx from "clsx";
import { useState } from "react";
import ViewModal from "../sharedModal/ViewModal";
import DeleteConfirmationModal from "../sharedModal/DeleteConfirmationModal";

// Helper function to access nested properties
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
};

const DynamicTable = ({ columns, data, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleViewClick = (row) => {
    setModalData(row); // Set the selected row data to show in the modal
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setModalData(null); // Reset modal data
  };

  // Delete Modal Handlers
  const handleDeleteClick = (row) => {
    setSelectedRow(row); // Set selected row for deletion
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  // Conditional rendering for table content
  const renderTableContent = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan={columns.length} className="text-center py-4 text-lg">
            Data is Loading...
          </td>
        </tr>
      );
    }

    if (!data || data.length === 0) {
      return (
        <tr>
          <td colSpan={columns.length} className="text-center py-4 text-lg">
            No Data Available
          </td>
        </tr>
      );
    }

    return data?.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columns.map((col, colIndex) => (
          <td
            key={colIndex}
            className="border-2 border-black md:px-2 lg:px-2 py-2 sm:text-[10px] lg:text-[15px]"
          >
            {col.customRender ? (
              col.customRender(row)
            ) : col.buttonConfig ? (
              <button
                onClick={() =>
                  col.buttonConfig.label === "View"
                    ? handleViewClick(row)
                    : handleDeleteClick(row)
                }
                className={clsx(
                  "px-2 py-1 rounded text-white",
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
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-nowrap">
        <thead className="sm:text-xs md:text-base bg-[#14815f]">
          <tr className="text-white">
            {columns.map((col, index) => (
              <th
                key={index}
                className="border-2 border-black sm:px-0 md:px-2 py-1 md:py-2 text-center text-xs md:text-sm lg:text-lg"
              >
                {col.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[12px] md:text-base lg:text-[15px] text-center">
          {renderTableContent()}
        </tbody>
      </table>

      {/* Show modal with dynamic data if modalData exists */}
      <ViewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalData={modalData}
      />

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          modalData={selectedRow}
        />
      )}
    </div>
  );
};

export default DynamicTable;
