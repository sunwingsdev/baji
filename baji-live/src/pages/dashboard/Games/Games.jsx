import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";

const Games = () => {
  const { data } = useGetUsersQuery();
  console.log(data);
  const columns = [
    { headerName: "Main category", field: "username" },
    { headerName: "position D-B", field: "fullName" },
    { headerName: "Href Link", field: "phone" },
    { headerName: "Count users", field: "email" },
    { headerName: "Create Date", field: "refer" },
    { headerName: "status", field: "refer" },
  ];
  return (
    <div className="border-black border-2 p-2">
      <h1 className="text-center text-4xl  bg-[#14815f] text-white p-2 font-semibold">
        All Games Catagories
      </h1>
      <div className="flex justify-between p-2">
        <input className="border-2 rounded-md" type="text" />
        <p className="text-2xl font-bold bg-yellow-400 px-6">+Add</p>
      </div>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default Games;
