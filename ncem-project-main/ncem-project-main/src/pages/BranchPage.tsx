import { useParams, Link } from "react-router-dom";
import TopNavBar from "../components/common/TopNavBar/TopNavBar";
import Footer from "../components/common/Footer/Footer";
import { HeroSection } from "../components/sections/locations/Branch/HeroSection/HeroSection";
import { MainContentSection } from "../components/sections/locations/Branch/MainContentSection/MainContentSection";
import { OtherChurchesSection } from "../components/sections/locations/Branch/OtherChurchesSection/OtherChurchesSection";
import { CTASection } from "../components/sections/locations/Branch/CTASection/CTASection";
import {
  getBranchBySlug,
  getDistrictBySlug,
  getNearbyBranches,
} from "../data/locationsData";
import styles from "../styles/BranchPage.module.css";

export default function BranchPage() {
  const { districtSlug, branchSlug } = useParams<{
    districtSlug: string;
    branchSlug: string;
  }>();

  const branch = branchSlug ? getBranchBySlug(branchSlug) : undefined;
  const district = branch ? getDistrictBySlug(branch.districtSlug) : undefined;

  const resolvedDistrictSlug = district?.slug ?? districtSlug;

  if (!branch || !district || !resolvedDistrictSlug) {
    return (
      <>
        <TopNavBar active="locations" variant="branch" />
        <main className={styles.main} style={{ padding: "160px 24px", textAlign: "center" }}>
          <h1>Branch not found</h1>
          <p>We couldn't find the branch you're looking for.</p>
          <Link to="/locations">Back to Locations</Link>
        </main>
        <Footer activeConnect="locations" />
      </>
    );
  }

  const nearbyBranches = getNearbyBranches(branch.slug, 2);

  return (
    <>
      <TopNavBar active="locations" variant="branch" />
      <main className={styles.main}>
        <div className={styles.content}>
          <HeroSection
          branch={branch}
          districtName={district.name}
          />
          <MainContentSection branch={branch} />
          <OtherChurchesSection currentDistrict={district} nearbyBranches={nearbyBranches} />
          <CTASection branch={branch} />
        </div>
      </main>
      <Footer activeConnect="locations" />
    </>
  );
}
