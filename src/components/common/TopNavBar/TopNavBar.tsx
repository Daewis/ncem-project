import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/programs/new-creature-logo.png";
import { branches } from "@/data/locationsData";
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
  variant?: "branch" | "district";
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

export const TopNavBar = ({ active, variant }: TopNavBarProps) => {
  const isHome = active === "home";
  const isLocations = active === "locations";

  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const matches =
    q.length > 0
      ? branches
          .filter(
            (b) =>
              b.name.toLowerCase().includes(q) ||
              b.addressShort.toLowerCase().includes(q) ||
              b.pastorName.toLowerCase().includes(q)
          )
          .slice(0, 6)
      : [];

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  const goToBranch = (slug: string, districtSlug: string) => {
    navigate(`/locations/${districtSlug}/${slug}`);
    setSearchOpen(false);
    setQuery("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matches.length > 0) {
      goToBranch(matches[0].slug, matches[0].districtSlug);
    } else if (q.length > 0) {
      navigate(`/locations`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand} aria-label="NCEM Home">
          <img src={logo} alt="NCEM Logo" className={styles.logo} />
          <span className={styles.brandName}>NCEM</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className={styles.navLinks}>
            {navLinks.map((link) => {
              const isActive = link.key === active;
              return (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`${styles.link} ${isActive ? styles.activeLink : ""}`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span
                        className={`${styles.activeLine} ${
                          variant === "branch" ? styles.activeLineGold2 : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actionArea}>
          {variant === "branch" && (
            <div className={styles.searchWrapper} ref={wrapperRef}>
              <button
                type="button"
                className={styles.searchIconButton}
                aria-label="Search branches"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((v) => !v)}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.9167 11.6667H12.0917L11.8 11.3833C12.8083 10.2083 13.4167 8.68333 13.4167 7.02083C13.4167 3.34167 10.4333 0.358337 6.75417 0.358337C3.075 0.358337 0.0916748 3.34167 0.0916748 7.02083C0.0916748 10.7 3.075 13.6833 6.75417 13.6833C8.41667 13.6833 9.94167 13.075 11.1167 12.0667L11.4 12.3583V13.1833L16.4167 18.1917L17.925 16.6833L12.9167 11.6667ZM6.75417 11.6667C4.175 11.6667 2.09167 9.58333 2.09167 7.02083C2.09167 4.45833 4.175 2.375 6.75417 2.375C9.33333 2.375 11.4167 4.45833 11.4167 7.02083C11.4167 9.58333 9.33333 11.6667 6.75417 11.6667Z"
                    fill="#444651"
                  />
                </svg>
              </button>

              {searchOpen && (
                <form className={styles.searchDropdown} onSubmit={handleSubmit}>
                  <input
                    ref={inputRef}
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search branches..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search branches by name, address, or pastor"
                  />
                  {q.length > 0 && (
                    <ul className={styles.searchResults}>
                      {matches.length === 0 ? (
                        <li className={styles.searchNoResults}>No branches match "{query}"</li>
                      ) : (
                        matches.map((b) => (
                          <li key={b.slug}>
                            <button
                              type="button"
                              className={styles.searchResultItem}
                              onClick={() => goToBranch(b.slug, b.districtSlug)}
                            >
                              <span className={styles.searchResultName}>{b.name}</span>
                              <span className={styles.searchResultAddress}>{b.addressShort}</span>
                            </button>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </form>
              )}
            </div>
          )}

          {variant === "branch" ? (
            <Link to="/join" className={styles.joinUsButtonNavy}>
              Join Us
            </Link>
          ) : variant === "district" ? (
            <Link to="/join" className={styles.joinUsButtonGold}>
              Join Us
            </Link>
          ) : isHome ? (
            <Link to="/online-giving" className={styles.ctaButtonGold}>
              Give Now
            </Link>
          ) : !isLocations ? (
            <Link to="/locations" className={styles.findChurchButton}>
              Find a Church
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;