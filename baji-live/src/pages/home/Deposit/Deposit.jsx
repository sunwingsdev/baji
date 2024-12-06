import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdSmartphone } from "react-icons/md";

const Deposit = () => {
  const [activeTab, setActiveTab] = useState("deposit"); // State to track the active tab

  return (
    <div className="space-y-3">
      {/* Wallet Section */}
      <div className="bg-[#313131] px-3 py-2 rounded items-center justify-between hidden md:flex">
        <div>
          <p className="text-[#999] text-sm">মেইন ওয়ালেট</p>
          <p className="text-[#76bd6a] text-2xl">৳ 0</p>
        </div>
        <div className="border-s ps-3 border-gray-900">
          <p className="text-[#999] text-sm">সিকিউরিটি লেভেল</p>
          <p className="text-[#fdb100] text-sm">নরমাল</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-[#f35e5e] p-1 text-white rounded-full animate-pulse">
            <IoMailOutline className="text-xl" />
          </div>
          <div className="bg-[#76bd6a] p-1 text-white rounded-full opacity-50">
            <MdSmartphone className="text-xl" />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#313131] px-3 py-4 rounded space-y-4">
        <div className="flex items-center justify-between">
          <p className="px-6 border-s-8 border-[#26ffbc] text-[#26ffbc] w-1/2 hidden md:block">
            ফান্ডস
          </p>
          <div className="grid grid-cols-2 w-full md:w-1/2 text-sm text-white bg-[#464646]">
            <button
              className={`py-2 text-center font-medium w-full ${
                activeTab === "deposit"
                  ? "bg-gradient-to-r from-[#f79604] to-[#fbc103] rounded scale-110"
                  : "bg-[#464646]"
              }`}
              onClick={() => setActiveTab("deposit")}
            >
              ডিপোজিট
            </button>
            <button
              className={`py-2 text-center font-medium w-full ${
                activeTab === "withdraw"
                  ? "bg-gradient-to-r from-[#f79604] to-[#fbc103] rounded scale-110"
                  : "bg-[#464646]"
              }`}
              onClick={() => setActiveTab("withdraw")}
            >
              উইথড্র
            </button>
          </div>
        </div>
        <div className="border-t border-dashed border-[#26ffbc]"></div>

        {/* Tab Content */}
        {activeTab === "deposit" && (
          <div className="text-white space-y-4">
            <div className="space-y-2">
              {" "}
              <p className="text-sm">পেমেন্ট পদ্ধতি</p>
              <div className="flex gap-3">
                <div className="group flex flex-col items-center justify-center gap-2 border border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c] px-10 py-2">
                  <img
                    className="w-7"
                    src="https://www.baji.live/images/web/thirdparty/bkash.png"
                    alt=""
                  />
                  <p className=" text-sm opacity-50 group-hover:opacity-100">
                    bKash
                  </p>
                </div>
                <div className="group flex flex-col items-center justify-center gap-2 border border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c] px-10 py-2">
                  <img
                    className="w-7"
                    src="https://www.baji.live/images/web/thirdparty/bkash.png"
                    alt=""
                  />
                  <p className=" text-sm opacity-50 group-hover:opacity-100">
                    bKash
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">ডিপোজিট চ্যানেল</p>
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-sm opacity-50 px-10 py-2 border border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c] hover:opacity-100">
                    CashOut
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">এমাউন্ট</p>
              <div className="flex gap-3">
                <div className="flex items-center justify-start flex-wrap gap-2">
                  <p className="text-center text-sm opacity-50 py-1.5 md:py-3 w-20 md:w-28 border border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c] hover:opacity-100">
                    200
                  </p>
                  <p className="text-center text-sm opacity-50 py-1.5 md:py-3 w-20 md:w-28 border border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c] hover:opacity-100">
                    500
                  </p>
                  <p className="text-center text-sm opacity-50 py-1.5 md:py-3 w-20 md:w-28 border border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c] hover:opacity-100">
                    1000
                  </p>
                  <p className="text-center text-sm opacity-50 py-1.5 md:py-3 w-20 md:w-28 border border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c] hover:opacity-100">
                    3000
                  </p>
                  <p className="text-center text-sm opacity-50 py-1.5 md:py-3 w-20 md:w-28 border border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c] hover:opacity-100">
                    5000
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "withdraw" && (
          <div>
            <p>উইথড্র</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deposit;
