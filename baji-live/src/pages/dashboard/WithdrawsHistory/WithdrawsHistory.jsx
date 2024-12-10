import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetWithdrawsQuery } from "@/redux/features/allApis/withdrawsApi/withdrawsApi";

const WithdrawsHistory = () => {
  const { data, isLoading } = useGetWithdrawsQuery();
  const columns = [
    { headerName: "Name", field: "userInfo.username" },
    { headerName: "Email", field: "userInfo.email" },
    { headerName: "Phone", field: "userInfo.phone" },
    { headerName: "Payment Method", field: "paymentMethod" },
    { headerName: "Status", field: "status" },
    { headerName: "Amount", field: "amount" },

    {
      headerName: "View",
      buttonConfig: {
        label: "View",
        bgColor: "bg-green-500",
        hoverColor: "hover:bg-green-600",
        // onClick: (row) => alert(`Viewing details for ${row.username}`),
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
    <div className="">
      <h1 className="text-lg md:text-2xl font-bold mb-4">All Deposits</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No Data </p>
      ) : (
        <DynamicTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default WithdrawsHistory;
