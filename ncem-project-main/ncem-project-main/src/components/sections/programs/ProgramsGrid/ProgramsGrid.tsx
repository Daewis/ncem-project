import { useState } from "react";
import { Link } from "react-router-dom";
import { getGridPrograms, type Program } from "@/data/programsData";
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
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3C0 2.5875 0.146875 2.23438 0.440625 1.94062C0.734375 1.64687 1.0875 1.5 1.5 1.5H2.25V0H3.75V1.5H9.75V0H11.25V1.5H12C12.4125 1.5 12.7656 1.64687 13.0594 1.94062C13.3531 2.23438 13.5 2.5875 13.5 3V13.5C13.5 13.9125 13.3531 14.2656 13.0594 14.5594C12.7656 14.8531 12.4125 15 12 15H1.5ZM1.5 13.5H12V6H1.5V13.5ZM1.5 4.5H12V3H1.5V4.5ZM1.5 4.5V3V4.5ZM6.75 9C6.5375 9 6.35938 8.92813 6.21562 8.78438C6.07187 8.64062 6 8.4625 6 8.25C6 8.0375 6.07187 7.85938 6.21562 7.71562C6.35938 7.57187 6.5375 7.5 6.75 7.5C6.9625 7.5 7.14062 7.57187 7.28438 7.71562C7.42813 7.85938 7.5 8.0375 7.5 8.25C7.5 8.4625 7.42813 8.64062 7.28438 8.78438C7.14062 8.92813 6.9625 9 6.75 9ZM3.75 9C3.5375 9 3.35938 8.92813 3.21563 8.78438C3.07188 8.64062 3 8.4625 3 8.25C3 8.0375 3.07188 7.85938 3.21563 7.71562C3.35938 7.57187 3.5375 7.5 3.75 7.5C3.9625 7.5 4.14062 7.57187 4.28438 7.71562C4.42813 7.85938 4.5 8.0375 4.5 8.25C4.5 8.4625 4.42813 8.64062 4.28438 8.78438C4.14062 8.92813 3.9625 9 3.75 9ZM9.75 9C9.5375 9 9.35938 8.92813 9.21562 8.78438C9.07187 8.64062 9 8.4625 9 8.25C9 8.0375 9.07187 7.85938 9.21562 7.71562C9.35938 7.57187 9.5375 7.5 9.75 7.5C9.9625 7.5 10.1406 7.57187 10.2844 7.71562C10.4281 7.85938 10.5 8.0375 10.5 8.25C10.5 8.4625 10.4281 8.64062 10.2844 8.78438C10.1406 8.92813 9.9625 9 9.75 9ZM6.75 12C6.5375 12 6.35938 11.9281 6.21562 11.7844C6.07187 11.6406 6 11.4625 6 11.25C6 11.0375 6.07187 10.8594 6.21562 10.7156C6.35938 10.5719 6.5375 10.5 6.75 10.5C6.9625 10.5 7.14062 10.5719 7.28438 10.7156C7.42813 10.8594 7.5 11.0375 7.5 11.25C7.5 11.4625 7.42813 11.6406 7.28438 11.7844C7.14062 11.9281 6.9625 12 6.75 12ZM3.75 12C3.5375 12 3.35938 11.9281 3.21563 11.7844C3.07188 11.6406 3 11.4625 3 11.25C3 11.0375 3.07188 10.8594 3.21563 10.7156C3.35938 10.5719 3.5375 10.5 3.75 10.5C3.9625 10.5 4.14062 10.5719 4.28438 10.7156C4.42813 10.8594 4.5 11.0375 4.5 11.25C4.5 11.4625 4.42813 11.6406 4.28438 11.7844C4.14062 11.9281 3.9625 12 3.75 12ZM9.75 12C9.5375 12 9.35938 11.9281 9.21562 11.7844C9.07187 11.6406 9 11.4625 9 11.25C9 11.0375 9.07187 10.8594 9.21562 10.7156C9.35938 10.5719 9.5375 10.5 9.75 10.5C9.9625 10.5 10.1406 10.5719 10.2844 10.7156C10.4281 10.8594 10.5 11.0375 10.5 11.25C10.5 11.4625 10.4281 11.6406 10.2844 11.7844C10.1406 11.9281 9.9625 12 9.75 12Z" fill="#F9BD22"/>
        </svg>
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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.86667 9.8L9.8 8.86667L7.33333 6.4V3.33333H6V6.93333L8.86667 9.8ZM6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333ZM6.66667 12C8.14444 12 9.40278 11.4806 10.4417 10.4417C11.4806 9.40278 12 8.14444 12 6.66667C12 5.18889 11.4806 3.93056 10.4417 2.89167C9.40278 1.85278 8.14444 1.33333 6.66667 1.33333C5.18889 1.33333 3.93056 1.85278 2.89167 2.89167C1.85278 3.93056 1.33333 5.18889 1.33333 6.66667C1.33333 8.14444 1.85278 9.40278 2.89167 10.4417C3.93056 11.4806 5.18889 12 6.66667 12Z" fill="#444651"/>
          </svg>
            <p className={classes.detailText}>{program.timeLabel}</p>
          </div>
          <div className={classes.detailRow}>
          <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.33333 6.66667C5.7 6.66667 6.01389 6.53611 6.275 6.275C6.53611 6.01389 6.66667 5.7 6.66667 5.33333C6.66667 4.96667 6.53611 4.65278 6.275 4.39167C6.01389 4.13056 5.7 4 5.33333 4C4.96667 4 4.65278 4.13056 4.39167 4.39167C4.13056 4.65278 4 4.96667 4 5.33333C4 5.7 4.13056 6.01389 4.39167 6.275C4.65278 6.53611 4.96667 6.66667 5.33333 6.66667ZM5.33333 11.5667C6.68889 10.3222 7.69444 9.19167 8.35 8.175C9.00556 7.15833 9.33333 6.25556 9.33333 5.46667C9.33333 4.25556 8.94722 3.26389 8.175 2.49167C7.40278 1.71944 6.45556 1.33333 5.33333 1.33333C4.21111 1.33333 3.26389 1.71944 2.49167 2.49167C1.71944 3.26389 1.33333 4.25556 1.33333 5.46667C1.33333 6.25556 1.66111 7.15833 2.31667 8.175C2.97222 9.19167 3.97778 10.3222 5.33333 11.5667ZM5.33333 13.3333C3.54444 11.8111 2.20833 10.3972 1.325 9.09167C0.441667 7.78611 0 6.57778 0 5.46667C0 3.8 0.536111 2.47222 1.60833 1.48333C2.68056 0.494444 3.92222 0 5.33333 0C6.74444 0 7.98611 0.494444 9.05833 1.48333C10.1306 2.47222 10.6667 3.8 10.6667 5.46667C10.6667 6.57778 10.225 7.78611 9.34167 9.09167C8.45833 10.3972 7.12222 11.8111 5.33333 13.3333Z" fill="#444651"/>
          </svg>
            <p className={classes.detailText}>{program.locationLabel}</p>
          </div>
        </div>
        <div className={classes.viewProgram}>
          <span className={classes.viewProgramLabel}>View Program</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1458 7.5H0V5.83333H10.1458L5.47917 1.16667L6.66667 0L13.3333 6.66667L6.66667 13.3333L5.47917 12.1667L10.1458 7.5Z" fill="#795900"/>
          </svg>
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
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667C0 2.3 0.130556 1.98611 0.391667 1.725C0.652778 1.46389 0.966667 1.33333 1.33333 1.33333H2V0H3.33333V1.33333H8.66667V0H10V1.33333H10.6667C11.0333 1.33333 11.3472 1.46389 11.6083 1.725C11.8694 1.98611 12 2.3 12 2.66667V12C12 12.3667 11.8694 12.6806 11.6083 12.9417C11.3472 13.2028 11.0333 13.3333 10.6667 13.3333H1.33333ZM1.33333 12H10.6667V5.33333H1.33333V12ZM1.33333 4H10.6667V2.66667H1.33333V4ZM1.33333 4V2.66667V4Z" fill="#444651"/>
        </svg>

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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.86667 9.8L9.8 8.86667L7.33333 6.4V3.33333H6V6.93333L8.86667 9.8ZM6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333ZM6.66667 12C8.14444 12 9.40278 11.4806 10.4417 10.4417C11.4806 9.40278 12 8.14444 12 6.66667C12 5.18889 11.4806 3.93056 10.4417 2.89167C9.40278 1.85278 8.14444 1.33333 6.66667 1.33333C5.18889 1.33333 3.93056 1.85278 2.89167 2.89167C1.85278 3.93056 1.33333 5.18889 1.33333 6.66667C1.33333 8.14444 1.85278 9.40278 2.89167 10.4417C3.93056 11.4806 5.18889 12 6.66667 12Z" fill="#444651"/>
            </svg>
              <p className={classes.detailText}>{program.timeLabel}</p>
            </div>
            <div className={classes.detailRow}>
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33333 6.66667C5.7 6.66667 6.01389 6.53611 6.275 6.275C6.53611 6.01389 6.66667 5.7 6.66667 5.33333C6.66667 4.96667 6.53611 4.65278 6.275 4.39167C6.01389 4.13056 5.7 4 5.33333 4C4.96667 4 4.65278 4.13056 4.39167 4.39167C4.13056 4.65278 4 4.96667 4 5.33333C4 5.7 4.13056 6.01389 4.39167 6.275C4.65278 6.53611 4.96667 6.66667 5.33333 6.66667ZM5.33333 11.5667C6.68889 10.3222 7.69444 9.19167 8.35 8.175C9.00556 7.15833 9.33333 6.25556 9.33333 5.46667C9.33333 4.25556 8.94722 3.26389 8.175 2.49167C7.40278 1.71944 6.45556 1.33333 5.33333 1.33333C4.21111 1.33333 3.26389 1.71944 2.49167 2.49167C1.71944 3.26389 1.33333 4.25556 1.33333 5.46667C1.33333 6.25556 1.66111 7.15833 2.31667 8.175C2.97222 9.19167 3.97778 10.3222 5.33333 11.5667ZM5.33333 13.3333C3.54444 11.8111 2.20833 10.3972 1.325 9.09167C0.441667 7.78611 0 6.57778 0 5.46667C0 3.8 0.536111 2.47222 1.60833 1.48333C2.68056 0.494444 3.92222 0 5.33333 0C6.74444 0 7.98611 0.494444 9.05833 1.48333C10.1306 2.47222 10.6667 3.8 10.6667 5.46667C10.6667 6.57778 10.225 7.78611 9.34167 9.09167C8.45833 10.3972 7.12222 11.8111 5.33333 13.3333Z" fill="#444651"/>
            </svg>
              <div className={classes.detailText}>{program.locationLabel}</div>
            </div>
          </div>
          <div className={classes.secondaryViewProgramWrapper}>
            <div className={classes.viewProgram}>
              <div className={classes.viewProgramLabel}>View Program</div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1458 7.5H0V5.83333H10.1458L5.47917 1.16667L6.66667 0L13.3333 6.66667L6.66667 13.3333L5.47917 12.1667L10.1458 7.5Z" fill="#795900"/>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default ProgramsGrid;