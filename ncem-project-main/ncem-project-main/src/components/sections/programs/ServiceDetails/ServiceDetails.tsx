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

const DetailIcons = [
  // icon1 — frequency
  () => (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 16C10.8 16 10.2083 15.7583 9.725 15.275C9.24167 14.7917 9 14.2 9 13.5C9 12.8 9.24167 12.2083 9.725 11.725C10.2083 11.2417 10.8 11 11.5 11C12.2 11 12.7917 11.2417 13.275 11.725C13.7583 12.2083 14 12.8 14 13.5C14 14.2 13.7583 14.7917 13.275 15.275C12.7917 15.7583 12.2 16 11.5 16ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18Z" fill="#795900"/>
    </svg>
  ),
  // icon2 — time
  () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="#795900"/>
    </svg>
  ),
  // icon3 — venue
  () => (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#795900"/>
    </svg>
  ),
];

const ExpectationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#795900"/>
  </svg>
  
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#C5C5D3"/>
  </svg>

);

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
          {serviceDetails.map((detail, index) => {
            const Icon = DetailIcons[index] ?? DetailIcons[0];
            return (
              <div className={classes.detailGroup} key={detail.label}>
                {index > 0 && <div className={classes.detailDivider} aria-hidden="true" />}
                <div className={classes.detail}>
                  <span className={classes.detailIcon}>
                    <Icon />
                  </span>
                  <dl className={classes.detailText}>
                    <dt className={classes.detailLabel}>{detail.label}</dt>
                    <dd className={classes.detailValue}>{detail.value}</dd>
                  </dl>
                </div>
              </div>
            );
          })}
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
                <span className={classes.expectationIcon}>
                  <ExpectationIcon />
                </span>
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
                <span className={classes.arrowIcon}>
                  <ArrowIcon />
                </span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};