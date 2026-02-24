import { FiArrowRight } from "react-icons/fi";

export default function SpecialDeal() {
  const cards = [
    {
      title: "Catch Big Deals on Camera",
      subtitle: "Up to 40% Off",
      image:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      title: "Latest Smart Watch",
      subtitle: "Starting $199",
      image:
        "https://pngimg.com/uploads/watches/watches_PNG9884.png",
    },
    {
      title: "Wireless Headphones",
      subtitle: "Flat 30% Off",
      image:
        "https://pngimg.com/uploads/headphones/headphones_PNG101967.png",
    },
    {
      title: "Gaming Accessories",
      subtitle: "Hot Deals",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcYR4iCaNd4NaId-pcOM77lbySO1udbV6NCYBHwQLKuQSrEDNjbXuQJyr99gjEbmJg6gUNKRUy_kw3_iCz90-9o6oZzxvQVaKPV595Ccm8NvzyjeNN7prNng",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 flex items-center justify-between overflow-hidden min-h-[170px]"
            >
              {/* Left Image */}
              <img
                src={card.image}
                alt={card.title}
                className="h-20 object-contain opacity-90"
              />

              {/* Right Text */}
              <div className="ml-4">
                <h3 className="font-semibold text-lg leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {card.subtitle}
                </p>
              </div>

              {/* Shop Now Button */}
              <button className="absolute bottom-4 right-4 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition">
                Shop Now
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}