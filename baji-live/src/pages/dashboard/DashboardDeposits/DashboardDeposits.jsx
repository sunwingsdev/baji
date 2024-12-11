import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetDepositsQuery } from "@/redux/features/allApis/depositsApi/depositsApi";
import { useState } from "react";

const DashboardDeposits = () => {
  const { data, isLoading } = useGetDepositsQuery();
  const [statusFilter, setStatusFilter] = useState(""); // To handle selected status
  const [searchTerm, setSearchTerm] = useState(""); // To handle search term
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal
  const [selectedRow, setSelectedRow] = useState(null); // Store selected row for modal

  const handleViewClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  const columns = [
    { headerName: "Name", field: "userInfo.username" },
    { headerName: "Email", field: "userInfo.email" },
    { headerName: "Phone", field: "userInfo.phone" },
    { headerName: "Payment Method", field: "paymentMethod" },
    { headerName: "Deposit Channel", field: "depositChannel" },
    {
      headerName: "Status",
      customRender: (row) => (
        <div className="flex items-center space-x-2">
          <span>{row.status}</span>
          {row.status === "pending" && (
            <button className="px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600">
              Done
            </button>
          )}
        </div>
      ),
    },
    { headerName: "Amount", field: "amount" },
    {
      headerName: "View",
      buttonConfig: {
        label: "View",
        bgColor: "bg-green-500",
        hoverColor: "hover:bg-green-600",
        onClick: handleViewClick,
      },
    },
    {
      headerName: "Delete",
      buttonConfig: {
        label: "Delete",
        bgColor: "bg-red-500",
        hoverColor: "hover:bg-red-600",
        // onClick: (row) => alert(`Deleting ${row.username}`),
      },
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Deposits</h1>

      {/* Search and Filter Section */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by Name, Email or Phone"
          className="px-4 py-2 border border-gray-300 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Handle search
        />
        <div className="flex items-center space-x-2">
          <span className="font-medium">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)} // Handle filter by status
            className="px-4 py-2 border border-gray-300 rounded w-1/4"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="complete">Complete</option>
          </select>
        </div>
      </div>

      {/* Table Rendering */
      {isLoading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No Data</p>
      ) : (
        <DynamicTable columns={columns} data={data} />
      )}

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Showing 1-10 of {data?.length} results
        </p>
        <div className="space-x-2">
          <button className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400">
            Previous
          </button>
          <button className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400">
            Next
          </button>
        </div>
      </div>

      {/* Modal for Viewing Details */}
      {isModalOpen && selectedRow && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">View Details</h2>
            <p>
              <strong>Name:</strong> {selectedRow.userInfo.username}
            </p>
            <p>
              <strong>Email:</strong> {selectedRow.userInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedRow.userInfo.phone}
            </p>
            <p>
              <strong>Amount:</strong> {selectedRow.amount}
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardDeposits;
