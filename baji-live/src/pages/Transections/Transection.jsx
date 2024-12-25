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
    <div>
      <WalletSection></WalletSection>
      <div className="bg-[#363838] p-2 text-white rounded-md">
        <div className="border-b-2 border-green-300">
          <h1 className="p-2 text-green-300 ">ট্রানজেকশন</h1>
        </div>
        <div>
          {/* Type Section */}
          <div className="p-2">
            <h1 className="p-2">টাইপ</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {["ডিপোজিট", "উইথড্র", "অ্যাডজাস্টমেন্ট", "অল"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeClick(type)}
                  className={`p-2 border border-lime-200 rounded  ${
                    selectedType === type ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {type} {selectedType === type && "✔️"}
                </button>
              ))}
            </div>
          </div>

          {/* Status Section */}
          <div className="mt-2 p-2">
            <h1 className="p-2">স্ট্যাটাস</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {["প্রসেসিং", "সাকসেস", "ফেইল", "অল"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  className={`p-2 border border-lime-200 rounded ${
                    selectedStatus === status ? "bg-green-500 text-white" : ""
                  }`}
                >
                  {status} {selectedStatus === status && "✔️"}
                </button>
              ))}
            </div>
          </div>

          {/* Date Section */}
          <div className="mt-2 p-2">
            <h1 className="p-2">তারিখ</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              {["আজ", "গতকাল", "শেষ 7 দিন"].map((date) => (
                <button
                  key={date}
                  onClick={() => handleDateClick(date)}
                  className={`p-2 border border-lime-200 rounded ${
                    selectedDate === date ? "bg-purple-500 text-white" : ""
                  }`}
                >
                  {date} {selectedDate === date && "✔️"}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="bg-zinc-400 hover:bg-zinc-600 text-white p-2 m-4 rounded-md px-4 transition duration-300">
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
