import { useState } from "react";
import { SlGameController } from "react-icons/sl";
import { GiGamepadCross, GiRibbonMedal } from "react-icons/gi";
import { BsFront } from "react-icons/bs";
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
import { PiFlagBannerFoldDuotone, PiCashRegister } from "react-icons/pi";
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
import {
  BsChatText,
  BsPiggyBank,
  BsQrCode,
  BsShop,
  BsBank,
} from "react-icons/bs";
import {
  IoDiamondOutline,
  IoLogoWechat,
  IoSettingsSharp,
  IoGameController,
} from "react-icons/io5";
import Modal from "@/components/shared/Modal";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const DashboardSidebar = ({ open, setOpen }) => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    GamesControl: false,
    GamesApikey: false,
    OracleTechnology: false, // Track submenu state for Games Control
    Bonuses: false, // Track submenu state for Games Control
    gameHistory: false, // Track submenu state for Games Control
    Fontend: false, // Track submenu state for Games Control
    BankingDeposit: false, // Track submenu state for Games Control
    BankingWithdrow: false, // Track submenu state for Games Control
    Settings: false, // Track submenu state for Games Control
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

  // Handle toggle sidebar visibility
  const handleToggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  // Open modal
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Menu items with dynamic submenu
  const menuItems = [
    { label: "Dashboard", icon: <IoMdHome />, to: "/dashboard" },
    { label: "Users", icon: <FaUsers />, to: "/dashboard/users" },
    { label: "Cash Agent", icon: <PiCashRegister />, to: "/dashboard/agent" },
    {
      label: "Affiliators",
      icon: <FaAffiliatetheme />,
      to: "/dashboard/affilitors",
    },
    {
      label: "Games Control",
      icon: <IoGameController />,
      submenu: [
        { label: "Categories", to: "/dashboard/gameCategories" },
        { label: "Active Games", to: "/dashboard" },
        { label: "Inactive Games", to: "/dashboard" },
      ],
    },
    {
      label: "Games Api key",
      icon: <GiGamepadCross />,
      submenu: [
        { label: "Sprots Live TV", to: "/dashboard/gamesApi" },
        { label: "BetFair API", to: "/dashboard/gamesApi" },
        { label: "Sports Radar API", to: "/dashboard/gamesApi" },
        { label: "Odds Jam API", to: "/dashboard/gamesApi" },
        { label: "Bet Construct API", to: "/dashboard/gamesApi" },
        { label: "Kambi API", to: "/dashboard/gamesApi" },
        { label: "Pinnacle API", to: "/dashboard/gamesApi" },
        { label: "SoftSwiss API", to: "/dashboard/gamesApi" },
        { label: "Betradar API", to: "/dashboard/gamesApi" },
        { label: "Evolution API", to: "/dashboard/gamesApi" },
        { label: "Pragmatic Play API", to: "/dashboard/gamesApi" },
        { label: "Playtech API", to: "/dashboard/gamesApi" },
        { label: "NetEnt API", to: "/dashboard/gamesApi" },
        { label: "Betsoft Gaming API", to: "/dashboard/gamesApi" },
      ],
    },
    {
      label: "Bonuses",
      icon: <GiRibbonMedal />,
      submenu: [
        { label: "Happy Hours", to: "/dashboard" },
        { label: "Deposit Bonuses", to: "/dashboard" },
        { label: "Reffer Bonuses", to: "/dashboard" },
        { label: "WellCome Bonuses Bonuses", to: "/dashboard" },
      ],
    },
    {
      label: "game History",
      icon: <SlGameController />,
      submenu: [
        { label: "Play Stats", to: "/dashboard" },
        { label: "Win Game Stats", to: "/dashboard" },
        { label: "Loss Game Stats", to: "/dashboard" },
      ],
    },
    { label: "Tournament", icon: <BsShop />, to: "/dashboard" },
    { label: "Jack Pot", icon: <BsShop />, to: "/dashboard" },
    {
      label: "Fontend",
      icon: <BsFront />,
      submenu: [
        { label: "Home control", to: "/dashboard/home-controls" },
        { label: "Promotions", to: "/dashboard" },
        { label: "Pages", to: "/dashboard" },
        { label: "Notice", to: "/dashboard" },
        { label: "About Us", to: "/dashboard" },
        { label: "FQA", to: "/dashboard" },
        { label: "Sponsorship", to: "/dashboard" },
        { label: "Brand Abmassador", to: "/dashboard" },
      ],
    },
    {
      label: "Banking Deposit",
      icon: <BsPiggyBank />,
      submenu: [
        { label: "Deposit Methord", to: "/dashboard" },
        { label: "Deposit History", to: "/dashboard/deposits" },
      ],
    },
    {
      label: "Banking Withdrow",
      icon: <BsBank />,
      submenu: [
        { label: "Withdrow Methord", to: "/dashboard" },
        { label: "withdrow History", to: "/dashboard/withdraws" },
      ],
    },
    {
      label: "Settings",
      icon: <IoSettingsSharp />,
      submenu: [
        { label: "Pincodes", to: "/dashboard" },
        { label: "Activety Log", to: "/dashboard" },
        { label: "Permissions", to: "/dashboard" },
        { label: "Getway Api keys", to: "/dashboard" },
        { label: "SMS", to: "/dashboard" },
        { label: "Mailings", to: "/dashboard" },
        { label: "Support", to: "/dashboard" },
        { label: "Security", to: "/dashboard" },
      ],
    },
    {
      label: "Oracle Technology",
      icon: <IoLogoWechat />,
      submenu: [
        { label: "Instant Support", to: "/dashboard" },
        { label: "Normal Support", to: "/dashboard" },
        { label: "Permissions", to: "/dashboard" },
        { label: "Notice", to: "/dashboard" },
        { label: "About Us", to: "/dashboard" },
        { label: "Contact Us", to: "/dashboard" },
      ],
    },
  ];

  return (
    <div>
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
                    alt="Logo"
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
                onClick={handleToggleSidebar}
              />
            </div>
          </div>
        </div>
        {/* End Top collapse */}
      </div>

      {/* Start Menu bar */}
      <div
        className={`bg-[#14815f] overflow-y-auto fixed mt-[62px] hidden md:block pb-16 ${
          open ? "w-64" : "w-16"
        } text-sm text-white duration-300 font-semibold h-full scrollbar-hide`}
      >
        {/* Dynamic Menu Rendering */}
        {menuItems.map((item, index) => (
          <div key={index}>
            <Link to={item.to || "#"}>
              <div
                className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
                  !open && "justify-center"
                }`}
                onClick={() => item.submenu && toggleSubmenu(item.label)}
              >
                {/* Only show icon for menu items with submenus */}
                {item.icon}
                <p className={`${!open && "hidden"}`}>{item.label}</p>
                {/* Show arrow for submenu toggle */}
                {item.submenu && open && (
                  <FaAngleDown className={`text-white ${!open && "hidden"}`} />
                )}
              </div>
            </Link>

            {/* Only show submenu when "Games Control" is clicked */}
            {item.submenu && submenuOpen[item.label] && open && (
              <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.to}
                    className="py-2.5 flex gap-2"
                  >
                    <FaRegCircle size={22} className="text-yellow-300" />
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>Dynamic Modal Content</h2>
        <p>
          Here you can show dynamic content based on the selected menu item.
        </p>
      </Modal>
    </div>
  );
};

export default DashboardSidebar;
