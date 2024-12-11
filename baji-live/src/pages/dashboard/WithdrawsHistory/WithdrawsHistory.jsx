import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetWithdrawsQuery } from "@/redux/features/allApis/withdrawsApi/withdrawsApi";

const WithdrawsHistory = () => {
  const { data, isLoading } = useGetWithdrawsQuery();
  const columns = [
    { headerName: "Name", field: "userInfo.username" },
    { headerName: "Email", field: "userInfo.email" },
    { headerName: "Phone", field: "userInfo.phone" },
    { headerName: "Payment Method", field: "paymentMethod" },
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
      },
    },
    {
      headerName: "Delete",
      buttonConfig: {
        label: "Delete",
        bgColor: "bg-red-500",
        hoverColor: "hover:bg-red-600",
      },
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Withdraws</h1>

      {/* Search and Filter Section */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by Name, Email or Phone"
          className="px-4 py-2 border border-gray-300 rounded w-1/3"
        />
        <select className="px-4 py-2 border border-gray-300 rounded w-1/4">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="complete">Complete</option>
        </select>
      </div>

      {/* Table Rendering */}
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
    </div>
  );
};

export default WithdrawsHistory;
