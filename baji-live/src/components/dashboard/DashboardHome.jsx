import StatsCard from "./StatsCard";
import { FaUser, FaUsers, FaLock, FaGamepad } from "react-icons/fa";
import { BsDiagram3Fill } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa6";
import CustomTable from "./CustomTable";

const DashboardHome = () => {
  const stats = [
    {
      title: "Total Users",
      count: 6,
      Icon: FaUser,
      bgColor: "bg-[#3c8dbc]",
    },
    {
      title: "New Users This Month",
      count: 0,
      Icon: FaUsers,
      bgColor: "bg-[#00a65a]",
    },
    { title: "Banned Users", count: 0, Icon: FaLock, bgColor: "bg-[#f39c12]" },
    { title: "Games", count: 0, Icon: FaGamepad, bgColor: "bg-[#dd4b39]" },
    {
      title: "Credit Agents",
      count: 0,
      Icon: BsDiagram3Fill,
      bgColor: "bg-[#3c8dbc]",
    },
    {
      title: "Credit Operators",
      count: 0,
      Icon: FaChartArea,
      bgColor: "bg-[#00a65a]",
    },
    {
      title: "Credit Shops",
      count: 0,
      Icon: FaChartArea,
      bgColor: "bg-[#f39c12]",
    },
    {
      title: "Total Money 0.00%",
      count: 0,
      Icon: FaChartArea,
      bgColor: "bg-[#dd4b39]",
    },
  ];

  const userPaymentsHeaders = ["Cashier", "Money In", "Money Out", "Date"];
  const userPaymentsData = [
    {
      cashier: "TestCash",
      moneyIn: "10.000",
      moneyOut: "0.000",
      date: "07:39:59",
    },
  ];

  const userGamesHeaders = ["Game", "User", "Balance", "Bet", "Win", "Date"];
  const userGamesData = [
    {
      game: "AlchemistsSecretGT",
      user: "435893412",
      balance: "6.5000",
      bet: "0.4000",
      win: "0.0000",
      date: "23:32:03",
    },
    {
      game: "AlchemistsSecretGT",
      user: "435893412",
      balance: "6.9000",
      bet: "0.4000",
      win: "0.0000",
      date: "23:31:20",
    },
    // Add more rows as needed
  ];

  const latestShopsHeaders = [
    "Name",
    "Credit",
    "Percent",
    "Frontend",
    "Currency",
    "Status",
  ];
  const latestShopsData = [
    {
      Name: "TestShop",
      Credit: "9990.0000",
      Percent: "90 - 92",
      Frontend: "Default",
      Currency: "USD",
      Status: "Active",
    },

    // Add more rows as needed
  ];

  const latestShiftStatsHeader = [
    "Shift",
    "User",
    "Start",
    "End",
    "Credit",
    "In",
    "-",
    "Total",
    "Money",
    "In",
    "-",
    "Total",
    "Transfers",
    "Pay Out",
  ];
  const latestShiftStatsData = [
    {
      Shift: "10",
      User: "TestCash",
      Start: "2024-10-15 07:39:59",
      End: "0",
      Credit: "0",
      In: "0",
      "-": "10",
      Total: "9999",
      Money: "6.5000",
      In2: "10000",
      _: "0.000",
      Total2: "10000",
      Transfers: "1",
      Pay_Out: "000",
    },

    // Add more rows as needed
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Top Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <CustomTable
        title="User Payments"
        headers={userPaymentsHeaders}
        data={userPaymentsData}
        borderColor="#30b779"
      />
      <CustomTable
        title="User Games"
        headers={userGamesHeaders}
        data={userGamesData}
        borderColor="#f39c12"
      />
      <CustomTable
        title="Latest Shops"
        headers={latestShopsHeaders}
        data={latestShopsData}
        borderColor="#30b779"
      />
      <CustomTable
        title="Latest Shift Stats"
        headers={latestShiftStatsHeader}
        data={latestShiftStatsData}
        borderColor="#f39c12"
      />
    </div>
  );
};

export default DashboardHome;
