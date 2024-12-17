import {
  IoIosContact,
  IoMdMenu,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon
import Modal from "@/components/shared/Modal";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { logout } from "@/redux/slices/authSlice";

const DashboardMobilMenu = ({ open }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    Deposit: false,
    withdraw: false,
    HomePage: false,
    deposit: false,
    Stats: false,
    Activity_Log: false,
    Pages: false,
    Settings: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Toggle the submenu (for each menu item)
  const toggleSubmenu = (menu) => {
    setIsSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    addToast("Logout successful", {
      appearance: "success",
      autoDismiss: true,
    });
    navigate("/");
  };

  return (
    <>
      <div>
        <div
          className={`bg-[#14815f] p-4 fixed left-0 flex items-center justify-between right-0 z-20 duration-300 ${
            !open ? "md:ml-16" : "md:ml-64"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="md:hidden text-yellow-300" onClick={toggleSidebar}>
              <IoMdMenu className="text-3xl sm:text-3xl" />
            </div>
          </div>
          {/* DropdownMenu */}
          <div className="relative">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-white underline hover:text-blue-400">
                Main website
              </Link>
              <div
                className="w-6 md:w-7 text-white hover:text-yellow-200 duration-300 cursor-pointer"
                onClick={toggleDropdown}
              >
                <IoIosContact size={36} />
              </div>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 bg-white shadow-lg rounded-sm">
                <ul className="">
                  <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
                    <Link>Admin</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
                    <Link>Settings</Link>
                  </li>

                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* DropdownMenu end */}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 w-full h-screen overflow-y-auto backdrop-blur bg-[#14815f] z-30 md:hidden transform transition-transform duration-500 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between">
            <div className="m-2 mb-6 mt-6 w-3/5">
              <div className="border-2 border-[#2a2a2a] rounded-lg">
                <div className="flex items-center bg-[#242424] rounded-tl-lg rounded-tr-lg">
                  <p className="text-sm font-semibold text-yellow-300">
                    হাই স্বাগতম
                  </p>
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

          {/* Menu Items with Submenu */}
          <div className="text-white">
            <div className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400">
              <Link to="/dashboard" className="block">
                Home
              </Link>
            </div>

            <div className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400">
              <Link to="/dashboard/users" className="block">
                Users
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Agent Tree
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Shops
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Tournaments
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Categories
              </Link>
            </div>

            {/* deposits Menu */}
            <div
              className="py-2.5 ps-8 pe-3 flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
              onClick={() => toggleSubmenu("deposit")}
            >
              <div className="">
                <p>Deposits</p>
              </div>
              {isSubmenuOpen.deposit ? (
                <IoIosArrowDown size={24} />
              ) : (
                <IoIosArrowForward size={24} />
              )}
            </div>
            {isSubmenuOpen.deposit && (
              <div className="pl-4 py-2">
                <Link
                  to="/dashboard/deposits"
                  className="block py-2.5 ps-8 pe-3 "
                >
                  Deposit History
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Deposit Method
                </Link>
                {/* <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Invite Friends
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Welcome Bonuses
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  SMS Bonuses
                </Link> */}
              </div>
            )}
            {/* withdraw Menu */}
            <div
              className="py-2.5 ps-8 pe-3 flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
              onClick={() => toggleSubmenu("withdraw")}
            >
              <div className="">
                <p>Withdraws</p>
              </div>
              {isSubmenuOpen.withdraw ? (
                <IoIosArrowDown size={24} />
              ) : (
                <IoIosArrowForward size={24} />
              )}
            </div>
            {isSubmenuOpen.withdraw && (
              <div className="pl-4 py-2">
                <Link
                  to="/dashboard/withdraws"
                  className="block py-2.5 ps-8 pe-3 "
                >
                  Withdraw History
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Deposit Method
                </Link>
                {/* <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Invite Friends
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Welcome Bonuses
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  SMS Bonuses
                </Link> */}
              </div>
            )}

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Jackpot
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Pincodes
              </Link>
            </div>

            <div className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400">
              <Link to="/dashboard/users" className="block">
                Games
              </Link>
            </div>

            {/* Stats Menu */}
            <div
              className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
              onClick={() => toggleSubmenu("Stats")}
            >
              <div className="">
                <p>Stats</p>
              </div>
              {isSubmenuOpen.Stats ? (
                <IoIosArrowDown size={24} />
              ) : (
                <IoIosArrowForward size={24} />
              )}
            </div>
            {isSubmenuOpen.Stats && (
              <div className="pl-4 py-2">
                <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
                  Pay Stats
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Game Stats
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Shift Stats
                </Link>
              </div>
            )}

            {/* Activity Log Menu */}
            <div
              className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
              onClick={() => toggleSubmenu("Activity_Log")}
            >
              <div className="">
                <p>Activity_Log</p>
              </div>
              {isSubmenuOpen.Activity_Log ? (
                <IoIosArrowDown size={24} />
              ) : (
                <IoIosArrowForward size={24} />
              )}
            </div>
            {isSubmenuOpen.Activity_Log && (
              <div className="pl-4 py-2">
                <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
                  All
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  System Data
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  User Data
                </Link>
              </div>
            )}

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Permissions
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Api Keys
              </Link>
            </div>

            {/* Pages Menu */}
            <div
              className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
              onClick={() => toggleSubmenu("Pages")}
            >
              <div className="">
                <p>Pages</p>
              </div>
              {isSubmenuOpen.Pages ? (
                <IoIosArrowDown size={24} />
              ) : (
                <IoIosArrowForward size={24} />
              )}
            </div>
            {isSubmenuOpen.Pages && (
              <div className="pl-4 py-2">
                <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
                  Helper
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Articles
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Rules
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  FAQ
                </Link>
              </div>
            )}

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                SMS Mailing
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Affiliate
              </Link>
            </div>

            {/* Homepage Menu */}
            <div
              className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
              onClick={() => toggleSubmenu("Homepage")}
            >
              <div className="">
                <p>Homepage</p>
              </div>
              {isSubmenuOpen.Homepage ? (
                <IoIosArrowDown size={24} />
              ) : (
                <IoIosArrowForward size={24} />
              )}
            </div>
            {isSubmenuOpen.Homepage && (
              <div className="pl-4 py-2">
                <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
                  Banner
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Slider
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Form
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Contact
                </Link>
              </div>
            )}

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Support
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Bank
              </Link>
            </div>

            <div
              onClick={handleModalOpen}
              className="py-2.5 ps-8 pe-3 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
            >
              <Link to="/dashboard/users" className="block">
                Security
              </Link>
            </div>

            {/* Settings Menu */}
            <div
              className="py-2.5 ps-8 pe-3  flex items-center justify-between border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400"
              onClick={() => toggleSubmenu("Settings")}
            >
              <div className="">
                <p>Settings</p>
              </div>
              {isSubmenuOpen.Settings ? (
                <IoIosArrowDown size={24} />
              ) : (
                <IoIosArrowForward size={24} />
              )}
            </div>
            {isSubmenuOpen.Settings && (
              <div className="pl-4 py-2">
                <Link to="/dashboard" className="block py-2.5 ps-8 pe-3 ">
                  General
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Securities
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  SMS
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Payment
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Banks
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Categories
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Games
                </Link>
                <Link to="/dashboard/users" className="block py-2.5 ps-8 pe-3 ">
                  Auth
                </Link>
              </div>
            )}
          </div>
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
    </>
  );
};

export default DashboardMobilMenu;
