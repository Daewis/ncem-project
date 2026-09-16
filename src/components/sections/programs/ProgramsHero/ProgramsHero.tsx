import classes from "@/styles/ProgramsHero.module.css";

export const ProgramsHero = () => {
  return (
    <section className={classes.heroSection} aria-labelledby="programs-hero-title">
      <div className={classes.backgroundPattern} aria-hidden="true" />
      <div className={classes.content}>
        <div className={classes.headingWrapper}>
          <h1 id="programs-hero-title" className={classes.heading}>
            Our Programs
          </h1>
        </div>
        <div className={classes.descriptionWrapper}>
          <p className={classes.description}>
            Discover the ministry's recurring programs, fellowships and activities designed
            <br />
            to nurture spiritual growth and community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
