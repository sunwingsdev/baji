import DashboardMobilMenu from "@/components/dashboard/dashboardSidebar/DashboardMobilMenu";
import DashboardSidebar from "@/components/dashboard/dashboardSidebar/DashboardSidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SlGameController } from "react-icons/sl";
import { GiGamepadCross, GiRibbonMedal } from "react-icons/gi";
import { BsFront } from "react-icons/bs";
import { FaAffiliatetheme } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiCashRegister } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { BsPiggyBank, BsShop, BsBank } from "react-icons/bs";
import {
  IoLogoWechat,
  IoSettingsSharp,
  IoGameController,
} from "react-icons/io5";

const menuItems = [
  { name: "Dashboard", icon: <IoMdHome />, path: "/dashboard" },
  {
    name: "Users",
    icon: <FaUsers />,
    path: "/dashboard/users",
  },
  {
    name: "Cash Agent",
    icon: <PiCashRegister />,
    path: "/dashboard/agent",
  },
  {
    name: "Affiliators",
    icon: <FaAffiliatetheme />,
    path: "/dashboard/affilitors",
  },
  {
    name: "Games Control",
    icon: <IoGameController />,
    submenu: [
      { name: "Categories", path: "/dashboard/gameCategories" },
      { name: "Active Games" },
      { name: "Inactive Games" },
    ],
  },
  {
    name: "Games Api key",
    icon: <GiGamepadCross />,
    submenu: [
      { name: "Sprots Live TV", path: "/dashboard/gamesApi/sports-live-tv" },
      { name: "BetFair API", path: "/dashboard/gamesApi/betfair-api" },
      {
        name: "Sports Radar API",
        path: "/dashboard/gamesApi/sports-radar-api",
      },
      { name: "Odds Jam API", path: "/dashboard/gamesApi/odds-jam-api" },
      {
        name: "Bet Construct API",
        path: "/dashboard/gamesApi/bet-construct-api",
      },
      { name: "Kambi API", path: "/dashboard/gamesApi/kambi-api" },
      { name: "Pinnacle API", path: "/dashboard/gamesApi/pinnacle-api" },
      { name: "SoftSwiss API", path: "/dashboard/gamesApi/softswiss-api" },
      { name: "Betradar API", path: "/dashboard/gamesApi/betradar-api" },
      { name: "Evolution API", path: "/dashboard/gamesApi/evolution-api" },
      {
        name: "Pragmatic Play API",
        path: "/dashboard/gamesApi/pragmatic-play-api",
      },
      { name: "Playtech API", path: "/dashboard/gamesApi/playtech-api" },
      { name: "NetEnt API", path: "/dashboard/gamesApi/netent-api" },
      {
        name: "Betsoft Gaming API",
        path: "/dashboard/gamesApi/betsoft-gaming-api",
      },
    ],
  },
  {
    name: "Bonuses",
    icon: <GiRibbonMedal />,
    submenu: [
      { name: "Happy Hours" },
      { name: "Deposit Bonuses" },
      { name: "Refer Bonuses" },
      { name: "Welcome Bonuses" },
    ],
  },
  {
    name: "Game History",
    icon: <SlGameController />,
    submenu: [
      { name: "Play Stats" },
      { name: "Win Game Stats" },
      { name: "Loss Game Stats" },
    ],
  },
  { name: "Tournament", icon: <BsShop /> },
  { name: "Jack Pot", icon: <BsShop /> },
  {
    name: "Frontend",
    icon: <BsFront />,
    submenu: [
      { name: "Home Control", path: "/dashboard/home-controls" },
      { name: "Promotions" },
      { name: "Pages" },
      { name: "About Us" },
      { name: "FAQ" },
      { name: "Sponsorship" },
      { name: "Brand Ambassador" },
    ],
  },
  {
    name: "Banking Deposit",
    icon: <BsPiggyBank />,
    submenu: [
      { name: "Deposit Method" },
      { name: "Deposit History", path: "/dashboard/deposits" },
    ],
  },
  {
    name: "Banking Withdraw",
    icon: <BsBank />,
    submenu: [
      { name: "Withdraw Method" },
      { name: "Withdraw History", path: "/dashboard/withdraws" },
    ],
  },
  {
    name: "Settings",
    icon: <IoSettingsSharp />,
    submenu: [
      { name: "Pincodes" },
      { name: "Activity Log" },
      { name: "Permissions" },
      { name: "Gateway API Keys" },
      { name: "SMS" },
      { name: "Mailings" },
      { name: "Support" },
      { name: "Security" },
    ],
  },
  {
    name: "Oracle Technology",
    icon: <IoLogoWechat />,
    submenu: [
      { name: "Instant Support" },
      { name: "Normal Support" },
      { name: "Permissions" },
      { name: "Notice" },
      { name: "About Us" },
      { name: "Contact Us" },
    ],
  },
];

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      {/* DashboardSidebar */}
      <DashboardSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
      <div
        className={`flex-1 h-screen overflow-y-auto flex flex-col duration-300 ${
          !open ? "md:pl-20" : "md:pl-72"
        }`}
      >
        <DashboardMobilMenu open={open} menuItems={menuItems} />
        <div className="mt-[62px] md:mt-20 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
