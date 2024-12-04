import { useState } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { PiWallet } from "react-icons/pi";
import { RiIdCardLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MenuMobile = () => {
  const { token, user } = useSelector((state) => state.auth);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(true);

  const authenticatedRoutes = [
    { icon: IoMdHome, title: "হোম", route: "/" },
    { icon: RiIdCardLine, title: "প্রমোশন", route: "" },
    { icon: PiWallet, title: "ডিপোজিট", route: "" },
    {
      icon: LuUserCircle2,
      title: "মাই একাউন্ট",
      route: "",
      onClick: () => setDrawerOpen(true),
    },
  ];

  return (
    <div
      className={`sticky bottom-0 z-50 flex flex-row items-center justify-center bg-black text-white font-bold md:hidden ${
        user && token ? "justify-between px-6 py-2" : ""
      }`}
    >
      {!user && !token ? (
        <>
          <Link
            className="w-1/2 bg-[#14805e] py-4 text-center text-white"
            to="/login"
          >
            লগ ইন
          </Link>
          <Link className="w-1/2 bg-[#ffdf1a] py-4 text-center" to="/register">
            সাইন আপ
          </Link>
        </>
      ) : (
        <>
          {authenticatedRoutes.map(({ icon: Icon, title, onClick }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center gap-1"
              onClick={onClick}
            >
              <Icon className="text-2xl" />
              <p className="text-sm">{title}</p>
            </div>
          ))}
        </>
      )}

      {/* Full-Height Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-normal overflow-y-auto">
          {/* Drawer Content */}
          <div className="w-full h-full bg-black rounded-t-2xl shadow-lg flex flex-col">
            <button
              onClick={() => setDrawerOpen(false)}
              className="self-end text-white bg-black absolute ps-10 pe-2 pb-8 rounded-bl-full text-2xl"
            >
              ✕
            </button>
            <div>
              <img
                className="-mt-16"
                src="https://img.b112j.com/bj/h5/assets/images/member-header-bg.png?v=1732693526219"
                alt=""
              />
              <div className="px-3 absolute -mt-32 space-y-4 w-full">
                <div className="flex items-center justify-between px-3">
                  <div className="w-1/4 m-auto">
                    <img
                      className="w-20"
                      src="https://www.baji.live/images/v1/web/bj/vip/bdt/rank1.png"
                      alt=""
                    />
                  </div>
                  <div className="w-3/4 space-y-2">
                    <p className="text-xl">{user?.user.fullName}</p>
                    <div className="bg-[#333333] flex items-center justify-center gap-2 px-5 py-2 text-xs  rounded-full w-fit">
                      <p>
                        {" "}
                        ভিআইপি পয়েন্টস (VP){" "}
                        <span className="text-[#39d89f] ms-2">0</span>
                      </p>
                      <p className="border-s border-white ps-3 inline-flex items-center gap-1">
                        মাই ভিআইপি <MdDoubleArrow className="text-lg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#333333] px-3 py-7 rounded-md flex items-center justify-between">
                  <p className="inline-flex items-center gap-3 text-[#7dbfaa] text-sm">
                    মেইন ওয়ালেট{" "}
                    {isWalletOpen ? (
                      <FaEyeSlash
                        onClick={() => setIsWalletOpen(false)}
                        className="text-xl"
                      />
                    ) : (
                      <FaEye
                        onClick={() => setIsWalletOpen(true)}
                        className="text-xl"
                      />
                    )}
                  </p>
                  <p className="text-xl text-yellow-300">
                    ৳ <span className="ms-2">{isWalletOpen ? 0 : "***"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
