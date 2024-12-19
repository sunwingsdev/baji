import { useState } from "react";

const GamesApi = () => {
  const [selectedButton, setSelectedButton] = useState(true); // Track selected button but does not conditionally render

  return (
    <div className="bg-gray-400 p-6 rounded-md">
      <h1 className="text-center bg-[#14815f] text-2xl font-bold text-white p-4 rounded-md mb-6">
        Games API Key
      </h1>
      <div className="w-full lg:w-2/3 mx-auto">
        <div className="bg-[#14815f] rounded-md mb-6 p-4">
          <h2 className="text-center text-xl text-white font-semibold mb-4">
            Sports Live TV
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setSelectedButton("apiSetup")}
              className={`px-4 py-2 rounded-md hover:bg-gray-700 ${
                selectedButton === "apiSetup"
                  ? " text-white bg-[#146148]"
                  : "bg-white text-[#14815f]"
              }`}
            >
              API Setup
            </button>
            <button
              onClick={() => setSelectedButton("generateGame")}
              className={`px-4 py-2 rounded-md hover:bg-gray-700 ${
                selectedButton === "generateGame"
                  ? " text-white bg-[#146148]"
                  : "bg-white text-[#14815f]"
              }`}
            >
              Generate Game
            </button>
          </div>
        </div>
        <form className="bg-white p-4 rounded-md shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="apiKey" className="text-gray-700 font-semibold">
                API Key
              </label>
              <input
                type="text"
                id="apiKey"
                placeholder="Enter API Key"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#14815f]"
              />
              <label
                htmlFor="licenseKey"
                className="text-gray-700 font-semibold"
              >
                License Key
              </label>
              <input
                type="text"
                id="licenseKey"
                placeholder="Enter License Key"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#14815f]"
              />
              <label
                htmlFor="gameProviderKey"
                className="text-gray-700 font-semibold"
              >
                Game Provider Key
              </label>
              <input
                type="text"
                id="gameProviderKey"
                placeholder="Enter Game Provider Key"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#14815f]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="providerIp"
                className="text-gray-700 font-semibold"
              >
                Provider IP
              </label>
              <input
                type="text"
                id="providerIp"
                placeholder="Enter Provider IP"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#14815f]"
              />
              <label htmlFor="download" className="text-gray-700 font-semibold">
                Download
              </label>
              <button
                type="button"
                className="bg-[#14815f] text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Download
              </button>
              <label
                htmlFor="secretPin"
                className="text-gray-700 font-semibold"
              >
                Secret Pin
              </label>
              <input
                type="text"
                id="secretPin"
                placeholder="Enter Secret Pin"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#14815f]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="p-4 bg-[#e95f35] text-white py-2 rounded-md hover:bg-green-700"
          >
            Save API
          </button>
        </form>
      </div>
    </div>
  );
};

export default GamesApi;
