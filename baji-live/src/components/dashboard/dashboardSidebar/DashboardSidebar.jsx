import { useState } from "react";
import {
  FaAffiliatetheme,
  FaAngleDown,
  FaChartBar,
  FaChartLine,
  FaGamepad,
  FaHeartbeat,
  FaKey,
  FaRegBellSlash,
  FaRegCircle,
  FaTree,
  FaTrophy,
} from "react-icons/fa";
import { IoIosArrowBack, IoMdHome, IoMdMenu } from "react-icons/io";
import { PiFlagBannerFoldDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { TbAffiliate } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { PiHandWithdrawDuotone, PiHandDepositDuotone } from "react-icons/pi";
import {
  MdConnectWithoutContact,
  MdHistory,
  MdOutlineRemoveFromQueue,
  MdOutlineSecurity,
  MdSupport,
} from "react-icons/md";
import { VscSymbolMethod } from "react-icons/vsc";
import { CiSliderHorizontal } from "react-icons/ci";
import { BsChatText, BsPiggyBank, BsQrCode, BsShop } from "react-icons/bs";
import {
  IoDiamondOutline,
  IoLogoWechat,
  IoSettingsSharp,
} from "react-icons/io5";
import Modal from "@/components/shared/Modal";

const DashboardSidebar = ({ open, setOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    Deposit: false,
    withdraw: false,
    HomePage: false,
    Bonuses: false,
    Stats: false,
    Activity_Log: false,
    Pages: false,
    Settings: false,
  });

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
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
      </div>
      {/* End Top collapse */}
      {/* Start Menu bar */}
      <div
        className={`bg-[#14815f] overflow-y-auto fixed mt-[62px] pb-16 ${
          open ? "w-64" : "w-16"
        } text-sm text-white duration-300 font-semibold h-full scrollbar-hide`}
      >
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
            className={`px-4 py-3 flex items-center gap-2 border-b w-full border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaUsers size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Users</p>
          </div>
        </Link>
        <Link to="/dashboard/agent-tree">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaTree size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Agent Tree</p>
          </div>
        </Link>
        <Link to="/dashboard/shops">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <BsShop size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Shops</p>
          </div>
        </Link>
        <Link to="/dashboard/tournaments">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaTrophy size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Tournaments</p>
          </div>
        </Link>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <IoMdMenu size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Categories</p>
          </div>
        </Link>
        {/* Bonuses Menu */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("Bonuses")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <IoDiamondOutline size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Bonuses </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.Bonuses && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Happy Hour
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Progress Bonuses
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Invite Friends
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Welcome Bonuses
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                SMS Bonuses
              </Link>
            </div>
          )}
        </div>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaHeartbeat size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Jackpot</p>
          </div>
        </Link>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <BsQrCode size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Pincodes</p>
          </div>
        </Link>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaGamepad size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Games</p>
          </div>
        </Link>
        {/* Stats Menu */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("Stats")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <FaChartLine size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Stats </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.Stats && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Pay Stats
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Game Stats
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Shift Stats
              </Link>
            </div>
          )}
        </div>
        {/* Activity Log Menu */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("Activity_Log")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <FaChartBar size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Activity Log </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.Activity_Log && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                All
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                System Data
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                User Data
              </Link>
            </div>
          )}
        </div>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaRegBellSlash size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Permissions</p>
          </div>
        </Link>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaKey size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Api Keys</p>
          </div>
        </Link>
        {/* Pages Menu */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("Pages")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <IoLogoWechat size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Pages </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.Pages && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Helper
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Articles
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Rules
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                FAQ
              </Link>
            </div>
          )}
        </div>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <BsChatText size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>SMS Mailing</p>
          </div>
        </Link>
        <Link>
          <div
            onClick={handleModalOpen}
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <TbAffiliate size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Affiliate</p>
          </div>
          {/* </Link> */}
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

                <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
                  <VscSymbolMethod size={22} className="text-yellow-300" />
                  Deposit Method
                </div>
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
                <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
                  <VscSymbolMethod size={22} className="text-yellow-300" />
                  Withdraw Method
                </div>
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
                <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
                  <PiFlagBannerFoldDuotone
                    size={20}
                    className="text-yellow-300"
                  />
                  Banner
                </div>
                <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
                  <CiSliderHorizontal size={20} className="text-yellow-300" />
                  Slider
                </div>
                <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
                  <MdOutlineRemoveFromQueue
                    size={20}
                    className="text-yellow-300"
                  />
                  From
                </div>
                <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
                  <MdConnectWithoutContact
                    size={20}
                    className="text-yellow-300"
                  />
                  Contact
                </div>
              </div>
            )}
          </div>
        </Link>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <MdSupport size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Support</p>
          </div>
        </Link>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <BsPiggyBank size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Banks</p>
          </div>
        </Link>
        <Link to="/dashboard/categories">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <MdOutlineSecurity size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Security</p>
          </div>
        </Link>
        {/* Settings Menu */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("Settings")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <IoSettingsSharp size={22} className="text-red-500" />
              <p className={`${!open && "hidden"}`}> Settings </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.Settings && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                General
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Securities
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                SMS
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Payment
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Banks
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Categories
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Games
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Auth
              </Link>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
        title="Oops!!!"
        // onSave={handleSaveChanges}
      >
        <p className="text-center text-red-600">
          Please contact the API Connect us Oracle Technology developers team...
        </p>
      </Modal>
    </div>
  );
};

export default DashboardSidebar;
