import { useState } from "react";
import {
  FaAffiliatetheme,
  FaAngleDown,
  FaChartLine,
  FaGamepad,
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
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const DashboardSidebar = ({ open, setOpen }) => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    Deposit: false,
    withdraw: false,
    HomePage: false,
    Bonuses: false,
    GamesControl: false,
    GamesApiKey: false,
    GamesHistory: false,
    OracleTechnology: false,
    Stats: false,
    Activity_Log: false,
    Pages: false,
    Settings: false,
  });

  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );

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
                {logoHomeControl?.image ? (
                  <img
                    className="w-40"
                    src={`${import.meta.env.VITE_BASE_API_URL}${
                      logoHomeControl?.image
                    }`}
                    alt=""
                  />
                ) : (
                  <div className="h-10"></div>
                )}
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
        className={`bg-[#14815f] overflow-y-auto fixed mt-[62px] hidden md:block pb-16 ${
          open ? "w-64" : "w-16"
        } text-sm text-white duration-300 font-semibold h-full scrollbar-hide`}
      >
        <Link to={"/dashboard"}>
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <IoMdHome size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Dashboard</p>
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
        <Link to="/dashboard/agent">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaTree size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Cash Agent</p>
          </div>
        </Link>
        <Link to="/dashboard/affilitors">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <BsShop size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Affiliator</p>
          </div>
        </Link>
        {/* geme categories */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("GamesControl")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <IoDiamondOutline size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Games Control</p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.GamesControl && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/games" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Catagories
              </Link>
              <Link to="/dashboard/activeGame" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Active Games
              </Link>
              <Link to="/dashboard/deactiveGame" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Dactive Games
              </Link>
            </div>
          )}
        </div>
        {/* game api key */}
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("GamesApiKey")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <IoDiamondOutline size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Games Api Key</p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.GamesApiKey && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/gamesApi" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Sports Live TV
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Betfair API
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                SportsRadar API
              </Link>
            </div>
          )}
        </div>
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
            <FaAngleDown
              className={`text-white duration-300 ${!open && "hidden"} ${
                submenuOpen.Bonuses ? "" : "-rotate-90"
              }`}
            />
          </div>
          {submenuOpen.Bonuses && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Happy Hour
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Deposit Bonuses
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Progress Bonuses
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Reffer Bonuses
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Welcome Bonuses
              </Link>
            </div>
          )}
        </div>
        {/* game history */}

        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("GamesHistory")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <IoDiamondOutline size={22} className="text-yellow-300" />
              <p className={`${!open && "hidden"}`}> Games History</p>
            </div>
            <FaAngleDown
              className={`text-white duration-300 ${!open && "hidden"} ${
                !submenuOpen.Stats && "-rotate-90"
              }`}
            />
          </div>
          {submenuOpen.GamesHistory && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Pay Stats
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Win Game Stats
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Loss Game Stats
              </Link>
            </div>
          )}
        </div>
        <Link onClick={handleModalOpen} to="/dashboard">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaTrophy size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Tournaments</p>
          </div>
        </Link>
        <Link onClick={handleModalOpen} to="/dashboard">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <FaTrophy size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Jackpot</p>
          </div>
        </Link>

        {/* Stats Menu */}

        {/* Pages Menu */}
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
            <FaAngleDown
              className={`text-white duration-300 ${!open && "hidden"} ${
                !submenuOpen.Deposit && "-rotate-90"
              }`}
            />
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
            <FaAngleDown
              className={`text-white duration-300 ${!open && "hidden"} ${
                !submenuOpen.withdraw && "-rotate-90"
              }`}
            />
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
              <p className={`${!open && "hidden"}`}> fontend </p>
            </div>
            <FaAngleDown
              className={`text-white duration-300 ${!open && "hidden"} ${
                !submenuOpen.HomePage && "-rotate-90"
              }`}
            />
          </div>
          {submenuOpen.HomePage && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/home-controls" className="py-2.5 flex gap-2">
                <PiFlagBannerFoldDuotone
                  size={20}
                  className="text-yellow-300"
                />
                Home Controls
              </Link>
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

        <Link onClick={handleModalOpen} to="/dashboard">
          <div
            className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
              !open && "justify-center"
            }`}
          >
            <BsPiggyBank size={22} className="text-yellow-300" />
            <p className={`${!open && "hidden"}`}>Banks</p>
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
            <FaAngleDown
              className={`text-white duration-300 ${!open && "hidden"} ${
                !submenuOpen.Settings && "-rotate-90"
              }`}
            />
          </div>
          {submenuOpen.Settings && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Pincodes
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Activity Log
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Permissions
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Getway API Keys
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                SMS
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Mailings
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Support
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Security
              </Link>
            </div>
          )}
        </div>
        <div
          className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
          onClick={() => toggleSubmenu("OracleTechnology")}
        >
          <div
            className={`px-4 py-3 flex items-center gap-2 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-2">
              <IoSettingsSharp size={22} className="text-red-500" />
              <p className={`${!open && "hidden"}`}> Oracle Technology </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.OracleTechnology && open && (
            <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                instant Support
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Normal Support
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Notice
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                About Us
              </Link>
              <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
                <FaRegCircle size={22} className="text-yellow-300" />
                Contact US
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
