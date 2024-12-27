import { useState } from "react";
import { SlGameController } from "react-icons/sl";
import { GiGamepadCross, GiRibbonMedal } from "react-icons/gi";
import { BsFront } from "react-icons/bs";
import { FaAffiliatetheme, FaAngleDown, FaRegCircle } from "react-icons/fa";
import { IoIosArrowBack, IoMdHome } from "react-icons/io";
import { PiCashRegister } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { BsPiggyBank, BsShop, BsBank } from "react-icons/bs";
import {
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
        { label: "Active Games" },
        { label: "Inactive Games" },
      ],
    },
    {
      label: "Games Api key",
      icon: <GiGamepadCross />,
      submenu: [
        { label: "Sprots Live TV", to: "/dashboard/gamesApi/sports-live-tv" },
        { label: "BetFair API", to: "/dashboard/gamesApi/betfair-api" },
        { label: "Sports Radar API", to: "/dashboard/gamesApi/sports-radar-api" },
        { label: "Odds Jam API", to: "/dashboard/gamesApi/odds-jam-api" },
        { label: "Bet Construct API", to: "/dashboard/gamesApi/bet-construct-api" },
        { label: "Kambi API", to: "/dashboard/gamesApi/kambi-api" },
        { label: "Pinnacle API", to: "/dashboard/gamesApi/pinnacle-api" },
        { label: "SoftSwiss API", to: "/dashboard/gamesApi/softswiss-api" },
        { label: "Betradar API", to: "/dashboard/gamesApi/betradar-api" },
        { label: "Evolution API", to: "/dashboard/gamesApi/evolution-api" },
        { label: "Pragmatic Play API", to: "/dashboard/gamesApi/pragmatic-play-api" },
        { label: "Playtech API", to: "/dashboard/gamesApi/playtech-api" },
        { label: "NetEnt API", to: "/dashboard/gamesApi/netent-api" },
        { label: "Betsoft Gaming API", to: "/dashboard/gamesApi/betsoft-gaming-api" },
      ],
    },
    {
      label: "Bonuses",
      icon: <GiRibbonMedal />,
      submenu: [
        { label: "Happy Hours" },
        { label: "Deposit Bonuses" },
        { label: "Reffer Bonuses" },
        { label: "WellCome Bonuses Bonuses" },
      ],
    },
    {
      label: "game History",
      icon: <SlGameController />,
      submenu: [
        { label: "Play Stats" },
        { label: "Win Game Stats" },
        { label: "Loss Game Stats" },
      ],
    },
    { label: "Tournament", icon: <BsShop /> },
    { label: "Jack Pot", icon: <BsShop /> },
    {
      label: "Fontend",
      icon: <BsFront />,
      submenu: [
        { label: "Home control", to: "/dashboard/home-controls" },
        { label: "Promotions" },
        { label: "Pages" },
        { label: "Notice", to: "/dashboard/notice" },
        { label: "About Us" },
        { label: "FQA" },
        { label: "Sponsorship", to: "/dashboard/sponsorship" },
        { label: "Brand Abmassador" },
      ],
    },
    {
      label: "Banking Deposit",
      icon: <BsPiggyBank />,
      submenu: [
        { label: "Deposit Methord" },
        { label: "Deposit History", to: "/dashboard/deposits" },
      ],
    },
    {
      label: "Banking Withdrow",
      icon: <BsBank />,
      submenu: [
        { label: "Withdrow Methord" },
        { label: "withdrow History", to: "/dashboard/withdraws" },
      ],
    },
    {
      label: "Settings",
      icon: <IoSettingsSharp />,
      submenu: [
        { label: "Pincodes" },
        { label: "Activety Log" },
        { label: "Permissions" },
        { label: "Getway Api keys" },
        { label: "SMS" },
        { label: "Mailings" },
        { label: "Support" },
        { label: "Security" },
      ],
    },
    {
      label: "Oracle Technology",
      icon: <IoLogoWechat />,
      submenu: [
        { label: "Instant Support" },
        { label: "Normal Support" },
        { label: "Permissions" },
        { label: "Notice" },
        { label: "About Us" },
        { label: "Contact Us" },
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
            <Link
              onClick={!item.to && !item.submenu && handleModalOpen}
              to={item.to || "#"}
            >
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
                    onClick={!subItem.to && !subItem.submenu && handleModalOpen}
                    key={subIndex}
                    to={subItem.to || "#"}
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
      <Modal
        title={"Oops!!!"}
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </Modal>
    </div>
  );
};

export default DashboardSidebar;
