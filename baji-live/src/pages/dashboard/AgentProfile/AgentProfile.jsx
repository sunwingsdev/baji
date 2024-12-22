import { useState } from "react";

const AgentProfile = () => {
  const [selectedSection, setSelectedSection] = useState("userInfo"); // Track selected section
  const balances = [
    { label: "Main Balance", value: "500 BDT" },
    { label: "Deposit Balance", value: "800 BDT" },
    { label: "Withdraw Balance", value: "1000 BDT" },
    { label: "Support Pin", value: "123456" },
  ];
  return (
    <div className="bg-gray-100 min-h-screen p-2">
      <h1 className="text-center bg-gradient-to-r from-green-300 to-green-600 text-3xl font-bold text-white p-4 rounded-md shadow-md mb-6">
        Agent Profile
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Left Section */}
        <div className="bg-white w-full lg:w-2/3 rounded-lg shadow-lg p-2 text-nowrap text-center">
          <div className="mb-6">
            <h1 className="text-gray-800 font-bold text-xl mb-2">
              Agent Name: Ariz
            </h1>
            <p className="text-gray-500">User ID: 123456</p>
          </div>

          <div className="flex flex-col items-center mb-6">
            <img
              className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-green-500"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllDBTiHV4Veq0xQSP0P-d1Yui4Ch_Yx3apQ&s"
              alt="User Avatar"
            />
            <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600">
              Upload New Photo
            </button>
          </div>

          {/* Balance Section */}
          <div className="space-y-4">
            {balances.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
              >
                <p className="text-gray-600 font-semibold">{item.label}</p>
                <p className="text-green-600 font-bold ml-2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full lg:w-2/3 rounded-lg shadow-lg p-6">
          <h2 className="text-center text-xl text-gray-800 font-semibold mb-6">
            Edit Agent Profile
          </h2>

          <div className="flex sm:flex-row flex-col justify-center gap-2 mb-6 text-nowrap">
            <button
              onClick={() => setSelectedSection("userInfo")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "userInfo"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              User Info
            </button>
            <button
              onClick={() => setSelectedSection("transactionHistory")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "transactionHistory"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Transaction History
            </button>
            <button
              onClick={() => setSelectedSection("kycUpdate")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "kycUpdate"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              KYC Update
            </button>
          </div>

          {selectedSection === "userInfo" && (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-all"
              >
                Update Info
              </button>
            </form>
          )}

          {selectedSection === "transactionHistory" && (
            <div className="text-center text-gray-600">
              No transactions available.
            </div>
          )}

          {selectedSection === "kycUpdate" && (
            <div className="text-center text-gray-600">
              Submit your documents for KYC verification.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
