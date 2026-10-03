import TopNavBar from "../components/common/TopNavBar/TopNavBar";
import Footer from "../components/common/Footer/Footer";
import { ProgramsHero } from "../components/sections/programs/ProgramsHero/ProgramsHero";
import { ProgramsGrid } from "../components/sections/programs/ProgramsGrid/ProgramsGrid";
import styles from "../styles/ProgramsPage.module.css";

export default function ProgramsPage() {
  return (
    <>
      <TopNavBar active="programs" />

      <main className={styles.main}>
        <ProgramsHero />
        <ProgramsGrid />
      </main>

      <Footer activeNav="programs" />
    </>
  );
}
