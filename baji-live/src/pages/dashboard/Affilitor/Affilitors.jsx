import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";

const Affilitors = () => {
  const { data } = useGetUsersQuery();
  const columns = [
    { headerName: "Agent name", field: "username" },
    { headerName: "Login", field: "fullName" },
    { headerName: "D-B", field: "phone" },
    { headerName: "W-B", field: "email" },
    { headerName: "A-U-C", field: "refer" },
    { headerName: "A-D-C", field: "refer" },
    { headerName: "Blance", field: "refer" },
    { headerName: "status", field: "refer" },
  ];
  return (
    <div className="border-black border-2 p-2">
      <h1 className="text-center text-4xl  bg-[#14815f] text-white p-2 font-semibold">
        Affilitor
      </h1>
      <div className="flex justify-between p-2">
        <input
          className="border-2 border-zinc-500 rounded-md w-4/6"
          placeholder="search here"
          type="text"
        />
        <p className="text-2xl font-bold bg-yellow-400 px-6">+Add</p>
      </div>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default Affilitors;
