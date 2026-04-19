import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaGithub,
  FaHeadphones,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Newsletter Section */}
      <div className="bg-yellow-400 py-10 md:py-8">
        <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-black text-center md:text-left">
            <div className="bg-white/20 p-4 rounded-full">
              <FiSend size={32} />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-bold">
                Sign up to Newsletter
              </h3>
              <p className="text-sm md:text-base opacity-90">
                ...and receive{" "}
                <span className="font-bold underline decoration-2 decoration-black/20">
                  $20 coupon
                </span>{" "}
                for first shopping.
              </p>
            </div>
          </div>

          <div className="w-full xl:w-auto">
            <div className="flex flex-col sm:flex-row w-full xl:w-[500px] gap-2 sm:gap-0 bg-transparent sm:bg-white sm:rounded-full overflow-hidden shadow-md sm:shadow-sm">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 px-6 py-4 sm:py-3 bg-white rounded-full sm:rounded-none text-gray-700 focus:outline-none"
              />
              <button className="bg-gray-900 text-white px-10 py-4 sm:py-3 rounded-full sm:rounded-none font-bold hover:bg-black transition-all hover:px-12">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand & Contact */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Strike<span className="text-yellow-500">.</span>
              </h2>

              <div className="flex items-start gap-4 text-gray-600">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <FaHeadphones className="text-yellow-500 text-2xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Got questions? Call 24/7!
                  </p>
                  <p className="text-lg font-bold text-gray-800 mt-1">
                    (800) 0000-9988
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-bold text-gray-800">Contact info</p>
                <p className="leading-relaxed">
                  17 LL Road, London, NW1 8JR, UK
                </p>
              </div>

              <div className="flex gap-4 text-white">
                {[FaFacebookF, FaTwitter, FaGoogle, FaGithub].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-gray-400 w-9 h-9 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links 1 */}
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-6 border-b-2 border-yellow-400 w-fit pb-1">
                Find it Fast
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                {[
                  "Laptops & Computers",
                  "Cameras & Photography",
                  "Smart Phones & Tablets",
                  "Video Games & Consoles",
                  "TV & Audio",
                  "Gadgets",
                  "Car Electronic & GPS",
                ].map((link) => (
                  <li
                    key={link}
                    className="hover:text-yellow-600 hover:translate-x-1 transition-all cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div className="lg:pt-12">
              <ul className="space-y-3 text-gray-600 text-sm">
                {[
                  "Printers & Ink",
                  "Software",
                  "Office Supplies",
                  "Computer Components",
                  "Accessories",
                ].map((link) => (
                  <li
                    key={link}
                    className="hover:text-yellow-600 hover:translate-x-1 transition-all cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links 3 */}
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-6 border-b-2 border-yellow-400 w-fit pb-1">
                Customer Care
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                {[
                  "My Account",
                  "Order Tracking",
                  "Wish List",
                  "Customer Service",
                  "Returns / Exchange",
                  "FAQs",
                  "Product Support",
                ].map((link) => (
                  <li
                    key={link}
                    className="hover:text-yellow-600 hover:translate-x-1 transition-all cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-100 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            <span className="font-bold text-gray-800">Strike.</span>
          </p>

          <div className="flex items-center gap-6">
            <img
              src="https://img.icons8.com/?size=100&id=13608&format=png&color=000000"
              alt="Visa"
              className="h-5 grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-5 grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-5 grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
