import { useParams, Link } from "react-router-dom";
import TopNavBar from "../components/common/TopNavBar/TopNavBar";
import Footer from "../components/common/Footer/Footer";
import { MainContentSection } from "../components/sections/locations/District/MainContentSection/MainContentSection";
import { AccordionSection } from "../components/sections/locations/District/AccordionSection/AccordionSection";
import {
  getDistrictBySlug,
  getBranchesForDistrict,
  getOtherDistricts,
} from "../data/locationsData";
import styles from "../styles/DistrictPage.module.css";

export default function DistrictPage() {
  const { districtSlug } = useParams<{ districtSlug: string }>();
  const district = districtSlug ? getDistrictBySlug(districtSlug) : undefined;

  if (!district) {
    return (
      <>
        <TopNavBar active="locations" variant="district" />
        <main className={styles.main} style={{ padding: "160px 24px", textAlign: "center" }}>
          <h1>District not found</h1>
          <p>We couldn't find the district you're looking for.</p>
          <Link to="/locations">Back to Locations</Link>
        </main>
        <Footer activeConnect="locations" />
      </>
    );
  }

  const branches = getBranchesForDistrict(district.slug);
  const otherDistricts = getOtherDistricts(district.slug);

  return (
    <>
       <TopNavBar active="locations" variant="district" />
      <main className={styles.main}>
        <MainContentSection district={district} branches={branches} />
        <AccordionSection otherDistricts={otherDistricts} />
      </main>
      <Footer activeConnect="locations" />
    </>
  );
}
