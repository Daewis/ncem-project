import breadcrumbIcon from "@/assets/programs/icons-programs/hero.png";
import styles from "@/styles/ProgramHero.module.css";

interface ProgramHeroProps {
  image: string;
  gradient?: string;
  title: string;
  description: string;
  breadcrumbLabels?: string[];
}

export const ProgramHero = ({
  image,
  gradient,
  title,
  description,
  breadcrumbLabels = ["PROGRAMS", "WORSHIP"],
}: ProgramHeroProps) => {
  return (
    <section className={styles.heroSection} aria-labelledby="program-hero-title">
      <div className={styles.background} aria-hidden="true">
        <img className={styles.backgroundImage} src={image} alt="" />
        {gradient && <img className={styles.gradient} src={gradient} alt="" />}
      </div>

      <div className={styles.content}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumbs">
          {breadcrumbLabels.map((label, idx) => (
            <div key={label} className={styles.breadcrumbItem}>
              {idx > 0 && (
                <img
                  src={breadcrumbIcon}
                  alt=""
                  aria-hidden="true"
                  className={styles.icon}
                />
              )}
              <span className={styles.breadcrumbLabel}>{label}</span>
            </div>
          ))}
        </nav>

        <h1 id="program-hero-title" className={styles.title}>
          {title}
        </h1>

        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default ProgramHero;
