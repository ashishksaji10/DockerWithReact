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


      <div className="bg-yellow-400 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
            <div className="flex items-center gap-4 text-black">
            <FiSend size={28} />

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <h3 className="text-xl font-semibold">
                    Sign up to Newsletter
                    </h3>

                    <p className="text-sm">
                    ...and receive{" "}
                    <span className="font-bold">
                        $20 coupon for first shopping.
                    </span>
                    </p>
                </div>
            </div>

            <div className="flex w-full md:w-auto">
                <div className="flex w-full md:w-96 bg-white rounded-full overflow-hidden shadow-sm">
                    
                    <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-6 py-3 bg-white text-gray-700 focus:outline-none"
                    />

                    <button className="bg-gray-800 text-white px-8 py-3 hover:bg-black transition">
                    Sign Up
                    </button>

                </div>
            </div>
        </div>
      </div>



      <div className="bg-gray-100 py-14">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">



          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Strike<span className="text-yellow-500">.</span>
            </h2>

            <div className="flex items-center gap-3 mt-6 text-gray-600">
              <FaHeadphones className="text-yellow-500 text-2xl" />
              <div>
                <p className="text-sm">Got questions? Call us 24/7!</p>
                <p className="text-lg font-semibold">
                  (800) 0000-9988, (0000) 222 000
                </p>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p className="font-semibold">Contact info</p>
              <p>
                17 LL Road, London, Greater Dilwa NW1 8JR, Russia
              </p>
            </div>

            <div className="flex gap-4 mt-6 text-gray-500">
              <FaFacebookF className="hover:text-black cursor-pointer" />
              <FaGoogle className="hover:text-black cursor-pointer" />
              <FaTwitter className="hover:text-black cursor-pointer" />
              <FaGithub className="hover:text-black cursor-pointer" />
            </div>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-4">Find it Fast</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>TV & Audio</li>
              <li>Gadgets</li>
              <li>Car Electronic & GPS</li>
            </ul>
          </div>



          <div className="md:mt-10">
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Printers & Ink</li>
              <li>Software</li>
              <li>Office Supplies</li>
              <li>Computer Components</li>
              <li>Accessories</li>
            </ul>
          </div>



          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Wish List</li>
              <li>Customer Service</li>
              <li>Returns / Exchange</li>
              <li>FAQs</li>
              <li>Product Support</li>
            </ul>
          </div>

        </div>
      </div>


      <div className="bg-white border-t py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          
          <p></p>

        <div className="flex gap-4 mt-3 md:mt-0 items-center">

            <img
                src="https://img.icons8.com/?size=100&id=13608&format=png&color=000000"
                alt="Visa"
                className="h-6 object-contain"
            />

            <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-6 object-contain"
            />

            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-6 object-contain"
            />

        </div>

        </div>
      </div>

    </footer>
  );
}