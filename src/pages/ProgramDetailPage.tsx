import { useParams, Link } from "react-router-dom";
import TopNavBar from "../components/common/TopNavBar/TopNavBar";
import Footer from "../components/common/Footer/Footer";
import { ProgramHero } from "../components/sections/programs/ProgramHero/ProgramHero";
import { SectionMainContent } from "../components/sections/programs/ServiceDetails/ServiceDetails";
import { SectionRelated } from "../components/sections/programs/RelatedPrograms/RelatedPrograms";
import { getProgramBySlug } from "../data/programsData";
import styles from "../styles/ProgramsPage.module.css";

export default function ProgramDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  const hasContent = !!program?.aboutParagraphs?.length;

  if (!program || !hasContent) {
    return (
      <>
        <TopNavBar active="programs" />
        <main
          className={styles.main}
          style={{ padding: "160px 24px", textAlign: "center", gap: 16 }}
        >
          <h1>Program not found</h1>
          <p>We couldn't find the program you're looking for.</p>
          <Link to="/programs">Back to Programs</Link>
        </main>
        <Footer activeNav="programs" />
      </>
    );
  }

  return (
    <>
      <TopNavBar active="programs" />

      <main className={styles.main}>
        <ProgramHero
          image={program.heroImage}
          gradient={program.heroGradient}
          title={program.title}
          description={program.heroDescription}
          breadcrumbLabels={program.breadcrumbLabels}
        />
        <SectionMainContent
          serviceDetails={program.serviceDetails}
          aboutParagraphs={program.aboutParagraphs}
          expectations={program.expectations}
          upcomingDates={program.upcomingDates}
        />
        <SectionRelated currentSlug={program.slug} />
      </main>

      <Footer activeNav="programs" />
    </>
  );
}