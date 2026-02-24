import Footer from "../components/Footer";
import HeaderTop from "../components/HeaderTop";
import HeroSection from "../components/HeroSection";
import MainHeader from "../components/MainHeader";
import DealsSection from "../components/DealSection";
import SpecialDeal from "../components/SpecialDeal";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <HeaderTop />
        <MainHeader />

        <main className="grow">
            <HeroSection />
            <SpecialDeal />
            <DealsSection />
        </main>

        <Footer />
    </div>
  );
};

export default Index;