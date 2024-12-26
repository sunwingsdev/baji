import {
  IoMdMenu,
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdHome,
} from "react-icons/io";
import { useState } from "react";
import {
  IoClose,
  IoGameController,
  IoLogoWechat,
  IoSettingsSharp,
} from "react-icons/io5"; // Close icon

import logo from "../../../assets/logo.png";
import { FaAffiliatetheme, FaUsers } from "react-icons/fa";
import { PiCashRegister } from "react-icons/pi";
import { GiGamepadCross, GiRibbonMedal } from "react-icons/gi";
import { SlGameController } from "react-icons/sl";
import { BsBank, BsFront, BsPiggyBank, BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <IoMdHome />, path: "/dashboard", submenu: [] },
  {
    name: "Users",
    icon: <FaUsers />,
    path: "/dashboard/allusers",
    submenu: [],
  },
  {
    name: "Cash Agent",
    icon: <PiCashRegister />,
    path: "/dashboard/agent",
    submenu: [],
  },
  {
    name: "Affiliators",
    icon: <FaAffiliatetheme />,
    path: "/dashboard/affilitors",
    submenu: [],
  },
  {
    name: "Games Control",
    icon: <IoGameController />,
    submenu: [
      { name: "Categories", path: "/dashboard/gamecategories" },
      { name: "Active Games", path: "/dashboard/userprofile" },
      { name: "Inactive Games", path: "/dashboard/agentprofile" },
    ],
  },
  {
    name: "Games Api key",
    icon: <GiGamepadCross />,
    submenu: [
      { name: "Sports Live TV", path: "/dashboard/gamesApi" },
      { name: "BetFair API", path: "/dashboard" },
      { name: "Sports Radar API", path: "/dashboard" },
      { name: "Odds Jam API", path: "/dashboard" },
      { name: "Bet Construct API", path: "/dashboard" },
      { name: "Kambi API", path: "/dashboard" },
      { name: "Pinnacle API", path: "/dashboard" },
      { name: "SoftSwiss API", path: "/dashboard" },
      { name: "Betradar API", path: "/dashboard" },
      { name: "Evolution API", path: "/dashboard" },
      { name: "Pragmatic Play API", path: "/dashboard" },
      { name: "Playtech API", path: "/dashboard" },
      { name: "NetEnt API", path: "/dashboard" },
      { name: "Betsoft Gaming API", path: "/dashboard" },
    ],
  },
  {
    name: "Bonuses",
    icon: <GiRibbonMedal />,
    submenu: [
      { name: "Happy Hours", path: "/dashboard/games" },
      { name: "Deposit Bonuses", path: "/dashboard" },
      { name: "Refer Bonuses", path: "/dashboard" },
      { name: "Welcome Bonuses", path: "/dashboard" },
    ],
  },
  {
    name: "Game History",
    icon: <SlGameController />,
    submenu: [
      { name: "Play Stats", path: "/dashboard" },
      { name: "Win Game Stats", path: "/dashboard" },
      { name: "Loss Game Stats", path: "/dashboard" },
    ],
  },
  { name: "Tournament", icon: <BsShop />, path: "/dashboard", submenu: [] },
  { name: "Jack Pot", icon: <BsShop />, path: "/dashboard", submenu: [] },
  {
    name: "Frontend",
    icon: <BsFront />,
    submenu: [
      { name: "Slider", path: "/dashboard/fontendslider" },
      { name: "Promotions", path: "/dashboard/promotionsoffer" },
      { name: "Pages", path: "/dashboard" },
      { name: "Notice", path: "/dashboard/notice" },
      { name: "About Us", path: "/dashboard" },
      { name: "FAQ", path: "/dashboard" },
      { name: "Sponsorship", path: "/dashboard/sponsorship" },
      { name: "Brand Ambassador", path: "/dashboard" },
    ],
  },
  {
    name: "Banking Deposit",
    icon: <BsPiggyBank />,
    submenu: [
      { name: "Deposit Method", path: "/dashboard" },
      { name: "Deposit History", path: "/dashboard/deposits" },
    ],
  },
  {
    name: "Banking Withdraw",
    icon: <BsBank />,
    submenu: [
      { name: "Withdraw Method", path: "/dashboard" },
      { name: "Withdraw History", path: "/dashboard/withdraws" },
    ],
  },
  {
    name: "Settings",
    icon: <IoSettingsSharp />,
    submenu: [
      { name: "Pincodes", path: "/dashboard" },
      { name: "Activity Log", path: "/dashboard" },
      { name: "Permissions", path: "/dashboard" },
      { name: "Gateway API Keys", path: "/dashboard" },
      { name: "SMS", path: "/dashboard" },
      { name: "Mailings", path: "/dashboard" },
      { name: "Support", path: "/dashboard" },
      { name: "Security", path: "/dashboard" },
    ],
  },
  {
    name: "Oracle Technology",
    icon: <IoLogoWechat />,
    submenu: [
      { name: "Instant Support", path: "/dashboard" },
      { name: "Normal Support", path: "/dashboard" },
      { name: "Permissions", path: "/dashboard" },
      { name: "Notice", path: "/dashboard" },
      { name: "About Us", path: "/dashboard" },
      { name: "Contact Us", path: "/dashboard" },
    ],
  },
];

