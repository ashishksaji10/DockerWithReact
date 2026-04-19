import { FaUser, FaTruck, FaDollarSign } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function HeaderTop() {
  return (
    <div className="text-gray-600 text-xs md:text-sm border-b border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-0">
          
          <div className="text-center sm:text-left">
            <span className="hidden lg:inline">
              Welcome to Worldwide Electronics Store
            </span>
            <span className="lg:hidden">
              Free shipping on orders over $100!
            </span>
          </div>

          <div className="flex items-center divide-x divide-gray-200">

            <span className="flex items-center px-3 py-1 hover:text-blue-600 cursor-pointer transition">
              <FaLocationPin className="mr-2 text-blue-500" />
              <span className="hidden xs:inline">Store Locator</span>
            </span>

            <span className="hidden sm:flex items-center px-3 py-1 hover:text-blue-600 cursor-pointer transition">
              <FaTruck className="mr-2 text-blue-500" />
              Track Order
            </span>

            <span className="hidden md:flex items-center px-3 py-1 hover:text-blue-600 cursor-pointer transition">
              <FaDollarSign className="mr-2 text-blue-500" />
              USD
            </span>

            <span className="flex items-center px-3 py-1 hover:text-blue-600 cursor-pointer transition font-medium">
              <FaUser className="mr-2 text-blue-500" />
              <span>Login / Register</span>
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}