import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { IoIosArrowDown, IoIosArrowForward, IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import Modal from "@/components/shared/Modal";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const DashboardMobileMenu = ({ open, menuItems }) => {
  const { data: homeControls, isLoading } = useGetHomeControlsQuery();
  const { user, token } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const dashboardSidebarRef = useRef(null);
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dashboardSidebarRef.current &&
        !dashboardSidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSidebarOpen]);

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

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
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleMenuClick = (menu) => {
    if (!user && !token) {
      addToast("Please login to access this page", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (menu?.path && !menu?.submenu) {
      navigate(menu?.path);
      closeSidebar();
    } else if (menu?.submenu) {
      return;
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSubmenuClick = (submenu) => {
    if (!user && !token) {
      addToast("Please login to access this page", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (submenu?.path) {
      navigate(submenu?.path);
      closeSidebar();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div>
        <div
          className={`bg-[#041d3c] p-4 fixed left-0 right-0 z-20 duration-300 ${
            !open ? "md:ml-16" : "md:ml-64"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="">
              <div
                className="md:hidden text-yellow-300"
                onClick={toggleSidebar}
              >
                <IoMdMenu className="text-3xl sm:text-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={dashboardSidebarRef}
          className={`fixed inset-0 w-[70%] sm:w-1/2 h-screen overflow-y-auto backdrop-blur bg-[#041d3c] z-30 md:hidden transform transition-transform duration-500 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between bg-[#041d3c]">
            <div className="py-2 ps-4">
              {isLoading ? (
                <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
              ) : (
                <img
                  src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
                  className="w-28"
                  alt=""
                />
              )}
            </div>
            <div
              className="text-white cursor-pointer mt-1"
              onClick={closeSidebar}
            >
              <IoClose size={36} />
            </div>
          </div>

          {/* Menu Items with Fixed Icons and Dynamic Submenu */}
          <div className="text-white bg-[#041d3c] font-bold">
            {menuItems.map((item) => {
              const isActive = location.pathname === item?.path;
              return (
                <div
                  key={item?.name}
                  className={`py-1 flex flex-col items-start gap-2 border-b border-gray-700 duration-300 ${
                    isActive ? "bg-[#114d3a]" : "hover:bg-[#114d3a]"
                  }`}
                >
                  <div
                    className={`px-4 py-2.5 flex items-center justify-between w-full ${
                      item?.submenu?.length > 0 ? "cursor-pointer" : ""
                    }`}
                    onClick={() =>
                      item?.submenu?.length > 0 && toggleSubmenu(item?.name)
                    }
                  >
                    <div
                      onClick={() => handleMenuClick(item)}
                      className="inline-flex items-center gap-3 w-full"
                    >
                      {item.icon} {item.name}
                    </div>
                    {item?.submenu?.length > 0 && (
                      <div>
                        {openSubmenu === item?.name ? (
                          <IoIosArrowDown size={20} />
                        ) : (
                          <IoIosArrowForward size={20} />
                        )}
                      </div>
                    )}
                  </div>
                  {openSubmenu === item?.name && (
                    <div className="bg-red-600 w-full">
                      {item?.submenu?.map((submenuItem) => {
                        const isSubmenuActive =
                          location.pathname === submenuItem?.path;
                        return (
                          <div
                            onClick={() => handleSubmenuClick(submenuItem)}
                            key={submenuItem?.name}
                            className={`pl-8 py-3 flex flex-col gap-2 ${
                              isSubmenuActive ? "bg-red-500" : ""
                            }`}
                          >
                            <Link
                              to={submenuItem?.path}
                              className="flex flex-row items-center gap-2"
                            >
                              <FaRegCircle
                                size={16}
                                className={`${
                                  isSubmenuActive
                                    ? "text-white"
                                    : "text-yellow-300"
                                }`}
                              />
                              {submenuItem?.name}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title="Opps!!"
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </Modal>
    </>
  );
};

export default DashboardMobileMenu;
