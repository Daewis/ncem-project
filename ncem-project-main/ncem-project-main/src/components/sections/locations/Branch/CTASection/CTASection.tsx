import type { Branch } from "@/data/locationsData";
import styles from "./CTASection.module.css";
import icon from "@/assets/locations/branch/icon1.svg";

interface CTASectionProps {
  branch: Branch;
}

export const CTASection = ({ branch }: CTASectionProps) => {
  const venueName = branch.ctaVenueName ?? branch.name;

  return (
    <section className={styles.sectionBottomCta} aria-labelledby="branch-cta-heading">
      <div className={styles.topGlow} aria-hidden="true" />
      <div className={styles.bottomGlow} aria-hidden="true" />

      <div className={styles.content}>
      <div className={styles.iconSection}>
        <div className={styles.iconWrapper}> 
          <img className={styles.mainIcon} alt="Icon" src={icon} /> 
        </div>
      </div>
        <h2 id="branch-cta-heading" className={styles.heading}>
          Ready to Visit Us?
        </h2>
        <p className={styles.description}>
          We can't wait to welcome you to {venueName} this Sunday.
        </p>
        <button type="button" className={styles.directionsButton}>
          Get Directions
        </button>
      </div>
    </section>
  );
};

export default CTASection;