const DashboardMobilMenu = ({ open }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Store the currently open submenu

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Toggle the submenu and close sidebar when a submenu item is clicked
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // If the clicked submenu is already open, close it; otherwise, open it
  };

  // Handle click on a submenu item (close the sidebar after selecting)
  const handleSubmenuClick = () => {
    closeSidebar();
  };

  return (
    <div>
      <div
        className={`bg-[#172437] p-4 fixed left-0 right-0 z-20 duration-300  ${
          !open ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <div className="md:hidden text-yellow-300" onClick={toggleSidebar}>
              <IoMdMenu className="text-3xl sm:text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-full h-screen overflow-y-auto backdrop-blur bg-black/40 z-30 md:hidden transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between bg-[#172437]">
          <div className="m-2 mb-6 mt-6 w-3/5">
            <div className="rounded-lg">
              <div className="flex items-center rounded-tl-lg rounded-tr-lg">
                <Link to={"/"}>
                  <img className="w-44" src={logo} alt="" />
                </Link>
                <Link to={"/"}>
                  <img
                    className="w-7 rounded-md object-cover"
                    src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="text-white cursor-pointer mt-1"
            onClick={closeSidebar}
          >
            <IoClose size={36} />
          </div>
        </div>

        {/* Menu Items with Fixed Icons and Dynamic Submenu */}
        <div className="text-white bg-[#172437]">
          {menuItems.map((item) => (
            <div key={item.name}>
              <div
                className={`py-2.5 px-4 flex items-center justify-between border-b border-gray-400 ${
                  item.submenu.length > 0 ? "cursor-pointer" : ""
                }`}
                onClick={() =>
                  item.submenu.length > 0 && toggleSubmenu(item.name)
                }
              >
                <div className="flex items-center">
                  {item.icon}
                  <Link
                    to={item.path}
                    className="ml-2 block"
                    onClick={handleSubmenuClick}
                  >
                    {item.name}
                  </Link>
                </div>
                {item.submenu.length > 0 && (
                  <div>
                    {openSubmenu === item.name ? (
                      <IoIosArrowDown size={20} />
                    ) : (
                      <IoIosArrowForward size={20} />
                    )}
                  </div>
                )}
              </div>
              {openSubmenu === item.name && (
                <div className="pl-4">
                  {item.submenu.map((submenuItem) => (
                    <div key={submenuItem.name} className="py-2.5 pl-6 text-sm">
                      <Link
                        to={submenuItem.path}
                        className="block"
                        onClick={handleSubmenuClick}
                      >
                        {submenuItem.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMobilMenu;

// import {
//   IoIosContact,
//   IoMdMenu,
//   IoIosArrowDown,
//   IoIosArrowForward,
// } from "react-icons/io";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { IoClose } from "react-icons/io5"; // Close icon
// import Modal from "@/components/shared/Modal";
// import { useDispatch } from "react-redux";
// import { useToasts } from "react-toast-notifications";
// import { logout } from "@/redux/slices/authSlice";

// const DashboardMobilMenu = ({ open }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSubmenuOpen, setIsSubmenuOpen] = useState({
//     Deposit: false,
//     withdraw: false,
//     HomePage: false,
//     deposit: false,
//     Stats: false,
//     Activity_Log: false,
//     Pages: false,
//     Settings: false,
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { addToast } = useToasts();
//   const location = useLocation();

//   useEffect(() => {
//     closeSidebar();
//   }, [location]);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   // Toggle the sidebar
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Close the sidebar
//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   // Toggle the submenu (for each menu item)
//   const toggleSubmenu = (menu) => {
//     setIsSubmenuOpen((prevState) => ({
//       ...prevState,
//       [menu]: !prevState[menu],
//     }));
//   };

//   // Toggle the dropdown
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("token");
//     addToast("Logout successful", {
//       appearance: "success",
//       autoDismiss: true,
//     });
//     navigate("/admin-login");
//   };

//   return (
//     <>
//       <div>
//         <div
//           className={`bg-[#14815f] p-4 fixed left-0 flex items-center justify-between right-0 z-20 duration-300 ${
//             !open ? "md:ml-16" : "md:ml-64"
//           }`}
//         >
//           <div className="flex items-center justify-between">
//             <div className="md:hidden text-yellow-300" onClick={toggleSidebar}>
//               <IoMdMenu className="text-3xl sm:text-3xl" />
//             </div>
//           </div>
//           {/* DropdownMenu */}
//           <div className="relative">
//             <div className="flex items-center gap-3">
//               <Link to="/" className="text-white underline hover:text-blue-400">
//                 Main website
//               </Link>
//               <div
//                 className="w-6 md:w-7 text-white hover:text-yellow-200 duration-300 cursor-pointer"
//                 onClick={toggleDropdown}
//               >
//                 <IoIosContact size={36} />
//               </div>
//             </div>
//             {isDropdownOpen && (
//               <div className="absolute top-full right-0 bg-white shadow-lg rounded-sm">
//                 <ul className="">
//                   <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
//                     <Link>Admin</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
//                     <Link to="/profile">Profile</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
//                     <Link>Settings</Link>
//                   </li>

//                   <li
//                     onClick={handleLogout}
//                     className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer"
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           {/* DropdownMenu end */}
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed inset-0 w-full h-screen overflow-y-auto backdrop-blur bg-[#14815f] z-30 md:hidden transform transition-transform duration-500 ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex justify-between">
//             <div className="m-2 mb-6 mt-6 w-3/5">
//               <div className="border-2 border-[#2a2a2a] rounded-lg">
//                 <div className="flex items-center bg-[#242424] rounded-tl-lg rounded-tr-lg">
//                   <p className="text-sm font-semibold text-yellow-300">
//                     হাই স্বাগতম
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="text-white cursor-pointer mt-1"
//               onClick={closeSidebar}
//             >
//               <IoClose size={36} />
//             </div>
//           </div>

//           {/* Menu Items with Submenu */}
//           <div className="text-white">
//             <div className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400">
//               <Link to="/dashboard" className="block">
//                 Home
//               </Link>
//             </div>

//             <div className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400">
//               <Link to="/dashboard/users" className="block">
//                 Users
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Agent Tree
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Shops
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Tournaments
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Categories
//               </Link>
//             </div>

//             {/* deposits Menu */}
//             <div
//               className="py-2.5 ps-8 pe-3 flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//               onClick={() => toggleSubmenu("deposit")}
//             >
//               <div className="">
//                 <p>Deposits</p>
//               </div>
//               {isSubmenuOpen.deposit ? (
//                 <IoIosArrowDown size={24} />
//               ) : (
//                 <IoIosArrowForward size={24} />
//               )}
//             </div>
//             {isSubmenuOpen.deposit && (
//               <div className="pl-4 py-2">
//                 <Link
//                   to="/dashboard/deposits"
//                   className="block py-2.5 ps-8 pe-3 "
//                 >
//                   Deposit History
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Deposit Method
//                 </Link>
//                 {/* <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Invite Friends
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Welcome Bonuses
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   SMS Bonuses
//                 </Link> */}
//               </div>
//             )}
//             {/* withdraw Menu */}
//             <div
//               className="py-2.5 ps-8 pe-3 flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//               onClick={() => toggleSubmenu("withdraw")}
//             >
//               <div className="">
//                 <p>Withdraws</p>
//               </div>
//               {isSubmenuOpen.withdraw ? (
//                 <IoIosArrowDown size={24} />
//               ) : (
//                 <IoIosArrowForward size={24} />
//               )}
//             </div>
//             {isSubmenuOpen.withdraw && (
//               <div className="pl-4 py-2">
//                 <Link
//                   to="/dashboard/withdraws"
//                   className="block py-2.5 ps-8 pe-3 "
//                 >
//                   Withdraw History
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Deposit Method
//                 </Link>
//                 {/* <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Invite Friends
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Welcome Bonuses
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   SMS Bonuses
//                 </Link> */}
//               </div>
//             )}

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Jackpot
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Pincodes
//               </Link>
//             </div>

//             <div className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400">
//               <Link to="/dashboard/users" className="block">
//                 Games
//               </Link>
//             </div>

//             {/* Stats Menu */}
//             <div
//               className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//               onClick={() => toggleSubmenu("Stats")}
//             >
//               <div className="">
//                 <p>Stats</p>
//               </div>
//               {isSubmenuOpen.Stats ? (
//                 <IoIosArrowDown size={24} />
//               ) : (
//                 <IoIosArrowForward size={24} />
//               )}
//             </div>
//             {isSubmenuOpen.Stats && (
//               <div className="pl-4 py-2">
//                 <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
//                   Pay Stats
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Game Stats
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Shift Stats
//                 </Link>
//               </div>
//             )}

//             {/* Activity Log Menu */}
//             <div
//               className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//               onClick={() => toggleSubmenu("Activity_Log")}
//             >
//               <div className="">
//                 <p>Activity_Log</p>
//               </div>
//               {isSubmenuOpen.Activity_Log ? (
//                 <IoIosArrowDown size={24} />
//               ) : (
//                 <IoIosArrowForward size={24} />
//               )}
//             </div>
//             {isSubmenuOpen.Activity_Log && (
//               <div className="pl-4 py-2">
//                 <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
//                   All
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   System Data
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   User Data
//                 </Link>
//               </div>
//             )}

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Permissions
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Api Keys
//               </Link>
//             </div>

//             {/* Pages Menu */}
//             <div
//               className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//               onClick={() => toggleSubmenu("Pages")}
//             >
//               <div className="">
//                 <p>Pages</p>
//               </div>
//               {isSubmenuOpen.Pages ? (
//                 <IoIosArrowDown size={24} />
//               ) : (
//                 <IoIosArrowForward size={24} />
//               )}
//             </div>
//             {isSubmenuOpen.Pages && (
//               <div className="pl-4 py-2">
//                 <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
//                   Helper
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Articles
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Rules
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   FAQ
//                 </Link>
//               </div>
//             )}

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 SMS Mailing
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Affiliate
//               </Link>
//             </div>

//             {/* Homepage Menu */}
//             <div
//               className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//               onClick={() => toggleSubmenu("Homepage")}
//             >
//               <div className="">
//                 <p>Homepage</p>
//               </div>
//               {isSubmenuOpen.Homepage ? (
//                 <IoIosArrowDown size={24} />
//               ) : (
//                 <IoIosArrowForward size={24} />
//               )}
//             </div>
//             {isSubmenuOpen.Homepage && (
//               <div className="pl-4 py-2">
//                 <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
//                   Banner
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Slider
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Form
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Contact
//                 </Link>
//               </div>
//             )}

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Support
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Bank
//               </Link>
//             </div>

//             <div
//               onClick={handleModalOpen}
//               className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//             >
//               <Link to="/dashboard/users" className="block">
//                 Security
//               </Link>
//             </div>

//             {/* Settings Menu */}
//             <div
//               className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
//               onClick={() => toggleSubmenu("Settings")}
//             >
//               <div className="">
//                 <p>Settings</p>
//               </div>
//               {isSubmenuOpen.Settings ? (
//                 <IoIosArrowDown size={24} />
//               ) : (
//                 <IoIosArrowForward size={24} />
//               )}
//             </div>
//             {isSubmenuOpen.Settings && (
//               <div className="pl-4 py-2">
//                 <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
//                   General
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Securities
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   SMS
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Payment
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Banks
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Categories
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Games
//                 </Link>
//                 <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
//                   Auth
//                 </Link>
//               </div>
//             )}
//           </div>
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
//     </>
//   );
// };

// export default DashboardMobilMenu;
