import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdAlarm } from "react-icons/io";
import { MdPushPin } from "react-icons/md";
import { Link } from "react-router-dom";

const ExchangeDynamicTable = ({ tableData }) => {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <tbody>
        {tableData?.map((row, i) => (
          <tr key={i}>
            <td>
              <div className="flex flex-row items-center justify-between mx-2 my-1">
                <div className="flex flex-row items-start gap-2">
                  {/* online status icon  */}
                  <div
                    className={`w-2 h-2 border rounded-full ${
                      row?.onlineStatus === "online"
                        ? "bg-green-700 border-slate-700"
                        : "bg-green-300 border-slate-500"
                    }`}
                  ></div>
                  <div className="flex flex-col items-start gap-2">
                    <Link
                      to={row?.link}
                      className="text-blue-600 text-lg font-semibold hover:underline leading-3 whitespace-nowrap"
                    >
                      {row?.teams}
                    </Link>

                    <div className="flex flex-row items-center gap-3">
                      {row?.status === "in-play" && (
                        <p className="text-green-500 text-lg font-bold">
                          In-Play
                        </p>
                      )}
                      {row?.status === "Starting in 1 min" && (
                        <p className="text-slate-400 text-sm">
                          Starting in 1 min
                        </p>
                      )}
                      {row?.status === "Tomorrow 00:00" && (
                        <p className="text-slate-400 text-sm">Tomorrow 00:00</p>
                      )}
                      {row?.category === "e-cricket" && (
                        <div className="border border-blue-700 flex flex-row items-center gap-2 w-fit pe-1 rounded-lg">
                          <span className="bg-blue-700 text-white font-bold text-lg ps-2 pe-3 rounded-s-lg ">
                            E
                          </span>
                          <span className="text-blue-700">Cricket</span>
                        </div>
                      )}
                      {row?.action === "live" && (
                        <div className="bg-[#1a77b3] p-1.5 rounded-lg">
                          <FaRegCirclePlay className="text-white" />
                        </div>
                      )}
                      {(Array.isArray(row?.tag) ? row?.tag : [row?.tag])?.map(
                        (t, j) => (
                          <div key={j}>
                            {t === "P" && (
                              <p className="bg-orange-500 py-0 px-2 text-white italic font-bold text-lg w-fit rounded-lg">
                                P
                              </p>
                            )}
                            {t === "F" && (
                              <div className="flex flex-row items-center">
                                <div className="bg-green-500 p-1.5 rounded-s-lg">
                                  <IoMdAlarm className="text-white" />
                                </div>
                                <div className="bg-[#1a77b3] py-0 px-2 text-white italic font-bold text-lg w-fit rounded-e-lg">
                                  F
                                </div>
                              </div>
                            )}
                            {t === "B" && (
                              <div className="flex flex-row items-center">
                                <div className="bg-green-500 p-1.5 rounded-s-lg">
                                  <IoMdAlarm className="text-white" />
                                </div>
                                <div className="bg-[#1a77b3] py-0 px-2 text-white italic font-bold text-lg w-fit rounded-e-lg">
                                  B
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-slate-500">{row?.amount}</p>
                </div>
              </div>
            </td>
            {row?.values?.map((value, j) => (
              <td
                key={j}
                className={`${
                  j % 2 === 0 ? "bg-blue-400" : "bg-red-300"
                } w-20 text-center border border-white`}
              >
                {value}
              </td>
            ))}
            <td className="w-12 h-14 flex items-center justify-center">
              <MdPushPin className="border border-slate-400 rounded-full text-lg cursor-pointer hover:text-blue-500" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExchangeDynamicTable;
