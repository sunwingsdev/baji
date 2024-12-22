import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";

const Affilitors = () => {
  // const { data } = useGetUsersQuery();
  const data = [
    {
      agent_name: "Agent001",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 2500,
      status: "active",
    },
    {
      agent_name: "Agent002",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 3200,
      status: "inactive",
    },
    {
      agent_name: "Agent003",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 2100,
      status: "active",
    },
    {
      agent_name: "Agent004",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 4000,
      status: "active",
    },
    {
      agent_name: "Agent005",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 2800,
      status: "inactive",
    },
    {
      agent_name: "Agent006",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 2400,
      status: "active",
    },
    {
      agent_name: "Agent007",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 2600,
      status: "active",
    },
    {
      agent_name: "Agent008",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 2500,
      status: "inactive",
    },
    {
      agent_name: "Agent009",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 3500,
      status: "ACTIVE",
    },
    {
      agent_name: "Agent010",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 2800,
      status: "inactive",
    },
  ];

  const columns = [
    { headerName: "Agent name", field: "agent_name" },
    {
      headerName: "Login",
      customRender: (row) => (
        <span className="p-1 lg:p-2  rounded text-white bg-green-500">
          {row.login}
        </span>
      ),
    },

    { headerName: "D-B", field: "D_B" },
    { headerName: "W-B", field: "W_B" },
    { headerName: "A-U-C", field: "A_U_C" },
    { headerName: "A-D-C", field: "A_D_C" },
    { headerName: "Balance", field: "balance" },
    // { headerName: "status", field: "status" },
    {
      headerName: "Status",
      customRender: (row) => (
        <span
          className={`px-1 Md:px-2 py-1 rounded text-white ${
            row.status.toLowerCase() === "active"
              ? "bg-green-500 "
              : "bg-red-500"
          }`}
        >
          {row.status.toUpperCase()}
        </span>
      ),
    },
  ];
  return (
    <div className=" p-2">
      <h1 className="text-center text-xl lg:text-2xl  bg-[#59be7b] text-white p-2 lg:font-semibold rounded-md">
        Affilitor
      </h1>
      <div className="flex justify-between p-2">
        <input
          className="border-2 border-zinc-500 rounded-md w-4/6 p-1 lg:p-2"
          placeholder="search here"
          type="text"
        />
        <p className=" text-base lg:text-xl font-bold bg-yellow-400 p-1 lg:p-2 rounded-md">
          +Add
        </p>
      </div>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default Affilitors;
