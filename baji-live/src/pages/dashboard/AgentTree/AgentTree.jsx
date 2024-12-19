import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";

const AgentTree = () => {
  const { data } = useGetUsersQuery();
  const columns = [
    { headerName: "Agent name", field: "username" },
    { headerName: "Loging", field: "fullName" },
    { headerName: "D-B", field: "phone" },
    { headerName: "W-B", field: "email" },
    { headerName: "D-C-B", field: "refer" },
    { headerName: "W-C-B", field: "refer" },
    { headerName: "Blance", field: "refer" },
    { headerName: "status", field: "refer" },
  ];
  return (
    <div className="border-black border-2 p-2">
      <h1 className="text-center text-4xl  bg-[#14815f] text-white p-2 font-semibold">
        Agent Tree
      </h1>
      <div className="flex justify-between p-2">
        <input className="border-2 rounded-md" type="text" />
        <button className="text-2xl font-bold bg-yellow-400 px-6">+Add</button>
      </div>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default AgentTree;
