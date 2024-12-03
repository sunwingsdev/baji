import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="pt-6 pb-5">
        <img
          className="w-12 m-auto"
          src="https://www.baji.live/images/v1/web/bj/vip/bdt/rank1.png"
          alt=""
        />
        <h2 className="text-sm font-semibold text-white text-center">
          abirhassan31
        </h2>
        <p className="flex justify-center items-center gap-1 text-white">
          <FaStar className="text-teal-300" size={12} />0
        </p>
      </div>
      <div className="bg-black w-[76%] h-1 m-auto"></div>
      <div className="flex justify-between gap-1 px-8 py-1">
        <p className="text-sm text-[#c1c1c1]">Normal</p>
        <p className="text-sm text-[#c1c1c1]">Elite I</p>
      </div>
      <div className="bg-[#c1c1c1] w-[80%] h-0.5 m-auto mt-4"></div>
      <div className="flex justify-around items-center text-sm py-4">
        <Link className="text-white hover:text-teal-300">
          <div className="bg-[#5a5a5a] w-9 h-9 m-auto rounded-full flex justify-center items-center">
            <img
              src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/deposit.svg"
              alt=""
            />
          </div>
          <p className="mt-1">ডিপোজিট</p>
        </Link>
        <Link className="text-white hover:text-teal-300 text-sm">
          <div className="bg-[#5a5a5a] w-9 h-9 m-auto rounded-full flex justify-center items-center">
            <img
              src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/withdrawal.svg"
              alt=""
            />
          </div>
          <p className="mt-1">উইথড্র</p>
        </Link>
      </div>
      <div className="bg-[#c1c1c1] w-[90%] h-0.5 m-auto"></div>
      <div className="">
        <h2 className="text-base font-semibold text-white px-3 py-2">ফান্ডস</h2>
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-teal-300 hover:bg-black py-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-teal-300 duration-300">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/withdrawal.svg"
                alt=""
              />
            </div>
            <p className="text-sm">বেটিং রেকর্ডস</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
