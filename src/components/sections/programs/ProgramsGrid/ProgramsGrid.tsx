import { useState } from "react";
import { Link } from "react-router-dom";
import { getGridPrograms, type Program } from "@/data/programsData";

//import frequencyIcon from "@/assets/programs/iconsProgramsHeroSection/icon1.png";
//import timeIcon from "@/assets/programs/iconsProgramsHeroSection/icon2.png";
//import locationIcon from "@/assets/programs/iconsProgramsHeroSection/icon3.png";
//import arrowIcon from "@/assets/programs/iconsRelatedProgram/icon4.svg";

import programsStudyIcon from "@/assets/programs/study.svg";
import programsClockIcon from "@/assets/programs/clock.svg";
import programsLocationIcon from "@/assets/programs/location.svg";
import progrmasStudy from "@/assets/programs/study-icon.svg";
import progrmasArrowIcon from "@/assets/programs/arrow.svg";

import classes from "@/styles/ProgramsGrid.module.css";

type FilterKey = "all" | "monthly" | "special";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "monthly", label: "Monthly" },
  { key: "special", label: "Special" },
];

export const ProgramsGrid = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const programs = getGridPrograms().filter(
    (program) => activeFilter === "all" || program.category === activeFilter
  );

  return (
    <div className={classes.programsContent}>
      <div className={classes.filters}>
        {filters.map((filter) => {
          const isActive = filter.key === activeFilter;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`${classes.filterButton} ${isActive ? classes.activeFilter : ""}`}
            >
              <span className={isActive ? classes.activeFilterLabel : classes.filterLabel}>
                {filter.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className={classes.programGrid}>
        {programs.map((program) =>
          program.featured ? (
            <FeaturedCard key={program.slug} program={program} />
          ) : (
            <SecondaryCard key={program.slug} program={program} />
          )
        )}
      </div>
    </div>
  );
};

const FeaturedCard = ({ program }: { program: Program }) => (
  <Link
    to={`/programs/${program.slug}`}
    className={`${classes.programCard} ${classes.featuredCard}`}
  >
    <div className={`${classes.programImageContainer} ${classes.featuredImageContainer}`}>
      <img className={classes.programImage} src={program.cardImage} alt="" />
      <div className={classes.badge}>
        {program.badgeIcon && (
          <img
            className={classes.badgeIcon}
            src={program.badgeIcon}
            alt=""
            aria-hidden="true"
          />
        )}
        <span className={classes.badgeLabel}>{program.badgeLabel}</span>
      </div>
    </div>

    <div className={`${classes.cardContent} ${classes.featuredCardContent}`}>
      <div className={classes.cardBody}>
        <div className={classes.eventFrequency}>
          <img className={classes.frequencyIcon} src={programsStudyIcon} alt="" aria-hidden="true" />
          <p className={classes.frequencyLabel}>{program.frequencyLabel}</p>
        </div>
        <div className={classes.titleWrapper}>
          <div className={classes.featuredTitle}>{program.title}</div>
        </div>
        <div className={classes.descriptionWrapper}>
          <p className={classes.description}>{program.cardDescription}</p>
        </div>
      </div>

      <div className={classes.featuredFooter}>
        <div className={classes.eventDetails}>
          <div className={classes.detailRow}>
            <img className={classes.timeIcon} src={programsClockIcon} alt="" aria-hidden="true" />
            <p className={classes.detailText}>{program.timeLabel}</p>
          </div>
          <div className={classes.detailRow}>
            <img className={classes.locationIcon} src={programsLocationIcon} alt="" aria-hidden="true" />
            <p className={classes.detailText}>{program.locationLabel}</p>
          </div>
        </div>
        <div className={classes.viewProgram}>
          <span className={classes.viewProgramLabel}>View Program</span>
          <img className={classes.arrowIcon} src={progrmasArrowIcon} alt="" aria-hidden="true" />
        </div>
      </div>
    </div>
  </Link>
);

const SecondaryCard = ({ program }: { program: Program }) => (
  <Link
    to={`/programs/${program.slug}`}
    className={`${classes.programCard} ${classes.secondaryCard}`}
  >
    <div className={`${classes.programImageContainer} ${classes.secondaryImageContainer}`}>
      <img className={classes.programImage} src={program.cardImage} alt="" />
      <div className={`${classes.badge} ${classes.badgeWithoutIcon}`}>
        <span className={classes.badgeLabel}>{program.badgeLabel}</span>
      </div>
    </div>

    <div className={`${classes.cardContent} ${classes.secondaryCardContent}`}>
      <div className={classes.cardBody}>
        <div className={classes.eventFrequency}>
          <img
            className={classes.secondaryFrequencyIcon}
            src={progrmasStudy}
            alt=""
            aria-hidden="true"
          />
          <div className={classes.frequencyLabel}>{program.frequencyLabel}</div>
        </div>
        <div className={classes.titleWrapper}>
          <div className={classes.secondaryTitle}>{program.title}</div>
        </div>
        <div className={classes.descriptionWrapper}>
          <p className={classes.description}>{program.cardDescription}</p>
        </div>
      </div>

      <div className={classes.secondaryFooterContainer}>
        <div className={classes.secondaryFooter}>
          <div className={classes.eventDetails}>
            <div className={classes.detailRow}>
              <img className={classes.timeIcon} src={programsClockIcon} alt="" aria-hidden="true" />
              <p className={classes.detailText}>{program.timeLabel}</p>
            </div>
            <div className={classes.detailRow}>
              <img className={classes.locationIcon} src={programsLocationIcon} alt="" aria-hidden="true" />
              <div className={classes.detailText}>{program.locationLabel}</div>
            </div>
          </div>
          <div className={classes.secondaryViewProgramWrapper}>
            <div className={classes.viewProgram}>
              <div className={classes.viewProgramLabel}>View Program</div>
              <img className={classes.arrowIcon} src={progrmasArrowIcon} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default ProgramsGrid;