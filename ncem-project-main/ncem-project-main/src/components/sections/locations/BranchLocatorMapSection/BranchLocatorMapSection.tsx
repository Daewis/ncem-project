import { useState } from "react";
import { Link } from "react-router-dom";
import { districts, branches, getDistrictBySlug } from "@/data/locationsData";
import styles from "./BranchLocatorMapSection.module.css";
import basemapImage from "@/assets/locations/iconBranchLocator/basemap-image.png";
import icon4 from "@/assets/locations/iconBranchLocator/icon4.svg";
import icon5 from "@/assets/locations/iconBranchLocator/icon5.svg";
import icon6 from "@/assets/locations/iconBranchLocator/icon6.svg";

export const BranchLocatorMapSection = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  return (
    <section className={styles.section} aria-labelledby="branches-heading">
      <aside className={styles.sidebar}>
        <header className={styles.sidebarHeader}>
          <h2 id="branches-heading" className={styles.sidebarTitle}>
            Branches
          </h2>
          <p className={styles.sidebarSubtitle}>Showing locations near you</p>
        </header>

        <div className={styles.branchList} aria-label="Nearby branch locations">
          {branches.map((branch) => {
            const district = getDistrictBySlug(branch.districtSlug);

            return (
              <article key={branch.slug} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.branchName}>{branch.name}</h3>
                  {district && (
                    <span className={styles.districtBadge}>{district.name}</span>
                  )}
                </div>

                <div className={styles.addressRow}>
                  <img src={icon4} alt="" aria-hidden="true" className={styles.addressIcon} />
                  <p className={styles.addressText}>{branch.addressShort}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.pastorInfo}>
                    <div className={styles.pastorIconWrapper}>
                      <img
                        src={icon5}
                        alt=""
                        aria-hidden="true"
                        className={styles.pastorIcon}
                      />
                    </div>
                    <span className={styles.pastorName}>{branch.pastorName}</span>
                  </div>

                  <Link
                    to={`/locations/${branch.districtSlug}/${branch.slug}`}
                    className={styles.viewButton}
                    aria-label={`View ${branch.name}`}
                  >
                    <span>View Branch</span>
                    <img src={icon6} alt="" aria-hidden="true" className={styles.arrowIcon} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </aside>

      {/* TODO(Dave): zoom controls are decorative — no real pins wired to branches/districts yet */}
      <div
        className={styles.mapWrapper}
        role="region"
        aria-label="Map showing branch locations"
      >
        <img
          src={basemapImage}
          alt="Basemap of locations"
          className={styles.basemap}
          style={{ transform: `scale(${zoomLevel})` }}
        />

        <div className={styles.mapControls} aria-label="Zoom controls">
          <button
            type="button"
            className={styles.zoomButton}
            onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2))}
            aria-label="Zoom in"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.zoomButton}
            onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
            aria-label="Zoom out"
          >
            <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
              <path d="M1 1H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BranchLocatorMapSection;
