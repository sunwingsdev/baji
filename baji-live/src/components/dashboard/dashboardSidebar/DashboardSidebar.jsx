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
        { label: "Categories", to: "/dashboard/games" },
        { label: "Active Games", to: "/dashboard/allusers" },
        { label: "Inactive Games", to: "/dashboard/userProfile" },
      ],
    },
    {
      label: "Games Api key",
      icon: <GiGamepadCross />,
      submenu: [
        { label: "Sprots Live TV", to: "/dashboard/gamesApi" },
        { label: "BetFair API", to: "/dashboard/agentprofile" },
        { label: "Sports Radar API", to: "/dashboard/userProfile" },
        { label: "Odds Jam API", to: "/dashboard/allusers" },
        { label: "Bet Construct API", to: "/dashboard/agent" },
        { label: "Kambi API", to: "/dashboard/gamesApi" },
        { label: "Pinnacle API", to: "/dashboard" },
        { label: "SoftSwiss API", to: "/dashboard" },
        { label: "Betradar API", to: "/dashboard" },
        { label: "Evolution API", to: "/dashboard" },
        { label: "Pragmatic Play API", to: "/dashboard" },
        { label: "Playtech API", to: "/dashboard" },
        { label: "NetEnt API", to: "/dashboard" },
        { label: "Betsoft Gaming API", to: "/dashboard" },
      ],
    },
    {
      label: "Bonuses",
      icon: <GiRibbonMedal />,
      submenu: [
        { label: "Happy Hours", to: "/dashboard/games" },
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
        { label: "Slaider", to: "/dashboard" },
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
        { label: "withdrow History", to: "/dashboard" },
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

// const DashboardSidebar = ({ open, setOpen }) => {
//   const { data: homeControls } = useGetHomeControlsQuery();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState({
//     Deposit: false,
//     withdraw: false,
//     HomePage: false,
//     Bonuses: false,
//     GamesControl: false,
//     GamesApiKey: false,
//     GamesHistory: false,
//     OracleTechnology: false,
//     Stats: false,
//     Activity_Log: false,
//     Pages: false,
//     Settings: false,
//     Bank: false,
//   });

//   const logoHomeControl = homeControls?.find(
//     (control) => control.category === "logo" && control.isSelected === true
//   );

//   // Toggle submenu visibility
//   const toggleSubmenu = (menu) => {
//     setSubmenuOpen((prevState) => ({
//       ...prevState,
//       [menu]: !prevState[menu],
//     }));
//   };

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="">
//       <div
//         className={`${
//           open ? "w-64" : "w-16"
//         } hidden md:block duration-300 h-screen fixed`}
//       >
//         {/* Start Top collapse */}
//         <div className={`bg-zinc-800 py-3 ${!open && "py-5"}`}>
//           <div className="flex gap-x-3 items-center justify-center">
//             <div className={`flex gap-1 ${!open && "hidden"}`}>
//               <Link
//                 to={"/"}
//                 className="flex items-center gap-1 px-2 py-0.5 rounded-lg"
//               >
//                 {logoHomeControl?.image ? (
//                   <img
//                     className="w-40"
//                     src={`${import.meta.env.VITE_BASE_API_URL}${
//                       logoHomeControl?.image
//                     }`}
//                     alt=""
//                   />
//                 ) : (
//                   <div className="h-10"></div>
//                 )}
//               </Link>
//             </div>
//             <div>
//               <IoIosArrowBack
//                 className={`m-auto text-center w-10 h-7 p-1 bg-yellow-400 hover:bg-yellow-500 rounded-full cursor-pointer ${
//                   !open && "rotate-180"
//                 } `}
//                 onClick={() => setOpen(!open)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Top collapse */}
//       {/* Start Menu bar */}
//       <div
//         className={`bg-[#14815f] overflow-y-auto fixed mt-[62px] hidden md:block pb-16 ${
//           open ? "w-64" : "w-16"
//         } text-sm text-white duration-300 font-semibold h-full scrollbar-hide`}
//       >
//         <Link to={"/dashboard"}>
//           <div
//             className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
//               !open && "justify-center"
//             }`}
//           >
//             <IoMdHome size={22} className="text-yellow-300" />
//             <p className={`${!open && "hidden"}`}>Dashboard</p>
//           </div>
//         </Link>
//         <Link to="/dashboard/users">
//           <div
//             className={`px-4 py-3 flex items-center gap-2 border-b w-full border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
//               !open && "justify-center"
//             }`}
//           >
//             <FaUsers size={22} className="text-yellow-300" />
//             <p className={`${!open && "hidden"}`}>Users</p>
//           </div>
//         </Link>
//         <Link to="/dashboard/agent">
//           <div
//             className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
//               !open && "justify-center"
//             }`}
//           >
//             <FaTree size={22} className="text-yellow-300" />
//             <p className={`${!open && "hidden"}`}>Cash Agent</p>
//           </div>
//         </Link>
//         <Link to="/dashboard/affilitors">
//           <div
//             className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
//               !open && "justify-center"
//             }`}
//           >
//             <BsShop size={22} className="text-yellow-300" />
//             <p className={`${!open && "hidden"}`}>Affiliator</p>
//           </div>
//         </Link>
//         {/* geme categories */}
//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("GamesControl")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <IoDiamondOutline size={22} className="text-yellow-300" />
//               <p className={`${!open && "hidden"}`}> Games Control</p>
//             </div>
//             <FaAngleDown className={`text-white ${!open && "hidden"}`} />
//           </div>
//           {submenuOpen.GamesControl && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/games" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Catagories
//               </Link>
//               <Link to="/dashboard/allusers" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Active Games
//               </Link>
//               <Link to="/dashboard/userProfile" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Dactive Games
//               </Link>
//             </div>
//           )}
//         </div>
//         {/* game api key */}
//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("GamesApiKey")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <IoDiamondOutline size={22} className="text-yellow-300" />
//               <p className={`${!open && "hidden"}`}> Games Api Key</p>
//             </div>
//             <FaAngleDown className={`text-white ${!open && "hidden"}`} />
//           </div>
//           {submenuOpen.GamesApiKey && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/gamesApi" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Sports Live TV
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Betfair API
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 SportsRadar API
//               </Link>
//             </div>
//           )}
//         </div>
//         {/* Bonuses Menu */}
//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("Bonuses")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <IoDiamondOutline size={22} className="text-yellow-300" />
//               <p className={`${!open && "hidden"}`}> Bonuses </p>
//             </div>
//             <FaAngleDown
//               className={`text-white duration-300 ${!open && "hidden"} ${
//                 submenuOpen.Bonuses ? "" : "-rotate-90"
//               }`}
//             />
//           </div>
//           {submenuOpen.Bonuses && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Happy Hour
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Deposit Bonuses
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Progress Bonuses
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Reffer Bonuses
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Welcome Bonuses
//               </Link>
//             </div>
//           )}
//         </div>
//         {/* game history */}

//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("GamesHistory")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <IoDiamondOutline size={22} className="text-yellow-300" />
//               <p className={`${!open && "hidden"}`}> Games History</p>
//             </div>
//             <FaAngleDown
//               className={`text-white duration-300 ${!open && "hidden"} ${
//                 !submenuOpen.Stats && "-rotate-90"
//               }`}
//             />
//           </div>
//           {submenuOpen.GamesHistory && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Pay Stats
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Win Game Stats
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Loss Game Stats
//               </Link>
//             </div>
//           )}
//         </div>
//         <Link onClick={handleModalOpen} to="/dashboard">
//           <div
//             className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
//               !open && "justify-center"
//             }`}
//           >
//             <FaTrophy size={22} className="text-yellow-300" />
//             <p className={`${!open && "hidden"}`}>Tournaments</p>
//           </div>
//         </Link>
//         <Link onClick={handleModalOpen} to="/dashboard">
//           <div
//             className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
//               !open && "justify-center"
//             }`}
//           >
//             <FaTrophy size={22} className="text-yellow-300" />
//             <p className={`${!open && "hidden"}`}>Jackpot</p>
//           </div>
//         </Link>

//         {/* Stats Menu */}

//         {/* Pages Menu */}
//         {/* </Link> */}
//         {/* Deposit Menu */}
//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("Deposit")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <PiHandDepositDuotone size={22} className="text-yellow-300" />
//               <p className={`${!open && "hidden"}`}> Deposit </p>
//             </div>
//             <FaAngleDown
//               className={`text-white duration-300 ${!open && "hidden"} ${
//                 !submenuOpen.Deposit && "-rotate-90"
//               }`}
//             />
//           </div>
//           {submenuOpen.Deposit && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/deposits" className="py-2.5 flex gap-2">
//                 <MdHistory size={22} className="text-yellow-300" />
//                 Deposit History
//               </Link>

//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <VscSymbolMethod size={22} className="text-yellow-300" />
//                 Deposit Method
//               </div>
//             </div>
//           )}
//         </div>
//         {/* withdraw Menu */}
//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("withdraw")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <PiHandWithdrawDuotone size={22} className="text-yellow-300" />
//               <p className={`${!open && "hidden"}`}> Withdraw </p>
//             </div>
//             <FaAngleDown
//               className={`text-white duration-300 ${!open && "hidden"} ${
//                 !submenuOpen.withdraw && "-rotate-90"
//               }`}
//             />
//           </div>
//           {submenuOpen.withdraw && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/withdraws" className="py-2.5 flex gap-2">
//                 <MdHistory size={22} className="text-yellow-300" />
//                 Withdraws History
//               </Link>
//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <VscSymbolMethod size={22} className="text-yellow-300" />
//                 Withdraw Method
//               </div>
//             </div>
//           )}
//         </div>
//         {/* HomePage Menu */}
//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("HomePage")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <FaAffiliatetheme size={22} className="text-yellow-300" />
//               <p className={`${!open && "hidden"}`}> fontend </p>
//             </div>
//             <FaAngleDown
//               className={`text-white duration-300 ${!open && "hidden"} ${
//                 !submenuOpen.HomePage && "-rotate-90"
//               }`}
//             />
//           </div>
//           {submenuOpen.HomePage && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/home-controls" className="py-2.5 flex gap-2">
//                 <PiFlagBannerFoldDuotone
//                   size={20}
//                   className="text-yellow-300"
//                 />
//                 Slaider
//               </Link>
//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <CiSliderHorizontal size={20} className="text-yellow-300" />
//                 promotions
//               </div>
//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <MdOutlineRemoveFromQueue
//                   size={20}
//                   className="text-yellow-300"
//                 />
//                 Pages
//               </div>
//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <MdConnectWithoutContact
//                   size={20}
//                   className="text-yellow-300"
//                 />
//                 Notice
//               </div>
//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <MdConnectWithoutContact
//                   size={20}
//                   className="text-yellow-300"
//                 />
//                 About US
//               </div>
//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <MdConnectWithoutContact
//                   size={20}
//                   className="text-yellow-300"
//                 />
//                 FQA
//               </div>
//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <MdConnectWithoutContact
//                   size={20}
//                   className="text-yellow-300"
//                 />
//                 Sponsorship
//               </div>
//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <MdConnectWithoutContact
//                   size={20}
//                   className="text-yellow-300"
//                 />
//                 Brand Ambassador
//               </div>
//             </div>
//           )}
//         </div>

//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("Deposit")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <BsPiggyBank size={22} className="text-yellow-300" />
//               <p className={`${!open && "hidden"}`}> bank </p>
//             </div>
//             <FaAngleDown
//               className={`text-white duration-300 ${!open && "hidden"} ${
//                 !submenuOpen.Bank && "-rotate-90"
//               }`}
//             />
//           </div>
//           {submenuOpen.Bank && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <div to="/dashboard/" className="py-2.5 flex gap-2">
//                 <MdHistory size={22} className="text-yellow-300" />
//                 Deposit History
//               </div>

//               <div onClick={handleModalOpen} className="py-2.5 flex gap-2">
//                 <VscSymbolMethod size={22} className="text-yellow-300" />
//                 Deposit Method
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Settings Menu */}
//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("Settings")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <IoSettingsSharp size={22} className="text-red-500" />
//               <p className={`${!open && "hidden"}`}> Settings </p>
//             </div>
//             <FaAngleDown
//               className={`text-white duration-300 ${!open && "hidden"} ${
//                 !submenuOpen.Settings && "-rotate-90"
//               }`}
//             />
//           </div>
//           {submenuOpen.Settings && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Pincodes
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Activity Log
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Permissions
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Getway API Keys
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 SMS
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Mailings
//               </Link>
//               <Link
//                 to="/dashboard/gameCategories"
//                 className="py-2.5 flex gap-2"
//               >
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Support
//               </Link>
//               <Link to="/dashboard/agentProfile" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Security
//               </Link>
//             </div>
//           )}
//         </div>
//         <div
//           className="menu-item border-b border-gray-700 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 duration-300"
//           onClick={() => toggleSubmenu("OracleTechnology")}
//         >
//           <div
//             className={`px-4 py-3 flex items-center gap-2 duration-300 ${
//               !open ? "justify-center" : "justify-between"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <IoSettingsSharp size={22} className="text-red-500" />
//               <p className={`${!open && "hidden"}`}> Oracle Technology </p>
//             </div>
//             <FaAngleDown className={`text-white ${!open && "hidden"}`} />
//           </div>
//           {submenuOpen.OracleTechnology && open && (
//             <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 instant Support
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Normal Support
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Notice
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 About Us
//               </Link>
//               <Link to="/dashboard/happyhour" className="py-2.5 flex gap-2">
//                 <FaRegCircle size={22} className="text-yellow-300" />
//                 Contact US
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onOpenChange={handleModalClose}
//         title="Oops!!!"
//         // onSave={handleSaveChanges}
//       >
//         <p className="text-center text-red-600">
//           Please contact the API Connect us Oracle Technology developers team...
//         </p>
//       </Modal>
//     </div>
//   );
// };

// export default DashboardSidebar;
