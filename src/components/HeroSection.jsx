export default function HeroSection() {
  return (
    <section className="relative">

      <div
        className="w-full h-112.5 bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=100')",
        }}
      >

        <div className="container mx-auto px-4 flex">


          <div className="hidden lg:block w-64 mr-8">
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
                    className="px-4 py-3 border-b hover:bg-gray-50 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>



          <div className="flex flex-col justify-center text-gray-800 max-w-xl">
            <h2 className="text-5xl font-light">
              THE NEW <br />
              <span className="font-semibold">STANDARD</span>
            </h2>

            <p className="mt-4 text-gray-600">
              UNDER FAVORABLE SMARTWATCHES
            </p>

            <p className="mt-6 text-gray-700">
              FROM{" "}
              <span className="text-4xl font-bold">
                $749
              </span>
            </p>

            <button className="mt-6 bg-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
              Start Buying
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}