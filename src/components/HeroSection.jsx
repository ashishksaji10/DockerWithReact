export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="w-full min-h-[300px] md:h-112.5 bg-cover bg-center flex items-center py-10 md:py-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=100')",
        }}
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          
          {/* Sidebar - Visible only on large screens */}
          <div className="hidden lg:block w-64 mr-8 shrink-0">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-yellow-400 px-4 py-3 font-semibold">
                ☰ All Departments
              </div>
              <ul className="text-sm text-gray-700">
                {[
                  "Value of the Day",
                  "Top 100 Offers",
                  "New Arrivals",
                  "Computers & Accessories",
                  "Cameras, Audio & Video",
                  "Mobiles & Tablets",
                  "TV & Audio",
                  "Watches & Eyewear",
                  "Accessories",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-3 border-b hover:bg-gray-50 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col justify-center text-gray-800 max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              THE NEW <br />
              <span className="font-semibold text-4xl sm:text-5xl md:text-6xl">STANDARD</span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base uppercase tracking-wider">
              Under Favorable Smartwatches
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
              <span className="text-gray-700 text-sm md:text-base">FROM</span>
              <span className="text-3xl md:text-4xl font-bold text-red-600">
                $749
              </span>
            </div>

            <button className="mt-8 bg-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all shadow-md hover:shadow-lg w-fit mx-auto lg:mx-0">
              Start Buying
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}