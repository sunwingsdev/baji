import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";

const Users = () => {
  const { data } = useGetUsersQuery();
  console.log(data);
  const columns = [
    { headerName: "Username", field: "username" },
    { headerName: "Name", field: "fullName" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Email", field: "email" },
    { headerName: "Refer Code", field: "refer" },
    {
      headerName: "View",
      buttonConfig: {
        label: "View",
        bgColor: "bg-green-500",
        hoverColor: "hover:bg-green-600",
        onClick: (row) => alert(`Viewing details for ${row.username}`),
      },
    },
    {
      headerName: "Delete",
      buttonConfig: {
        label: "Delete",
        bgColor: "bg-red-500",
        hoverColor: "hover:bg-red-600",
        onClick: (row) => alert(`Deleting ${row.username}`),
      },
    },
  ];

  return (
    <div className="p-2">
      <h1 className="text-lg md:text-xl font-bold mb-4 text-center">
        All users
      </h1>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default Users;
