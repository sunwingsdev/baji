import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdSmartphone } from "react-icons/md";
import DepositTab from "@/components/home/DepositTab/DepositTab";
import WithdrawTab from "@/components/home/WithdrawTab/WithdrawTab";

const Deposit = () => {
  const [activeTab, setActiveTab] = useState("deposit");

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

      <div className="flex justify-center gap-3 items-start">
        {/* Tabs Section */}
        <div className="bg-[#313131] px-3 py-4 rounded space-y-4 w-full md:w-4/5">
          <div className="flex items-center justify-between">
            <p className="px-6 border-s-8 border-[#26ffbc] text-[#26ffbc] w-1/2 hidden md:block">
              ফান্ডস
            </p>
            <div className="grid grid-cols-2 w-full md:w-1/2 text-sm text-white bg-[#464646] rounded">
              <button
                className={`py-2 text-center font-medium w-full rounded ${
                  activeTab === "deposit"
                    ? "bg-gradient-to-r from-[#f79604] to-[#fbc103] scale-110"
                    : "bg-[#464646]"
                }`}
                onClick={() => setActiveTab("deposit")}
              >
                ডিপোজিট
              </button>
              <button
                className={`py-2 text-center font-medium w-full rounded ${
                  activeTab === "withdraw"
                    ? "bg-gradient-to-r from-[#f79604] to-[#fbc103] scale-110"
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
          {activeTab === "deposit" && <DepositTab />}

          {activeTab === "withdraw" && <WithdrawTab />}
        </div>

        <div className="bg-[#313131] px-3 py-4 rounded space-y-4 w-1/5 text-xs hidden md:block">
          <p className=" text-[#7293E1]">
            {activeTab === "deposit"
              ? "আমানত রেকর্ড"
              : "রেকর্ড প্রত্যাহার করুন"}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 py-5">
            <img
              className="w-24"
              src="https://www.baji.live/images/web/player/table/no-value.svg"
              alt=""
            />
            <p className="text-white opacity-50">কোনও ডেটা নেই</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
