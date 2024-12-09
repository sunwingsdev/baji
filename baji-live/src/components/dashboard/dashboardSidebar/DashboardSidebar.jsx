import { useState } from "react";
import { FaAffiliatetheme, FaAngleDown } from "react-icons/fa";
import { IoIosArrowBack, IoMdHome } from "react-icons/io";
import { PiFlagBannerFoldDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { TbAffiliate } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { PiHandWithdrawDuotone, PiHandDepositDuotone } from "react-icons/pi";
import {
  MdConnectWithoutContact,
  MdHistory,
  MdOutlineRemoveFromQueue,
} from "react-icons/md";
import { VscSymbolMethod } from "react-icons/vsc";
import { CiSliderHorizontal } from "react-icons/ci";

const DashboardSidebar = ({ open, setOpen }) => {
  // State to track submenu visibility for each menu item
  const [submenuOpen, setSubmenuOpen] = useState({
    Deposit: false,
    withdraw: false,
    HomePage: false,
  });

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div
      className={`${
        open ? "w-64" : "w-16"
      } hidden md:block duration-300 h-screen fixed`}
    >
      {/* Start Top collapse */}
      <div className={`bg-zinc-800 py-3 ${!open && "py-5"}`}>
        <div className="flex gap-x-3 items-center justify-center">
          <div className={`flex gap-1 ${!open && "hidden"}`}>
            <Link
              to={"/"}
              className="flex items-center gap-1 px-2 py-0.5 rounded-lg"
            >
              <img
                className="w-40"
                src="http://localhost:5173/src/assets/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <IoIosArrowBack
              className={`m-auto text-center w-10 h-7 p-1 bg-yellow-400 hover:bg-yellow-500 rounded-full cursor-pointer ${
                !open && "rotate-180"
              } `}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
      {/* End Top collapse */}
      {/* Start Menu bar */}
      <div className="bg-[#14815f] overflow-y-auto pb-20 text-sm text-white font-semibold h-full scrollbar-hide">
        <Link to={"/"}>
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <IoMdHome size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Home</p>
          </div>
        </Link>
        <Link to="/dashboard/users">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaUsers size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Users</p>
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <TbAffiliate size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Affiliate</p>
          </div>
        </Link>
        {/* Deposit Menu */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("Deposit")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <PiHandDepositDuotone size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Deposit </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.Deposit && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/deposits" className="py-2.5 flex gap-2">
                <MdHistory size={22} className="text-yellow-300" />
                Deposit History
              </Link>
              <Link to="" className="py-2.5 flex gap-2">
                <VscSymbolMethod size={22} className="text-yellow-300" />
                Deposit Method
              </Link>
            </div>
          )}
        </div>
        {/* withdraw Menu */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("withdraw")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <PiHandWithdrawDuotone size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Withdraw </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.withdraw && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/withdraws" className="py-2.5 flex gap-2">
                <MdHistory size={22} className="text-yellow-300" />
                Withdraws History
              </Link>
              <Link to="" className="py-2.5 flex gap-2">
                <VscSymbolMethod size={22} className="text-yellow-300" />
                Withdraw Method
              </Link>
            </div>
          )}
        </div>
        {/* HomePage Menu */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("HomePage")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <FaAffiliatetheme size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Home Page </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.HomePage && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="" className="py-2.5 flex gap-2">
                <PiFlagBannerFoldDuotone
                  size={20}
                  className="text-yellow-300"
                />
                Banner
              </Link>
              <Link to="" className="py-2.5 flex gap-2">
                <CiSliderHorizontal size={20} className="text-yellow-300" />
                Slider
              </Link>
              <Link to="" className="py-2.5 flex gap-2">
                <MdOutlineRemoveFromQueue
                  size={20}
                  className="text-yellow-300"
                />
                From
              </Link>
              <Link to="" className="py-2.5 flex gap-2">
                <MdConnectWithoutContact
                  size={20}
                  className="text-yellow-300"
                />
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* End Menu bar */}
    </div>
  );
};

export default DashboardSidebar;
