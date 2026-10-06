import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { District, Branch } from "@/data/locationsData";
import searchIcon from "@/assets/locations/district/icon2.svg";
import basemapImage from "@/assets/locations/district/image3.png";
import styles from "./MainContentSection.module.css";

interface MainContentSectionProps {
  district: District;
  branches: Branch[];
}

export const MainContentSection = ({ district, branches }: MainContentSectionProps) => {
  const [query, setQuery] = useState("");

  const filteredBranches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return branches;
    return branches.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.addressShort.toLowerCase().includes(q) ||
        b.pastorName.toLowerCase().includes(q)
    );
  }, [branches, query]);

  const markedBranches = branches.filter((b) => b.mapMarker);

  const unmarkedCount = branches.filter((b) => !b.mapMarker).length;
  const fillerPositions = [
  { top: "35%", left: "80%" },  // matches Figma's one visible dot
  { top: "20%", left: "70%" },
  { top: "75%", left: "20%" },
];

  return (
    <div className={styles.mainContent}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.districtTitleWrapper}>
            <h1 className={styles.districtTitle}>{district.name}</h1>
          </div>

          <div className={styles.branchCount}>
            <svg
              className={styles.countIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className={styles.branchCountText}>
              {branches.length} {branches.length === 1 ? "Branch" : "Branches"}
            </span>
          </div>

          <div className={styles.searchWrapper}>
            <div className={styles.searchField}>
              <input
                className={styles.searchInput}
                placeholder="Search this district..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={`Search branches in ${district.name}`}
              />
              <span className={styles.searchIconWrapper}>
                <img className={styles.searchIcon} alt="" aria-hidden="true" src={searchIcon} />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.branchList}>
          {filteredBranches.length === 0 && (
            <p className={styles.noResults}>No branches match "{query}".</p>
          )}

          {filteredBranches.map((branch) => (
            <Link
              key={branch.slug}
              to={`/locations/${district.slug}/${branch.slug}`}
              className={styles.branchCard}
            >
              <div className={styles.branchNameWrapper}>
                <span className={styles.branchName}>{branch.name}</span>
              </div>

              <div className={styles.branchAddress}>
                <svg
                  className={styles.addressIcon}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7 10.5L3.5 9.275L0.7875 10.325C0.593056 10.4028 0.413194 10.3809 0.247917 10.2594C0.0826389 10.1378 0 9.975 0 9.77083V1.60417C0 1.47778 0.0364583 1.36597 0.109375 1.26875C0.182292 1.17153 0.281944 1.09861 0.408333 1.05L3.5 0L7 1.225L9.7125 0.175C9.90694 0.0972222 10.0868 0.119097 10.2521 0.240625C10.4174 0.362153 10.5 0.525 10.5 0.729167V8.89583C10.5 9.02222 10.4635 9.13403 10.3906 9.23125C10.3177 9.32847 10.2181 9.40139 10.0917 9.45L7 10.5ZM6.41667 9.07083V2.24583L4.08333 1.42917V8.25417L6.41667 9.07083ZM7.58333 9.07083L9.33333 8.4875V1.575L7.58333 2.24583V9.07083ZM1.16667 8.925L2.91667 8.25417V1.42917L1.16667 2.0125V8.925ZM7.58333 2.24583V9.07083V2.24583ZM2.91667 1.42917V8.25417V1.42917Z"
                    fill="#757682"
                  />
                </svg>
                <span className={styles.addressText}>{branch.addressShort}</span>
              </div>

              <div className={styles.pastorDetails}>
                {branch.pastorAvatar ? (
                  <img
                    className={styles.pastorAvatarImage}
                    src={branch.pastorAvatar}
                    alt=""
                    aria-hidden="true"
                  />
                ) : (
                  <div className={styles.pastorAvatar} />
                )}
                <div className={styles.pastorTextWrapper}>
                  <span className={styles.pastorName}>{branch.pastorName}</span>
                  <span className={styles.pastorRole}>Lead Pastor</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* TODO(Dave): still a static image, not an interactive map. Markers below use
          each branch's real mapMarker where set; the small dots are Figma's
          decorative "other branches" filler, not tied to real data. */}
      <div className={styles.map} aria-label="District branch map">
  <img src={basemapImage} alt="Map area" className={styles.mapImage} loading="lazy" />

  {markedBranches.map((branch) => (
    <img
      key={branch.slug}
      src={branch.mapMarker!.icon}
      alt={branch.name}
      className={styles.mapMarker}
      style={{ left: branch.mapMarker!.left, top: branch.mapMarker!.top }}
    />
  ))}

  {fillerPositions.slice(0, unmarkedCount).map((pos, i) => (
    <div
      key={i}
      className={styles.mapPoint}
      style={{ top: pos.top, left: pos.left }}
    />
  ))}
</div>
    </div>
  );
};

export default MainContentSection;