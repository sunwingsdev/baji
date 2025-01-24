import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";
import moment from "moment";

const AllUsers = () => {
  const { data, isLoading } = useGetUsersQuery();

  const columns = [
    { headerName: "Username", field: "username" },
    // {
    //   headerName: "Login",
    //   customRender: () => (
    //     <span className="px-4 py-1 rounded text-white bg-green-500">
    //       {"Login"}
    //     </span>
    //   ),
    // },
    { headerName: "Name", field: "fullName" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Email", field: "email" },
    { headerName: "Refer Code", field: "refer" },
    {
      headerName: "Joined At",
      field: "createdAt",
      customRender: (row) =>
        moment(row.createdAt).format("DD/MM/YYYY, h:mm:ss a"),
    },
    {
      headerName: "Last login",
      field: "lastLoginAt",
      customRender: (row) =>
        moment(row.lastLoginAt, "YYYYMMDD").startOf("hour").fromNow(),
    },
    { headerName: "Balance", field: "balance" },
    // { headerName: "status", field: "status" },
    // {
    //   headerName: "Status",
    //   customRender: (row) => (
    //     <span
    //       className={`px-2 py-1 rounded text-white ${
    //         row?.status?.toLowerCase() === "active"
    //           ? "bg-green-500 "
    //           : "bg-red-500"
    //       }`}
    //     >
    //       {row.status.toUpperCase()}
    //     </span>
    //   ),
    // },
  ];
  return (
    <div>
      <h1 className="text-center text-xl lg:text-2xl  bg-[#041d3c] text-white p-2 lg:font-semibold rounded-md">
        All Users
      </h1>
      <div className="flex justify-between py-2">
        <input
          className="border-2 border-zinc-500 rounded-md w-3/5 md:w-1/3 px-3 py-1.5 md:px-4 md:py-2 "
          placeholder="Search here"
          type="text"
        />
        <button className="text-base lg:text-xl font-bold bg-yellow-400 px-2 rounded-md">
          +Add
        </button>
      </div>
      <DynamicTable columns={columns} data={data} loading={isLoading} />
    </div>
  );
};

export default AllUsers;
