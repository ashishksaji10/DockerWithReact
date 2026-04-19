import { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaSyncAlt,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between gap-4 md:gap-6">
        
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 shrink-0">
          Strike<span className="text-yellow-400">.</span>
        </h1>

        {/* Search Bar - Hidden on extra small, shown on sm+ */}
        <div className="hidden sm:flex flex-1 max-w-3xl border-2 border-yellow-400 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search for Products"
            className="flex-1 px-4 md:px-6 py-2 md:py-3 focus:outline-none text-sm md:text-base"
          />
          <select className="hidden lg:block px-4 border-l bg-white text-sm focus:outline-none cursor-pointer">
            <option>All Categories</option>
            <option>Laptops</option>
            <option>Mobiles</option>
            <option>Cameras</option>
          </select>
          <button className="bg-yellow-400 px-4 md:px-6 flex items-center justify-center hover:bg-yellow-500 transition">
            <FaSearch />
          </button>
        </div>

        {/* Icons & Actions */}
        <div className="flex items-center gap-3 md:gap-6 text-gray-700">
          <div className="hidden md:flex items-center gap-4 text-lg">
            <FaSyncAlt className="cursor-pointer hover:text-yellow-500 transition" title="Compare" />
            <FaHeart className="cursor-pointer hover:text-yellow-500 transition" title="Wishlist" />
          </div>

          <div className="flex items-center gap-2 cursor-pointer bg-gray-100 md:bg-transparent p-2 md:p-0 rounded-full">
            <FaShoppingBag className="text-xl md:text-lg" />
            <span className="font-semibold text-sm md:text-base hidden xs:inline">$1785.00</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar - Shown only on extra small */}
      <div className="sm:hidden px-4 pb-4">
        <div className="flex border-2 border-yellow-400 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-2 focus:outline-none text-sm"
          />
          <button className="bg-yellow-400 px-4 flex items-center justify-center">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-4 font-medium">
            <a href="#" className="hover:text-yellow-500 transition border-b pb-2">Home</a>
            <a href="#" className="hover:text-yellow-500 transition border-b pb-2">Shop</a>
            <a href="#" className="hover:text-yellow-500 transition border-b pb-2">Categories</a>
            <a href="#" className="hover:text-yellow-500 transition border-b pb-2">Deals</a>
            <a href="#" className="hover:text-yellow-500 transition">Contact</a>
          </nav>
          <div className="flex gap-6 pt-2 text-xl text-gray-600 justify-center">
            <FaSyncAlt className="cursor-pointer hover:text-yellow-500" />
            <FaHeart className="cursor-pointer hover:text-yellow-500" />
          </div>
        </div>
      )}
    </header>
  );
}