import { IoMailOutline } from "react-icons/io5";
import { MdSmartphone } from "react-icons/md";

const WalletSection = () => {
  return (
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
  );
};

export default WalletSection;
