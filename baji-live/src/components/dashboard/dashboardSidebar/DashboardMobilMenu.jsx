import { IoIosContact, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const DashboardMobilMenu = ({ open }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
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
          <div className="flex items-center">
            <div className="w-6 md:w-7 text-white hover:text-yellow-200 duration-300">
              <Link>
                <IoIosContact size={36} />
              </Link>
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
      </div>
    </div>
  );
};

export default DashboardMobilMenu;
