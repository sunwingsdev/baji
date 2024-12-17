import clsx from "clsx";
import { useState } from "react";
import ViewModal from "../sharedModal/ViewModal"; // নতুন মডাল কম্পোনেন্ট ইমপোর্ট করা
import DeleteConfirmationModal from "../sharedModal/DeleteConfirmationModal";

// Helper function to access nested properties
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
};

const DynamicTable = ({ columns, data }) => {
  const [tableData, setTableData] = useState(data); // Manage table data state
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

  const handleConfirmDelete = () => {
    setTableData((prevData) => prevData.filter((item) => item !== selectedRow)); // Remove selected row from table data
    closeDeleteModal(); // Close the delete modal
  };

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
          {tableData?.map((row, rowIndex) => (
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
                      onClick={() =>
                        col.buttonConfig.label === "View"
                          ? handleViewClick(row)
                          : handleDeleteClick(row)
                      } // Open modal on "View" button click
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
          onDelete={handleConfirmDelete}
          modalData={selectedRow}
        />
      )}
    </div>
  );
};

export default DynamicTable;
