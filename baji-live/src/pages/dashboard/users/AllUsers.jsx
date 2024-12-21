import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";

const AllUsers = () => {
  const { data } = useGetUsersQuery();
  const columns = [
    { headerName: "Agent name", field: "username" },
    { headerName: "Loging", field: "fullName" },
    { headerName: "T-D-B", field: "phone" },
    { headerName: "T-W-B", field: "email" },
    { headerName: "Win", field: "refer" },
    { headerName: "Loss", field: "refer" },
    { headerName: "Blance", field: "refer" },
    { headerName: "status", field: "refer" },
  ];
  return (
    <div className="border-black border-2 p-2">
      <h1 className="text-center text-4xl  bg-[#14815f] text-white p-2 font-semibold">
        All Users
      </h1>
      <div className="flex justify-between p-2">
        <input
          className="border-2 border-zinc-500 rounded-md w-4/6"
          placeholder="search here"
          type="text"
        />
        <button className="text-2xl font-bold bg-yellow-400 px-6">+Add</button>
      </div>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default AllUsers;
