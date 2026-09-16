import { useState } from "react";
import { Link } from "react-router-dom";
import {
  type District,
  getBranchesForDistrict,
} from "@/data/locationsData";
import chevronIcon from "@/assets/locations/district/icon5.svg";
import styles from "./AccordionSection.module.css";

interface AccordionSectionProps {
  otherDistricts: District[];
}

export const AccordionSection = ({ otherDistricts }: AccordionSectionProps) => {
  // Store the active district slug (or null if all are closed)
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  if (otherDistricts.length === 0) return null;

  const toggleAccordion = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section className={styles.accordionSection} aria-labelledby="other-districts-heading">
      <div className={styles.headingWrapper}>
        <h2 id="other-districts-heading" className={styles.heading}>
          Other Districts
        </h2>
      </div>

      <div className={styles.accordion}>
        {otherDistricts.map((district) => {
          const isOpen = openSlug === district.slug;
          const districtBranches = getBranchesForDistrict(district.slug);

          return (
            <div key={district.slug} className={styles.accordionItem}>
              <button
                type="button"
                className={styles.accordionTrigger}
                onClick={() => toggleAccordion(district.slug)}
                aria-expanded={isOpen}
                aria-controls={`panel-${district.slug}`}
                id={`trigger-${district.slug}`}
              >
                <span className={styles.districtName}>{district.name}</span>
                <span className={`${styles.iconWrapper} ${isOpen ? styles.iconOpen : ""}`}>
                  <img className={styles.icon} alt="" aria-hidden="true" src={chevronIcon} />
                </span>
              </button>

              <div
                id={`panel-${district.slug}`}
                role="region"
                aria-labelledby={`trigger-${district.slug}`}
                className={`${styles.accordionPanel} ${isOpen ? styles.panelOpen : ""}`}
              >
                <div className={styles.panelContent}>
                  {districtBranches.length === 0 ? (
                    <p className={styles.emptyNote}>No branches registered yet.</p>
                  ) : (
                    <ul className={styles.branchSubList}>
                      {districtBranches.map((branch) => (
                        <li key={branch.slug}>
                          <Link
                            to={`/locations/${district.slug}/${branch.slug}`}
                            className={styles.branchSubLink}
                          >
                            <span className={styles.branchSubName}>{branch.name}</span>
                            <span className={styles.branchSubAddress}>{branch.addressShort}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link to={`/locations/${district.slug}`} className={styles.viewDistrictLink}>
                    View District Overview →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AccordionSection;