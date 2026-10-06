import TopNavBar from "../components/common/TopNavBar/TopNavBar";
import Footer from "../components/common/Footer/Footer";
import { ChurchLocatorHeroSection } from "../components/sections/locations/ChurchLocatorHeroSection/ChurchLocatorHeroSection";
import { BranchLocatorMapSection } from "../components/sections/locations/BranchLocatorMapSection/BranchLocatorMapSection";
import styles from "../styles/LocationsPage.module.css";

export const LocationsPage = () => {
  return (
    <>
      <TopNavBar active="locations" />
      <main className={styles.main}>
        <ChurchLocatorHeroSection />
        <BranchLocatorMapSection />
      </main>
      <Footer activeConnect="locations" />
    </>
  );
};

export default LocationsPage;