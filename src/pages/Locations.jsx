import Footer from "../components/Home/Footer";
import ChurchLocatorHeroSection from "../components/Locations/LocationsPage/ChurchLocatorHeroSection";
import BranchLocatorMapSection from "../components/Locations/LocationsPage/BranchLocatorMapSection";

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F9FF] pt-16 lg:pt-20">
      <ChurchLocatorHeroSection />
      <BranchLocatorMapSection />
      <Footer />
    </div>
  );
};

export default LocationsPage;
