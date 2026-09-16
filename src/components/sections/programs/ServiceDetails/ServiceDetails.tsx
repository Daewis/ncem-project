import iconFreq from "@/assets/programs/iconsProgramsHeroSection/icon1.png";
import iconTime from "@/assets/programs/iconsProgramsHeroSection/icon2.png";
import iconVenue from "@/assets/programs/iconsProgramsHeroSection/icon3.png";
import iconCheck from "@/assets/programs/iconsProgramsHeroSection/icon4.png";
import iconArrow from "@/assets/programs/iconsProgramsHeroSection/icon5.png";
import classes from "@/styles/ServiceDetails.module.css";

export interface ServiceDetailItem {
  label: string;
  value: string;
}

export interface UpcomingDateItem {
  month: string;
  day: string;
  title: string;
}

interface SectionMainContentProps {
  serviceDetails: ServiceDetailItem[];
  aboutParagraphs: string[];
  expectations: string[];
  upcomingDates: UpcomingDateItem[];
}

const detailIcons = [iconFreq, iconTime, iconVenue];

export const SectionMainContent = ({
  serviceDetails,
  aboutParagraphs,
  expectations,
  upcomingDates,
}: SectionMainContentProps) => {
  return (
    <section className={classes.sectionMainContent} aria-label="Service Details">
      {/* Left Column */}
      <div className={classes.mainColumn}>
        {/* Quick Info Bar */}
        <div className={classes.serviceDetails}>
          {serviceDetails.map((detail, index) => (
            <div className={classes.detailGroup} key={detail.label}>
              {index > 0 && <div className={classes.detailDivider} aria-hidden="true" />}
              <div className={classes.detail}>
                <img
                  className={classes.detailIcon}
                  alt=""
                  aria-hidden="true"
                  src={detailIcons[index] || iconFreq}
                />
                <dl className={classes.detailText}>
                  <dt className={classes.detailLabel}>{detail.label}</dt>
                  <dd className={classes.detailValue}>{detail.value}</dd>
                </dl>
              </div>
            </div>
          ))}
        </div>

        {/* About the Service Article */}
        <article className={classes.aboutSection}>
          <h2 className={classes.aboutTitle}>About the Service</h2>

          {aboutParagraphs.map((paragraph, index) => (
            <p className={classes.paragraph} key={index}>
              {paragraph}
            </p>
          ))}

          <h3 className={classes.expectationsTitle}>What to Expect</h3>

          <ul className={classes.expectationsList}>
            {expectations.map((text, index) => (
              <li className={classes.expectation} key={index}>
                <img
                  className={classes.expectationIcon}
                  alt=""
                  aria-hidden="true"
                  src={iconCheck}
                />
                <span className={classes.expectationText}>{text}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Right Column: Upcoming Dates Sidebar */}
      <aside className={classes.sidebar} aria-labelledby="upcoming-dates-title">
        <div className={classes.upcomingDatesCard}>
          <h2 id="upcoming-dates-title" className={classes.upcomingDatesTitle}>
            Upcoming Dates
          </h2>

          <div className={classes.datesList}>
            {upcomingDates.map((date) => (
              <button
                type="button"
                className={classes.dateItem}
                key={`${date.month}-${date.day}`}
              >
                <div className={classes.dateInfo}>
                  <div className={classes.dateBadge}>
                    <span className={classes.dateMonth}>{date.month}</span>
                    <span className={classes.dateDay}>{date.day}</span>
                  </div>
                  <span className={classes.dateName}>{date.title}</span>
                </div>
                <img
                  className={classes.arrowIcon}
                  alt=""
                  aria-hidden="true"
                  src={iconArrow}
                />
              </button>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};