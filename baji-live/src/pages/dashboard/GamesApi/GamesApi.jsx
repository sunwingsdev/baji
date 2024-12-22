import { useState } from "react";

const GamesApi = () => {
  const [selectedButton, setSelectedButton] = useState(true);

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-500 p-2 rounded-md shadow-lg  mx-auto">
      <h1 className="text-center text-3xl font-semibold text-white mb-8">
        Games API Key
      </h1>

      <div className="bg-white rounded-lg p-6 shadow-xl">
        <h2 className="text-center text-2xl font-semibold text-[#14815f] mb-6">
          Sports Live TV
        </h2>

        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <button
            onClick={() => setSelectedButton("apiSetup")}
            className={`px-6 py-3 rounded-full text-xl font-semibold transition duration-300 ease-in-out ${
              selectedButton === "apiSetup"
                ? "bg-[#59be7b] text-white shadow-lg transform scale-105"
                : "bg-white text-[#14815f] border border-[#14815f] hover:bg-[#14815f] hover:text-white"
            }`}
          >
            API Setup
          </button>
          <button
            onClick={() => setSelectedButton("generateGame")}
            className={`px-6 py-3 rounded-full text-xl font-semibold transition duration-300 ease-in-out ${
              selectedButton === "generateGame"
                ? "bg-[#59be7b] text-white shadow-lg transform scale-105"
                : "bg-white text-[#14815f] border border-[#14815f] hover:bg-[#14815f] hover:text-white"
            }`}
          >
            Generate Game
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label htmlFor="apiKey" className="text-gray-700 font-semibold">
                API Key
              </label>
              <input
                type="text"
                id="apiKey"
                placeholder="Enter API Key"
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
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
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
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
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />
            </div>

            <div className="space-y-4">
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
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />

              <label htmlFor="download" className="text-gray-700 font-semibold">
                Game file
              </label>
              <button
                type="button"
                className="w-full bg-[#59be7b] text-white px-6 py-3 rounded-md hover:bg-[#146148] transition duration-300"
              >
                Game file upload
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
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#59be7b] text-white py-3 rounded-md hover:bg-[#d3562a] transition duration-300"
          >
            Save API
          </button>
        </form>
      </div>
    </div>
  );
};

export default GamesApi;
