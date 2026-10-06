import logo from "@/assets/programs/new-creature-logo.png";
import styles from "./TopNavBar.module.css";

export type NavKey =
  | "home"
  | "about"
  | "programs"
  | "events"
  | "locations"
  | "resources"
  | "contact";

interface TopNavBarProps {
  active?: NavKey;
}

const navLinks: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "events", label: "Events", href: "/events" },
  { key: "locations", label: "Locations", href: "/locations" },
  { key: "resources", label: "Resources", href: "/resources" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export const TopNavBar = ({ active }: TopNavBarProps) => {
  const isHome = active === "home";
  const isLocations = active === "locations";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.brand} aria-label="NCEM Home">
          <img src={logo} alt="NCEM Logo" className={styles.logo} />
          <span className={styles.brandName}>NCEM</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className={styles.navLinks}>
            {navLinks.map((link) => {
              const isActive = link.key === active;
              return (
                <li key={link.key}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`${styles.link} ${isActive ? styles.activeLink : ""}`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className={styles.activeLine} aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actionArea}>
          {isHome ? (
            <a href="/online-giving" className={styles.ctaButtonGold}>
              Give Now
            </a>
          ) : !isLocations ? (
            <a href="/locations" className={styles.findChurchButton}>
              Find a Church
            </a>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;