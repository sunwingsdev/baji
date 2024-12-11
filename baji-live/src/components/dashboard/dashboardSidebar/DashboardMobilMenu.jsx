import {
  IoIosContact,
  IoMdMenu,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon

const DashboardMobilMenu = ({ open }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    Deposit: false,
    withdraw: false,
    HomePage: false,
    Bonuses: false,
    Stats: false,
    Activity_Log: false,
    Pages: false,
    Settings: false,
  });

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

  return (
    <div>
      <div
        className={`bg-[#14815f] p-4 fixed left-0 right-0 z-20 duration-300 ${
          !open ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <div className="md:hidden text-yellow-300" onClick={toggleSidebar}>
              <IoMdMenu className="text-3xl sm:text-3xl" />
            </div>
          </div>
          {/* DropdownMenu */}
          <div className="relative">
            <div className="flex items-center">
              <div
                className="w-6 md:w-7 text-white hover:text-yellow-200 duration-300 cursor-pointer"
                onClick={toggleDropdown}
              >
                <IoIosContact size={36} />
              </div>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-sm">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
                    <Link to="/admin">Admin</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#14815f] hover:text-yellow-400 cursor-pointer">
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* DropdownMenu end */}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-full h-screen overflow-y-auto backdrop-blur bg-black/40 z-30 md:hidden transform transition-transform duration-500 ${
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
          <div className="py-2.5 px-4">
            <Link to="/dashboard/shops" className="block">
              Home
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Users
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Agent Tree
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Shops
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Tournaments
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Categories
            </Link>
          </div>

          {/* Bonuses Menu */}
          <div
            className="py-2.5 px-4  flex items-center justify-between"
            onClick={() => toggleSubmenu("Bonuses")}
          >
            <div className="">
              <p>Bonuses</p>
            </div>
            {isSubmenuOpen.Bonuses ? (
              <IoIosArrowDown size={24} />
            ) : (
              <IoIosArrowForward size={24} />
            )}
          </div>
          {isSubmenuOpen.Bonuses && (
            <div className="pl-4 py-2">
              <Link to="/dashboard" className="block py-2.5 px-4 ">
                Happy Hour
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Progress Bonuses
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Invite Friends
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Welcome Bonuses
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                SMS Bonuses
              </Link>
            </div>
          )}

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Jackpot
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Pincodes
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Games
            </Link>
          </div>

          {/* Stats Menu */}
          <div
            className="py-2.5 px-4  flex items-center justify-between"
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
              <Link to="/dashboard" className="block py-2.5 px-4 ">
                Pay Stats
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Game Stats
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Shift Stats
              </Link>
            </div>
          )}

          {/* Activity Log Menu */}
          <div
            className="py-2.5 px-4  flex items-center justify-between"
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
              <Link to="/dashboard" className="block py-2.5 px-4 ">
                All
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                System Data
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                User Data
              </Link>
            </div>
          )}

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Permissions
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Api Keys
            </Link>
          </div>

          {/* Pages Menu */}
          <div
            className="py-2.5 px-4  flex items-center justify-between"
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
              <Link to="/dashboard" className="block py-2.5 px-4 ">
                Helper
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Articles
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Rules
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                FAQ
              </Link>
            </div>
          )}

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              SMS Mailing
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Affiliate
            </Link>
          </div>

          {/* Deposit Menu */}
          <div
            className="py-2.5 px-4  flex items-center justify-between"
            onClick={() => toggleSubmenu("Deposit")}
          >
            <div className="">
              <p>Deposit</p>
            </div>
            {isSubmenuOpen.Deposit ? (
              <IoIosArrowDown size={24} />
            ) : (
              <IoIosArrowForward size={24} />
            )}
          </div>
          {isSubmenuOpen.Deposit && (
            <div className="pl-4 py-2">
              <Link to="/dashboard" className="block py-2.5 px-4 ">
                Deposit History
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Deposit Method
              </Link>
            </div>
          )}

          {/* withdraw Menu */}
          <div
            className="py-2.5 px-4  flex items-center justify-between"
            onClick={() => toggleSubmenu("withdraw")}
          >
            <div className="">
              <p>Withdraw</p>
            </div>
            {isSubmenuOpen.withdraw ? (
              <IoIosArrowDown size={24} />
            ) : (
              <IoIosArrowForward size={24} />
            )}
          </div>
          {isSubmenuOpen.withdraw && (
            <div className="pl-4 py-2">
              <Link to="/dashboard" className="block py-2.5 px-4 ">
                Withdraw History
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Withdraw Method
              </Link>
            </div>
          )}

          {/* Homepage Menu */}
          <div
            className="py-2.5 px-4  flex items-center justify-between"
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
              <Link to="/dashboard" className="block py-2.5 px-4 ">
                Banner
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Slider
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Form
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Contact
              </Link>
            </div>
          )}

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Support
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Bank
            </Link>
          </div>

          <div className="py-2.5 px-4">
            <Link to="/dashboard/users" className="block">
              Security
            </Link>
          </div>

          {/* Settings Menu */}
          <div
            className="py-2.5 px-4  flex items-center justify-between"
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
              <Link to="/dashboard" className="block py-2.5 px-4 ">
                General
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Securities
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                SMS
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Payment
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Banks
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Categories
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Games
              </Link>
              <Link to="/dashboard/users" className="block py-2.5 px-4 ">
                Auth
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardMobilMenu;
