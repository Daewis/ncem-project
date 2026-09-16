import { Link } from "react-router-dom";
import type { Branch, District } from "@/data/locationsData";
import styles from "./OtherChurchesSection.module.css";

interface OtherChurchesSectionProps {
  currentDistrict: District;
  nearbyBranches: Branch[];
}

export const OtherChurchesSection = ({
  currentDistrict,
  nearbyBranches,
}: OtherChurchesSectionProps) => {
  if (nearbyBranches.length === 0) return null;

  return (
    <section className={styles.sectionOther} aria-labelledby="other-locations-heading">
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.headingContent}>
            <span className={styles.district}>{currentDistrict.name.toUpperCase()}</span>
            <h2 id="other-locations-heading" className={styles.title}>
              Other Locations Nearby
            </h2>
          </div>
        </div>

        <div className={styles.locationsGrid}>
  {nearbyBranches.map((branch) => (
    <Link
      key={branch.slug}
      to={`/locations/${branch.districtSlug}/${branch.slug}`}
      className={styles.locationCard}
    >
      <img src={branch.cardImage} alt={branch.name} />
      <div className={styles.cardContent}>
        <h3 className={styles.locationName}>{branch.name}</h3>

        <p className={styles.distanceText}>
           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.6 12L4.7 7.3L0 5.4V4.46667L12 0L7.53333 12H6.6ZM7.03333 9.53333L9.73333 2.26667L2.46667 4.96667L5.73333 6.26667L7.03333 9.53333Z" fill="#757682"/>
           </svg>
           <span>{branch.addressShort}</span>
        </p>

        <div className={styles.viewLocationRow}>
          <span className={styles.linkText}>View Location</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z" fill="#00236F"/>
          </svg>
        </div>
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
};

export default OtherChurchesSection;
