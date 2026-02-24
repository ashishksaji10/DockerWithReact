import {
  FaSearch,
  FaHeart,
  FaSyncAlt,
  FaShoppingBag,
  FaBars,
} from "react-icons/fa";

export default function MainHeader() {
  return (
    <header className="border-b">

      
      <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-6 flex-wrap">


        <h1 className="text-3xl font-bold text-gray-800">
          electro<span className="text-yellow-400">.</span>
        </h1>


        <div className="flex flex-1 max-w-3xl border-2 border-yellow-400 rounded-full overflow-hidden">

          <input
            type="text"
            placeholder="Search for Products"
            className="flex-1 px-6 py-3 focus:outline-none"
          />

          <select className="hidden md:block px-4 border-l bg-white text-sm focus:outline-none">
            <option>All Categories</option>
            <option>Laptops</option>
            <option>Mobiles</option>
            <option>Cameras</option>
          </select>

          <button className="bg-yellow-400 px-6 flex items-center justify-center">
            <FaSearch />
          </button>

        </div>


        <div className="flex items-center gap-6 text-gray-700 text-lg">

          <FaSyncAlt className="cursor-pointer hover:text-yellow-500" />
          <FaHeart className="cursor-pointer hover:text-yellow-500" />

          <div className="flex items-center gap-2 cursor-pointer">
            <FaShoppingBag />
            <span className="font-semibold">$1785.00</span>
          </div>

        </div>
      </div>
    </header>
  );
}