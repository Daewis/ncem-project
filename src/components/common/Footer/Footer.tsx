import logo from "@/assets/programs/new-creature-logo.png";
import classes from "./Footer.module.css";

type NavKey = "home" | "about" | "programs" | "events";
type ConnectKey = "locations" | "resources" | "contact";

interface FooterProps {
  activeNav?: NavKey;
  activeConnect?: ConnectKey;
}

const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "events", label: "Events", href: "/events" },
];

const connectItems: { key: ConnectKey; label: string; href: string }[] = [
  { key: "locations", label: "Locations", href: "/locations" },
  { key: "resources", label: "Resources", href: "/resources" },
  { key: "contact", label: "Contact", href: "/contact" },
];

const legalItems = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const Footer = ({ activeNav, activeConnect }: FooterProps) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContentWrapper}>
        <div className={classes.footerContent}>
          {/* Brand Info */}
          <div className={classes.brandColumn}>
            <a href="/" className={classes.logoLink} aria-label="NCEM Home">
              <img src={logo} alt="" className={classes.logoImage} />
              <span className={classes.logoText}>NCEM</span>
            </a>
            <p className={classes.description}>
              Illuminating paths, fostering connections, and serving with purpose.
            </p>
          </div>

          {/* Navigation */}
          <div className={classes.linkColumn}>
            <h4 className={classes.columnHeading}>Navigation</h4>
            <ul className={classes.linkList}>
              {navItems.map((item) => {
                const isActive = item.key === activeNav;
                return (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className={`${classes.link} ${isActive ? classes.activeLink : ""}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connect */}
          <div className={classes.linkColumn}>
            <h4 className={classes.columnHeading}>Connect</h4>
            <ul className={classes.linkList}>
              {connectItems.map((item) => {
                const isActive = item.key === activeConnect;
                return (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className={`${classes.link} ${isActive ? classes.activeLink : ""}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div className={classes.linkColumn}>
            <h4 className={classes.columnHeading}>Legal</h4>
            <ul className={classes.linkList}>
              {legalItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={classes.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={classes.copyrightSection}>
        <p className={classes.copyright}>
          © 2026 New Creature Evangelical Ministry. Built by Tech Disciples
        </p>
      </div>
    </footer>
  );
};

export default Footer;