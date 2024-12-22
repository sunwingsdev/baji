const GameCategories = () => {
  return (
    <div className="m-4 bg-gray-100 min-h-screen">
      <h1 className="text-center p-4 bg-gradient-to-r from-green-500 to-green-700 text-white text-2xl font-bold rounded-t-lg">
        Game Categories
      </h1>
      <div className="w-3/4 mx-auto my-6 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
          Create Game Categories
        </h2>
        <div className="flex justify-between space-x-6">
          {/* Main Categories */}
          <div className="w-1/2">
            <h3 className="bg-green-600 text-white p-3 rounded-md flex justify-between items-center font-medium">
              Main Categories
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded-md">
                Add+
              </button>
            </h3>
            {["casino", "slot", "table", "fishing"].map((category) => (
              <div
                key={category}
                className="flex items-center p-4 my-3 border rounded-lg shadow-sm hover:shadow-md"
              >
                <img
                  className="w-10 h-10 mr-4 rounded-full"
                  src="https://play-lh.googleusercontent.com/bPGq9LguGXjRyX_rYuemvQtSGpcUr4hXWBZ3uBLRXJzrnV2ueJHMS3SYtcSSPtDR-K0=w526-h296-rw"
                  alt={category}
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {category}
                </h4>
              </div>
            ))}
          </div>

          {/* Sub Categories */}
          <div className="w-1/2">
            <h3 className="bg-green-600 text-white p-3 rounded-md flex justify-between items-center font-medium">
              Sub Categories
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded-md">
                Add+
              </button>
            </h3>
            {["jili", "PG soft", "Fa chai"].map((subCategory) => (
              <div
                key={subCategory}
                className="flex justify-between items-center p-4 my-3 border rounded-lg shadow-sm hover:shadow-md"
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {subCategory}
                </h4>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://p1.hiclipart.com/preview/884/768/968/3d-cartoon-icons-iii-windows-stand-by-push-button-png-clipart.jpg"
                  alt={subCategory}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCategories;
