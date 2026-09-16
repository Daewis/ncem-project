import { Link } from "react-router-dom";
import arrowIcon from "@/assets/programs/iconsRelatedProgram/icon4.svg";
import { getRelatedPrograms } from "@/data/programsData";
import classes from "@/styles/RelatedPrograms.module.css";

interface SectionRelatedProps {
  /** Slug of the program currently being viewed, so it's excluded from the list */
  currentSlug: string;
}

export const SectionRelated = ({ currentSlug }: SectionRelatedProps) => {
  const relatedPrograms = getRelatedPrograms(currentSlug, 3);

  if (relatedPrograms.length === 0) return null;

  return (
    <section className={classes.sectionRelated} aria-labelledby="related-programs-heading">
      <div className={classes.container}>
        <header className={classes.header}>
          <div className={classes.headingGroup}>
            <h2 id="related-programs-heading" className={classes.heading}>
              Related Programs
            </h2>
            <p className={classes.description}>
              Continue your journey with these complementary gatherings.
            </p>
          </div>

          <Link to="/programs" className={classes.viewAll}>
            <span>View All Programs</span>
            <img className={classes.viewAllIcon} alt="" aria-hidden="true" src={arrowIcon} />
          </Link>
        </header>

        <div className={classes.cardsGrid}>
          {relatedPrograms.map((program) => (
            <Link
              key={program.slug}
              to={`/programs/${program.slug}`}
              className={classes.card}
            >
              <div className={classes.imageWrapper}>
                <img
                  className={classes.cardImage}
                  alt={program.title}
                  src={program.cardImage}
                  loading="lazy"
                />
              </div>

              <div className={classes.cardContent}>
                <div className={classes.categoryRow}>
                  <img
                    className={classes.categoryIcon}
                    alt=""
                    aria-hidden="true"
                    src={program.tagIcon}
                  />
                  <span className={classes.categoryLabel}>{program.tag}</span>
                </div>

                <h3 className={classes.cardTitle}>{program.title}</h3>
                <p className={classes.cardDescription}>{program.cardDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionRelated;
