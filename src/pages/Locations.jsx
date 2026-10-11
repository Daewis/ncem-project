import Navbar from "../components/Common/Navbar"
import Footer from "../components/Common/Footer"
import ChurchLocatorHeroSection from "../components/Locations/LocationsPage/ChurchLocatorHeroSection";
import BranchLocatorMapSection from "../components/Locations/LocationsPage/BranchLocatorMapSection";

const LocationsPage = () => {
  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-[#F9F9FF] pt-16 lg:pt-20">
        <ChurchLocatorHeroSection />
        <BranchLocatorMapSection />
      </div>
    <Footer />
    </>
  );
};

export default LocationsPage;
