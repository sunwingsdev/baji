import ExchangeDynamicTable from "./ExchangeDynamicTable";

const ExchangeHomeTabContent = () => {
  const tableData = [
    {
      onlineStatus: "online", // Represents the online status icon
      teams: "Multan Sultan SRL T20 v Islamabad United SRL T20",
      link: "/multan-v-islamabad",
      status: "in-play",
      action: "live",
      category: "e-cricket",
      tag: "P",
      amount: "BDT0",
      values: ["--", "--", "--", "--", "--", "--"],
    },
    {
      onlineStatus: "offline", // Represents the upcoming status icon
      teams: "South Africa v Pakistan",
      link: "/sa-v-pak",
      status: "Starting in 1 min",
      action: "",
      category: "E Cricket",
      tag: "P",
      amount: "BDT120",
      values: ["1.30", "--", "1.50", "--", "2.00", "--"],
    },
    {
      onlineStatus: "offline", // Represents the upcoming status icon
      teams: "Zimbabwe v Afghanistan",
      link: "/zim-v-afg",
      status: "Tomorrow 00:00",
      action: "",
      category: "E Cricket",
      tag: ["F", "B"], // Multiple tags if needed
      amount: "BDT120",
      values: ["1.30", "--", "1.50", "--", "2.00", "--"],
    },
  ];

  return (
    <div className="overflow-x-auto bg-white">
      <div className="bg-[#dddcd6] flex flex-row items-center justify-center gap-20">
        <p className="w-1/2 text-right">Matched</p>
        <p className="flex flex-row items-center justify-between w-1/3">
          <span>1</span> <span>X</span> <span>2</span>
        </p>
      </div>
      <ExchangeDynamicTable tableData={tableData} />
    </div>
  );
};

export default ExchangeHomeTabContent;
