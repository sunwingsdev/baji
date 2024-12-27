import { MdPushPin } from "react-icons/md";
import { Link } from "react-router-dom";

const ExchangeHomeTabContent = () => {
  return (
    <div className="overflow-x-auto bg-white">
      <div className="bg-[#dddcd6] flex flex-row items-center justify-center gap-20">
        <p className="w-1/2 text-right">Matched</p>
        <p className="flex flex-row items-center justify-between w-1/3">
          <span>1</span> <span>X</span> <span>2</span>
        </p>
      </div>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td>
              <div className="flex flex-row items-center justify-between mx-2 my-1">
                <div className="flex flex-row items-start gap-2">
                  <div className="w-2 h-2 bg-green-700 border border-slate-700 rounded-full "></div>
                  <div className="flex flex-col items-start gap-2">
                    <Link
                      to=""
                      className="text-blue-600 text-lg font-semibold hover:underline leading-3 whitespace-nowrap"
                    >
                      Multan Sultan SRL T20 v Islamabad United SRL T20
                    </Link>

                    <div className="flex flex-row items-center gap-3">
                      <p className="text-green-500 text-lg font-bold">
                        In-Play
                      </p>
                      <div className="border border-blue-700 flex flex-row items-center gap-2 w-fit pe-1 rounded-lg">
                        <span className="bg-blue-700 text-white font-bold text-lg ps-2 pe-3 rounded-s-lg ">
                          E
                        </span>
                        <span className="text-blue-700">Cricket</span>
                      </div>
                      <p className="bg-orange-500 py-0 px-2 text-white italic font-bold text-lg w-fit rounded-lg">
                        P
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-slate-500">BDT0</p>
                </div>
              </div>
            </td>
            <td className="bg-blue-400 w-20 text-center border border-white">
              --
            </td>
            <td className="bg-red-300 w-20 text-center border border-white">
              --
            </td>
            <td className="bg-blue-400 w-20 text-center border border-white">
              --
            </td>
            <td className="bg-red-300 w-20 text-center border border-white">
              --
            </td>
            <td className="bg-blue-400 w-20 text-center border border-white">
              --
            </td>
            <td className="bg-red-300 w-20 text-center border border-white">
              --
            </td>
            <td className="w-12 h-14 flex items-center justify-center ">
              <MdPushPin className="border border-slate-400 rounded-full text-lg cursor-pointer hover:text-blue-500" />
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex flex-row items-center justify-between mx-2 my-1">
                <div className="flex flex-row items-start gap-2">
                  <div className="w-2 h-2 bg-green-300 border border-slate-500 rounded-full "></div>
                  <div className="flex flex-col items-start gap-2">
                    <Link
                      to=""
                      className="text-blue-600 text-lg font-semibold hover:underline leading-3 whitespace-nowrap"
                    >
                      South Africa v Pakistan
                    </Link>

                    <div className="flex flex-row items-center gap-3">
                      <p className="text-slate-400 text-sm">
                        Starting in 1 min
                      </p>

                      <div className="border border-blue-700 flex flex-row items-center gap-2 w-fit pe-1 rounded-lg">
                        <span className="bg-blue-700 text-white font-bold text-lg ps-2 pe-3 rounded-s-lg ">
                          E
                        </span>
                        <span className="text-blue-700">Cricket</span>
                      </div>
                      <p className="bg-orange-500 py-0 px-2 text-white italic font-bold text-lg w-fit rounded-lg">
                        P
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-slate-500">BDT120</p>
                </div>
              </div>
            </td>
            <td className="bg-blue-400 w-20 text-center border border-white">
              1.30
            </td>
            <td className="bg-red-300 w-20 text-center border border-white">
              --
            </td>
            <td className="bg-blue-400 w-20 text-center border border-white">
              1.50
            </td>
            <td className="bg-red-300 w-20 text-center border border-white">
              --
            </td>
            <td className="bg-blue-400 w-20 text-center border border-white">
              2.00
            </td>
            <td className="bg-red-300 w-20 text-center border border-white">
              --
            </td>
            <td className="w-12 h-14 flex items-center justify-center">
              <MdPushPin className="border border-slate-400 rounded-full text-lg cursor-pointer hover:text-blue-500" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeHomeTabContent;
