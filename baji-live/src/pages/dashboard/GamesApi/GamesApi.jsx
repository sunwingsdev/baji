import { useState } from "react";
import { useToasts } from "react-toast-notifications";

const GamesApi = () => {
  const [formData, setFormData] = useState({
    apiKey: "",
    licenseKey: "",
    gameProviderKey: "",
    providerIp: "",
    secretPin: "",
    gameFile: null,
  });
  const { addToast } = useToasts();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData({ ...formData, gameFile: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for console log
    const dataToLog = { ...formData };
    if (formData.gameFile) {
      dataToLog.gameFile = formData.gameFile.name; // Log file name for simplicity
    }

    // console.log("Form Data:", dataToLog);
    addToast("Invalid api key", {
      appearance: "error",
      autoDismiss: true,
    });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-500 p-2 rounded-md shadow-lg mx-auto">
      <h1 className="text-center text-lg lg:text-3xl font-semibold mb-4">
        Games API Key
      </h1>

      <div className="bg-white rounded-lg p-6 shadow-xl">
        <h2 className="text-center text-2xl font-semibold text-[#14815f] mb-6">
          Sports Live TV
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <label
                htmlFor="apiKey"
                className="text-gray-700 font-semibold p-2"
              >
                API Key
              </label>
              <input
                type="text"
                id="apiKey"
                placeholder="Enter API Key"
                value={formData.apiKey}
                onChange={handleChange}
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
                value={formData.licenseKey}
                onChange={handleChange}
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
                value={formData.gameProviderKey}
                onChange={handleChange}
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
                value={formData.providerIp}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />

              <label htmlFor="gameFile" className="text-gray-700 font-semibold">
                Game file
              </label>
              <input
                type="file"
                id="gameFile"
                onChange={handleFileChange}
                className="w-full"
              />

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
                value={formData.secretPin}
                onChange={handleChange}
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
