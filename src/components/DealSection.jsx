import { FaShoppingCart } from "react-icons/fa";

export default function DealsSection() {
  const products = [
    {
      name: "Wireless Audio System",
      price: "$685,00",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTimua2jpgfbGKtYpcj4or5RZhf5fvF2RUBtcGdZ9YE_cA6qT4YCmERt4KI4I2Q2_KAFsW0JWu-3DiHf-xoEFtdn_YAPlGBPKraBtEE0jHrzxz7_xlaIhoejGA",
    },
    {
      name: "Tablet White EliteBook",
      price: "$1999,00",
      old: "$2,299.00",
      img: "https://pngimg.com/uploads/laptop/laptop_PNG101816.png",
    },
    {
      name: "Purple Solo 2 Wireless",
      price: "$685,00",
      img: "https://pngimg.com/uploads/headphones/headphones_PNG7645.png",
    },
    {
      name: "Smartphone 6S 32GB LTE",
      price: "$685,00",
      img: "https://computechrdc.com/wp-content/uploads/2023/11/Mobile-2.png",
    },
    {
      name: "Widescreen NX Mini F1",
      price: "$685,00",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhRoRVAke1lFwO3Rvw8FnB0NJeM9EpGLQHcruArt1_TibYR6me3shY82430f0KIDjswaReWQTneVfj3sO4RXolmxKcbkAjCTTNkZr1sraflaGtHkvAK_eKsw",
    },
    {
      name: "Full Color LaserJet Pro",
      price: "$685,00",
      img: "https://pngimg.com/uploads/printer/printer_PNG7741.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 md:py-14">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT SPECIAL OFFER ================= */}
        <div className="w-full lg:w-80 bg-white border-2 border-yellow-400 rounded-2xl p-6 relative">

          {/* Save Badge */}
          <div className="absolute top-6 right-6 bg-yellow-400 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-center text-xs md:text-sm font-bold shadow-md z-10">
            Save <br /> $120
          </div>

          <h3 className="text-xl font-semibold mb-6">
            Special <br className="hidden lg:block" /> Offer
          </h3>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center">
            <img
              src="https://pngimg.com/uploads/xbox/xbox_PNG101376.png"
              alt="Game Controller"
              className="h-48 object-contain mb-4 sm:mb-0 lg:mb-4"
            />

            <div className="flex-1 lg:w-full text-center sm:text-left lg:text-center">
              <p className="text-blue-600 font-semibold mt-2">
                Game Console Controller <br className="hidden lg:block" /> + USB 3.0 Cable
              </p>

              <div className="mt-2">
                <span className="line-through text-gray-400 mr-2">$99,00</span>
                <span className="text-red-500 text-2xl font-bold">$79,00</span>
              </div>

              {/* Progress */}
              <div className="mt-6 w-full max-w-xs mx-auto sm:mx-0 lg:mx-auto">
                <div className="flex justify-between text-xs md:text-sm text-gray-600">
                  <span>Available: 6</span>
                  <span>Sold: 28</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div className="h-2 bg-yellow-400 w-1/3 rounded-full shadow-inner"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="text-center mt-8 border-t pt-6">
            <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wide">
              Hurry Up! Offer ends in:
            </p>
            <div className="flex justify-center gap-3 md:gap-4 mt-4">
              {[
                { label: "HRS", val: "00" },
                { label: "MINS", val: "00" },
                { label: "SECS", val: "00" }
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-gray-100 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg text-lg font-bold">
                    {t.val}
                  </div>
                  <span className="text-[10px] mt-1 text-gray-400 font-medium">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT PRODUCTS ================= */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-6 md:gap-8 border-b mb-8">
            <span className="font-semibold border-b-2 border-yellow-400 pb-2 whitespace-nowrap">
              Featured
            </span>
            <span className="text-gray-500 cursor-pointer whitespace-nowrap hover:text-yellow-500 transition">
              On Sale
            </span>
            <span className="text-gray-500 cursor-pointer whitespace-nowrap hover:text-yellow-500 transition">
              Top Rated
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-xl hover:shadow-xl transition-all duration-300 relative group flex flex-col h-full"
              >
                <div className="h-40 flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="mt-4 flex-1">
                  <p className="text-blue-600 font-semibold text-sm md:text-base line-clamp-2 hover:text-blue-800 cursor-pointer transition">
                    {product.name}
                  </p>

                  <div className="mt-2 flex items-center">
                    {product.old && (
                      <span className="line-through text-gray-400 text-xs md:text-sm mr-2">
                        {product.old}
                      </span>
                    )}
                    <span className="font-bold text-gray-800 md:text-lg">
                      {product.price}
                    </span>
                  </div>
                </div>

                <button 
                  className="absolute bottom-4 right-4 bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition shadow-md hover:shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300"
                  aria-label="Add to cart"
                >
                  <FaShoppingCart />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}