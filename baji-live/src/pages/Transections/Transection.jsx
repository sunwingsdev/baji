import WalletSection from "@/components/home/WalletSection/WalletSection";
import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useState } from "react";

const Transection = () => {
  // State for selected buttons
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Button click handlers
  const handleTypeClick = (type) => setSelectedType(type);
  const handleStatusClick = (status) => setSelectedStatus(status);
  const handleDateClick = (date) => setSelectedDate(date);

  const data = [
    {
      name: "Agent001",
      number: "12546",
      amount: 5300,
      date: 23 / 10 / 24,
      status: "ok",
    },
  ];

  const columns = [
    { headerName: "টাইপ", field: "name" },
    { headerName: "না", field: "number" },
    { headerName: "এমাউন্ট", field: "amount" },
    { headerName: "তারিখ", field: "date" },
    { headerName: "স্ট্যাটাস", field: "status" },
  ];

  return (
    <div className="space-y-2 text-nowrap">
      <WalletSection />
      <div className="bg-[#363838] p-2 text-white rounded-md">
        <div className="border-b-2 border-green-300 border-dotted">
          <h1 className="p-2 text-green-300 ">ট্রানজেকশন</h1>
        </div>
        <div>
          {/* Type Section */}
          <div className="p-2">
            <h1 className="p-2">টাইপ</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:w-5/6 text-sm">
              {["ডিপোজিট", "উইথড্র", "অ্যাডজাস্টমেন্ট", "অল"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeClick(type)}
                  className={` py-2 lg:p-4 lg:py-6 border  rounded  ${
                    selectedType === type ? " text-white border-[#26ffbc]" : ""
                  }`}
                >
                  {type} {selectedType === type && "✔️"}
                </button>
              ))}
            </div>
          </div>

          {/* Status Section */}
          <div className="p-2">
            <h1 className="p-2">স্ট্যাটাস</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:w-5/6 text-sm">
              {["প্রসেসিং", "সাকসেস", "ফেইল", "অল"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  className={` py-2 lg:p-4 lg:py-6 border  rounded  ${
                    selectedStatus === status
                      ? "text-white border-[#26ffbc]"
                      : ""
                  }`}
                >
                  {status} {selectedStatus === status && "✔️"}
                </button>
              ))}
            </div>
          </div>

          {/* Date Section */}
          <div className="p-2">
            <h1 className="p-2">তারিখ</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:w-5/6 text-sm">
              {["আজ", "গতকাল", "শেষ 7 দিন"].map((date) => (
                <button
                  key={date}
                  onClick={() => handleDateClick(date)}
                  className={`py-2 lg:p-4 lg:py-6 border  rounded  ${
                    selectedDate === date ? "text-white border-[#26ffbc]" : ""
                  }`}
                >
                  {date} {selectedDate === date && "✔️"}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="bg-zinc-400 hover:bg-green-700 text-white p-2 m-4 rounded-md px-4 transition duration-300">
                সাবমিট করুন
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* table area */}
      <div className="bg-[#363838] p-4 text-white rounded-md mt-4">
        <div>
          <h1 className="p-2">রেকর্ড</h1>
        </div>
        <div>
          <DynamicTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Transection;
