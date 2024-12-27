import { FaChrome } from "react-icons/fa";
import { IoLogoFirefox } from "react-icons/io5";
import kvImg from "../../assets/KV.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ExchangeHomeTabContent from "./ExchangeHomeTabContent";

const ExchangeMiddleContent = () => {
  return (
    <>
      <div className="">
        <img className="w-full h-72" src={kvImg} alt="" />
      </div>
      <div className="bg-[#179970]">
        <div className="flex flex-row items-center justify-between py-1 px-2">
          <p className="text-white text-lg font-bold">Sports Highlights</p>
          <div className="flex flex-row gap-2 text-white">
            <p>View by</p>
            <select className="rounded-md bg-[#179970] border border-white">
              <option value="compitition">Compitition</option>
              <option value="time">Time</option>
              <option value="matched">Matched</option>
            </select>
          </div>
        </div>
        <Tabs>
          <TabList className="flex flex-row flex-wrap gap-2 px-2">
            <Tab
              className="bg-[#333333] text-white hover:underline cursor-pointer px-10 rounded-t-md outline-none"
              selectedClassName="bg-[#dddcd6] text-[#000000] hover:no-underline"
            >
              Cricket
            </Tab>
            <Tab
              className="bg-[#333333] text-white hover:underline cursor-pointer px-10 rounded-t-md outline-none"
              selectedClassName="bg-[#dddcd6] text-[#000000] hover:no-underline"
            >
              Soccer
            </Tab>
            <Tab
              className="bg-[#333333] text-white hover:underline cursor-pointer px-10 rounded-t-md outline-none"
              selectedClassName="bg-[#dddcd6] text-[#000000] hover:no-underline"
            >
              Tennis
            </Tab>
            <Tab
              className="bg-[#333333] text-white hover:underline cursor-pointer px-10 rounded-t-md outline-none"
              selectedClassName="bg-[#dddcd6] text-[#000000] hover:no-underline"
            >
              E-Soccer
            </Tab>
            <Tab
              className="bg-[#333333] text-white hover:underline cursor-pointer px-10 rounded-t-md outline-none"
              selectedClassName="bg-[#dddcd6] text-[#000000] hover:no-underline"
            >
              Kabaddi
            </Tab>
            <Tab
              className="bg-[#333333] text-white hover:underline cursor-pointer px-10 rounded-t-md outline-none"
              selectedClassName="bg-[#dddcd6] text-[#000000] hover:no-underline"
            >
              Election
            </Tab>
          </TabList>

          <TabPanel>
            <ExchangeHomeTabContent />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
      <div className="mt-8">
        <div className="flex gap-1 w-12 m-auto text-gray-400">
          <FaChrome size={20} />
          <IoLogoFirefox size={20} />
        </div>
        <p className="text-center w-[600px] m-auto">
          Our website works best in the newest and last prior version of these
          browsers: Google Chrome. Firefox
        </p>
      </div>
    </>
  );
};

export default ExchangeMiddleContent;
