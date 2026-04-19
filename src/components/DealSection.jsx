import { FaShoppingCart } from "react-icons/fa";

export default function DealsSection() {
  const products = [
    {
      name: "Wireless Audio System",
      price: "$685,00",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTimua2jpgfbGKtYpcj4or5RZhf5fvF2RUBtcGdZ9YE_cA6qT4YCmERt4KI4I2Q2_KAFsW0JWu-3DiHf-xoEFtdn_YAPlGBPKraBtEE0jHrzxz7_xlaIhoejGA",
      // img: "/1.svg",
    },
    {
      name: "Tablet White EliteBook",
      price: "$1999,00",
      old: "$2,299.00",
      img: "https://pngimg.com/uploads/laptop/laptop_PNG101816.png",
      // img: "/2.svg",
    },
    {
      name: "Purple Solo 2 Wireless",
      price: "$685,00",
      img: "https://pngimg.com/uploads/headphones/headphones_PNG7645.png",
      // img: "/3.svg",
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
    <section className="bg-gray-100 py-14">
      <div className="container mx-auto px-4 flex gap-8">

        {/* ================= LEFT SPECIAL OFFER ================= */}
        <div className="w-80 bg-white border-2 border-yellow-400 rounded-2xl p-6 relative">

          {/* Save Badge */}
          <div className="absolute top-6 right-6 bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center text-center text-sm font-bold">
            Save <br /> $120
          </div>

          <h3 className="text-xl font-semibold mb-6">
            Special <br /> Offer
          </h3>

          <img
            src="https://pngimg.com/uploads/xbox/xbox_PNG101376.png"
            alt="Game Controller"
            className="mx-auto h-48 object-contain"
          />

          <p className="text-blue-600 font-semibold text-center mt-4">
            Game Console Controller <br /> + USB 3.0 Cable
          </p>

          <div className="text-center mt-2">
            <span className="line-through text-gray-400 mr-2">$99,00</span>
            <span className="text-red-500 text-2xl font-bold">$79,00</span>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Available: 6</span>
              <span>Already Sold: 28</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mt-2">
              <div className="h-2 bg-yellow-400 w-1/3 rounded-full"></div>
            </div>
          </div>

          {/* Countdown */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Hurry Up! Offer ends in:
            </p>
            <div className="flex justify-center gap-4 mt-4">
              {["00", "00", "00"].map((t, i) => (
                <div key={i} className="bg-gray-100 px-4 py-3 rounded-lg text-lg font-semibold">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT PRODUCTS ================= */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-8 border-b mb-8">
            <span className="font-semibold border-b-2 border-yellow-400 pb-2">
              Featured
            </span>
            <span className="text-gray-500 cursor-pointer">
              On Sale
            </span>
            <span className="text-gray-500 cursor-pointer">
              Top Rated
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-xl transition relative group"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-40 mx-auto object-contain"
                />

                <p className="text-blue-600 font-semibold mt-4">
                  {product.name}
                </p>

                <div className="mt-2">
                  {product.old && (
                    <span className="line-through text-gray-400 mr-2">
                      {product.old}
                    </span>
                  )}
                  <span className="font-semibold">
                    {product.price}
                  </span>
                </div>

                <button className="absolute bottom-6 right-6 bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500">
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