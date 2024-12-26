import WalletSection from "@/components/home/WalletSection/WalletSection";
import DynamicTable from "@/components/shared/tables/DynamicTable";
import { useState } from "react";
import { FcOk } from "react-icons/fc";

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
          <div className="">
            <h1 className="p-2">টাইপ</h1>
            <div className="flex items-center gap-4 text-sm">
              {["ডিপোজিট", "উইথড্র", "অ্যাডজাস্টমেন্ট", "অল"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeClick(type)}
                  className={`relative px-4 py-2 border rounded hover:border-[#ffe43c] ${
                    selectedType === type ? " text-white border-[#ffe43c]" : ""
                  }`}
                >
                  {type}{" "}
                  <span className="absolute top-0 right-0">
                    {selectedType === type && (
                      <FcOk className="absolute -top-2 -right-2 text-xl" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Status Section */}
          <div className="">
            <h1 className="p-2">স্ট্যাটাস</h1>
            <div className="flex items-center gap-4 text-sm">
              {["প্রসেসিং", "সাকসেস", "ফেইল", "অল"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  className={`relative px-4 py-2 border rounded hover:border-[#ffe43c] ${
                    selectedStatus === status
                      ? "text-white border-[#ffe43c]"
                      : ""
                  }`}
                >
                  {status}{" "}
                  <span className="absolute top-0 right-0">
                    {selectedStatus === status && (
                      <FcOk className="absolute -top-2 -right-2 text-xl" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Date Section */}
          <div className="">
            <h1 className="p-2">তারিখ</h1>
            <div className="flex items-center gap-4 text-sm">
              {["আজ", "গতকাল", "শেষ 7 দিন"].map((date) => (
                <button
                  key={date}
                  onClick={() => handleDateClick(date)}
                  className={`relative px-4 py-2 border rounded hover:border-[#ffe43c] ${
                    selectedDate === date ? "text-white border-[#ffe43c]" : ""
                  }`}
                >
                  {date}{" "}
                  <span className="absolute top-0 right-0">
                    {selectedDate === date && (
                      <FcOk className="absolute -top-2 -right-2 text-xl" />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex justify-end ">
              <button className="text-xs px-2 py-1 bg-[#3356cd]">
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
