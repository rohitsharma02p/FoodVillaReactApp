import { FaWifi } from "react-icons/fa";

const OfflinePopup = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-4 animate-pulse">
        <FaWifi className="text-red-600 text-3xl" />
        <div>
          <h1 className="text-xl font-bold text-red-600">
            Oops! You're Offline
          </h1>
          <p className="mt-1">Please check your internet connection.</p>
        </div>
      </div>
    </div>
  );
};

export default OfflinePopup;
