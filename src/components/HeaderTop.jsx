import { FaUser, FaTruck, FaDollarSign } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function HeaderTop() {
  return (
    <div className="text-black text-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2">
          
          <div className="text-center md:text-left mb-2 md:mb-0">
            <span className="hidden sm:inline">
              Welcome to Worldwide Electronics Store
            </span>
          </div>

          <div className="flex justify-center md:justify-end items-center 
                          divide-x divide-gray-300 
                          md:divide-x 
                          text-xs sm:text-sm">

            <span className="flex items-center px-3 py-1 hover:text-blue-600 cursor-pointer">
              <FaLocationPin className="mr-2" />
              <span className="hidden sm:inline">Store Locator</span>
            </span>

            <span className="hidden sm:flex items-center px-3 py-1 hover:text-blue-600 cursor-pointer">
              <FaTruck className="mr-2" />
              Track Your Order
            </span>

            <span className="hidden md:flex items-center px-3 py-1 hover:text-blue-600 cursor-pointer">
              <FaDollarSign className="mr-2" />
              Dollar (US)
            </span>

            <span className="flex items-center px-3 py-1 hover:text-blue-600 cursor-pointer">
              <FaUser className="mr-2" />
              <span className="hidden sm:inline">Register</span>
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}