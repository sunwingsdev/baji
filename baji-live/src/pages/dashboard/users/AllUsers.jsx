import DynamicTable from "@/components/shared/tables/DynamicTable";

const AllUsers = () => {
  // const { data } = useGetUsersQuery();
  const data = [
    {
      agent_name: "Agent001",
      login: "Login",
      t_w_b: 5000,
      "w-d-b": 2300,
      win: 1200,
      los: 800,
      balance: 2500,
      status: "active",
    },
    {
      agent_name: "Agent002",
      login: "Login",
      t_w_b: 6000,
      "w-d-b": 2300,
      win: 1500,
      los: 1000,
      balance: 3200,
      status: "inactive",
    },
    {
      agent_name: "Agent003",
      login: "Login",
      t_w_b: 4500,
      "w-d-b": 2300,
      win: 1000,
      los: 700,
      balance: 2100,
      status: "active",
    },
    {
      agent_name: "Agent004",
      login: "Login",
      t_w_b: 7000,
      "w-d-b": 2300,
      win: 1700,
      los: 1300,
      balance: 4000,
      status: "active",
    },
    {
      agent_name: "Agent005",
      login: "Login",
      t_w_b: 5500,
      "w-d-b": 2300,
      win: 1400,
      los: 1100,
      balance: 2800,
      status: "inactive",
    },
    {
      agent_name: "Agent006",
      login: "Login",
      t_w_b: 4800,
      "w-d-b": 2300,
      win: 1100,
      los: 800,
      balance: 2400,
      status: "active",
    },
    {
      agent_name: "Agent007",
      login: "Login",
      t_w_b: 5200,
      "w-d-b": 2300,
      win: 1300,
      los: 900,
      balance: 2600,
      status: "active",
    },
    {
      agent_name: "Agent008",
      login: "Login",
      t_w_b: 4900,
      "w-d-b": 2300,
      win: 1200,
      los: 850,
      balance: 2500,
      status: "inactive",
    },
    {
      agent_name: "Agent009",
      login: "Login",
      t_w_b: 6200,
      "w-d-b": 2300,
      win: 1600,
      los: 1100,
      balance: 3500,
      status: "ACTIVE",
    },
    {
      agent_name: "Agent010",
      login: "Login",
      t_w_b: 5300,
      "w-d-b": 2300,
      win: 14,
      los: 95,
      balance: 2800,
      status: "inactive",
    },
  ];

  const columns = [
    { headerName: "Agent name", field: "agent_name" },
    {
      headerName: "Login",
      customRender: (row) => (
        <span className="px-4 py-1 rounded text-white bg-green-500">
          {row.login}
        </span>
      ),
    },

    { headerName: "T-W-B", field: "t_w_b" },
    { headerName: "W-D-B", field: "w-d-b" },
    { headerName: "Win", field: "win" },
    { headerName: "Loss", field: "los" },
    { headerName: "Balance", field: "balance" },
    // { headerName: "status", field: "status" },
    {
      headerName: "Status",
      customRender: (row) => (
        <span
          className={`px-2 py-1 rounded text-white ${
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
    <div>
      <h1 className="text-center text-xl lg:text-2xl  bg-[#59be7b] text-white p-2 lg:font-semibold rounded-md">
        All Users
      </h1>
      <div className="flex justify-between p-2">
        <input
          className="border-2 border-zinc-500 rounded-md w-4/6"
          placeholder="search here"
          type="text"
        />
        <button className="text-2xl font-bold bg-yellow-400 px-2 rounded-md">
          +Add
        </button>
      </div>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default AllUsers;
