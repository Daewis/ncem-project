import type { Branch } from "@/data/locationsData";
import styles from "./HeroSection.module.css";
import ojoImage from "@/assets/locations/branch/image1.png";

interface HeroSectionProps {
  branch: Branch;
  districtName: string;
}

const DEFAULT_DESCRIPTION =
  "A welcoming community in the heart of the city, dedicated to spiritual growth and service.";



export const HeroSection = ({ branch, districtName }: HeroSectionProps) => {
  if (!branch) {
    // Caller passed an undefined branch (e.g. a slug that didn't resolve).
    // Render nothing rather than crashing the tree — the page should be
    // showing a not-found state in this situation, not this component.
    return null;
  }

  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    branch.addressFull
  )}`;
  const mapsHref = branch.mapLink ?? directionsHref;

  return (
    <section className={styles.heroSection} aria-labelledby="branch-hero-title">
      <div className={styles.background} aria-hidden="true">
          <img className={styles.gradient} src={ojoImage} alt="" />
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.district}>{districtName}</p>

        <h1 id="branch-hero-title" className={styles.title}>
          {branch.name}
        </h1>

        <p className={styles.description}>
          {branch.heroDescription ?? DEFAULT_DESCRIPTION}
        </p>

        <div className={styles.actions}>
          <a
            className={styles.directionsButton}
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 13H8V10H11.5V12.5L15 9L11.5 5.5V8H7C6.71667 8 6.47917 8.09583 6.2875 8.2875C6.09583 8.47917 6 8.71667 6 9V13ZM10 20C9.75 20 9.50417 19.95 9.2625 19.85C9.02083 19.75 8.8 19.6 8.6 19.4L0.6 11.4C0.4 11.2 0.25 10.9792 0.15 10.7375C0.05 10.4958 0 10.25 0 10C0 9.75 0.05 9.50417 0.15 9.2625C0.25 9.02083 0.4 8.8 0.6 8.6L8.6 0.6C8.8 0.4 9.02083 0.25 9.2625 0.15C9.50417 0.05 9.75 0 10 0C10.25 0 10.4958 0.05 10.7375 0.15C10.9792 0.25 11.2 0.4 11.4 0.6L19.4 8.6C19.6 8.8 19.75 9.02083 19.85 9.2625C19.95 9.50417 20 9.75 20 10C20 10.25 19.95 10.4958 19.85 10.7375C19.75 10.9792 19.6 11.2 19.4 11.4L11.4 19.4C11.2 19.6 10.9792 19.75 10.7375 19.85C10.4958 19.95 10.25 20 10 20ZM6 14L10 18L18 10L10 2L2 10L6 14Z" fill="#6F5100"/>
            </svg>

            <span>Get Directions</span>
          </a>

          <a
            className={styles.mapsButton}
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18L6 15.9L1.35 17.7C1.01667 17.8333 0.708333 17.7958 0.425 17.5875C0.141667 17.3792 0 17.1 0 16.75V2.75C0 2.53333 0.0625 2.34167 0.1875 2.175C0.3125 2.00833 0.483333 1.88333 0.7 1.8L6 0L12 2.1L16.65 0.3C16.9833 0.166667 17.2917 0.204167 17.575 0.4125C17.8583 0.620833 18 0.9 18 1.25V15.25C18 15.4667 17.9375 15.6583 17.8125 15.825C17.6875 15.9917 17.5167 16.1167 17.3 16.2L12 18ZM11 15.55V3.85L7 2.45V14.15L11 15.55ZM13 15.55L16 14.55V2.7L13 3.85V15.55ZM2 15.3L5 14.15V2.45L2 3.45V15.3ZM13 3.85V15.55V3.85ZM5 2.45V14.15V2.45Z" fill="white"/>
            </svg>

            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;