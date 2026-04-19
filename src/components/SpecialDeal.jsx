import { FiArrowRight } from "react-icons/fi";

export default function SpecialDeal() {
  const cards = [
    {
      title: "Catch Big Deals on Camera",
      subtitle: "Up to 40% Off",
      image:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SX300_SY300_QL70_FMwebp_.jpg",
      color: "bg-blue-50",
    },
    {
      title: "Latest Smart Watch",
      subtitle: "Starting $199",
      image: "https://pngimg.com/uploads/watches/watches_PNG9884.png",
      color: "bg-blue-50",
    },
    {
      title: "Wireless Headphones",
      subtitle: "Flat 30% Off",
      image: "https://pngimg.com/uploads/headphones/headphones_PNG101967.png",
      color: "bg-blue-50",
    },
    {
      title: "Gaming Accessories",
      subtitle: "Hot Deals",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcYR4iCaNd4NaId-pcOM77lbySO1udbV6NCYBHwQLKuQSrEDNjbXuQJyr99gjEbmJg6gUNKRUy_kw3_iCz90-9o6oZzxvQVaKPV595Ccm8NvzyjeNN7prNng",
      color: "bg-blue-50",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative ${card.color} rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-between overflow-hidden min-h-[160px] group cursor-pointer`}
            >
              {/* Left Image */}
              <div className="w-1/3 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-24 md:h-20 lg:h-24 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                />
              </div>

              {/* Right Text */}
              <div className="w-2/3 ml-4 z-10">
                <h3 className="font-bold text-gray-800 text-base md:text-lg leading-tight group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wide">
                  {card.subtitle}
                </p>

                {/* Shop Now Button - Inline for mobile, appearing for desktop */}
                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                  Shop Now
                  <FiArrowRight />
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/40 rounded-full blur-2xl group-hover:bg-white/60 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
