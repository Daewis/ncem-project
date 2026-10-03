import { useState, useMemo, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { branches, districts } from "@/data/locationsData";
import styles from "./ChurchLocatorHeroSection.module.css";
import searchIcon from "@/assets/locations/iconChurchLocator/icon.svg";
import locationIcon from "@/assets/locations/iconChurchLocator/image.svg";

export const ChurchLocatorHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationStatus, setLocationStatus] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Filter both districts and branches matching the query
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return { matchedDistricts: [], matchedBranches: [] };

    const matchedDistricts = districts.filter((d) =>
      d.name.toLowerCase().includes(q)
    );

    const matchedBranches = branches.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.addressShort.toLowerCase().includes(q) ||
        b.addressFull.toLowerCase().includes(q)
    );

    return { matchedDistricts, matchedBranches };
  }, [searchQuery]);

  const hasResults =
    searchResults.matchedDistricts.length > 0 ||
    searchResults.matchedBranches.length > 0;

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocationStatus(
      searchQuery.trim()
        ? `Searching for churches near ${searchQuery.trim()}.`
        : "Enter a district, branch, or city to search for a church."
    );
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Location services are not supported by this browser.");
      return;
    }

    setLocationStatus("Finding your location...");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setSearchQuery(`${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`);
        setLocationStatus("Your current location has been added to the search field.");
      },
      () => {
        setLocationStatus(
          "We could not access your location. Please search by district, branch, or city."
        );
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  };

  return (
    <section className={styles.heroSection} aria-labelledby="church-locator-heading">
      <h1 id="church-locator-heading" className={styles.title}>
        Find a Church Near You
      </h1>

      <p className={styles.description}>
        Connect with a local branch of Divine Light Ministry. Discover worship times,
        community programs, and a welcoming family near you.
      </p>

      <form className={styles.searchForm} onSubmit={handleSearch} role="search">
        <label className={styles.srOnly} htmlFor="church-location-search">
          Search district, branch, or city
        </label>

        <div className={styles.searchIconWrapper} aria-hidden="true">
          <img className={styles.searchIcon} alt="" src={searchIcon} />
        </div>

        <input
          id="church-location-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search district, branch or city"
          autoComplete="off"
          className={styles.searchInput}
        />

        <button
          type="button"
          className={styles.locationButton}
          onClick={handleUseLocation}
        >
          <img
            src={locationIcon}
            alt=""
            aria-hidden="true"
            className={styles.locationIcon}
          />
          <span className={styles.locationButtonText}>Use My Location</span>
        </button>

        {/* Live Search Results Dropdown */}
        {isFocused && searchQuery.trim().length > 0 && (
          <div className={styles.resultsDropdown}>
            {!hasResults ? (
              <p className={styles.noResults}>No districts or branches found.</p>
            ) : (
              <>
                {searchResults.matchedDistricts.map((district) => (
                  <Link
                    key={district.slug}
                    to={`/locations/${district.slug}`}
                    className={styles.resultItem}
                  >
                    <span className={styles.resultBadge}>District</span>
                    <span className={styles.resultTitle}>{district.name}</span>
                  </Link>
                ))}

                {searchResults.matchedBranches.map((branch) => (
                  <Link
                    key={branch.slug}
                    to={`/locations/${branch.districtSlug}/${branch.slug}`}
                    className={styles.resultItem}
                  >
                    <span className={styles.resultBadge}>Branch</span>
                    <div className={styles.branchInfo}>
                      <span className={styles.resultTitle}>{branch.name}</span>
                      <span className={styles.resultSubtitle}>{branch.addressShort}</span>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        )}

        <p className={styles.srOnly} role="status" aria-live="polite">
          {locationStatus}
        </p>
      </form>
    </section>
  );
};

export default ChurchLocatorHeroSection;