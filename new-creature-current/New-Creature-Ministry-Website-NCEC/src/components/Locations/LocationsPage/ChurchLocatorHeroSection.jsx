import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { branches, districts } from "../../../data/locationsData";
import searchIcon from "../../../assets/locations/iconChurchLocator/icon.svg";
import locationIcon from "../../../assets/locations/iconChurchLocator/image.svg";

const ChurchLocatorHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationStatus, setLocationStatus] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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

  const handleSearch = (event) => {
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
    <section
      className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 md:px-6 pt-24 pb-16 gap-6 text-center box-border"
      aria-labelledby="church-locator-heading"
    >
      <h1
        id="church-locator-heading"
        className="m-0 max-w-3xl font-bold text-blue"
        style={{ fontSize: "clamp(28px, 5vw, 48px)", lineHeight: "1.15", letterSpacing: "-0.96px" }}
      >
        Find a Church Near You
      </h1>

      <p
        className="m-0 max-w-2xl text-offwhite"
        style={{ fontSize: "clamp(14px, 2vw, 18px)", lineHeight: "1.55" }}
      >
        Connect with a local branch of Divine Light Ministry. Discover worship times,
        community programs, and a welcoming family near you.
      </p>

      <form
        className="relative flex items-center w-full max-w-3xl mt-2 box-border"
        onSubmit={handleSearch}
        role="search"
      >
        <label className="sr-only" htmlFor="church-location-search">
          Search district, branch, or city
        </label>

        <div
          className="absolute left-4 md:left-4 flex items-center justify-center w-4 h-4 pointer-events-none"
          aria-hidden="true"
        >
          <img className="w-full h-full object-contain opacity-70" alt="" src={searchIcon} />
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
          className="w-full bg-white border border-[#C5C5D3] rounded-xl shadow-sm outline-none box-border text-[#151C27] transition-[border-color,box-shadow] duration-150"
          style={{
            height: "56px",
            padding: "14px 120px 14px 44px",
            fontSize: "15px",
          }}
        />

        <button
          type="button"
          className="absolute right-2 md:right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 h-8 md:h-9 px-2.5 md:px-4 bg-transparent border-none rounded-xl cursor-pointer transition-colors duration-150 hover:bg-[rgba(226,232,248,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"
          onClick={handleUseLocation}
        >
          <img
            src={locationIcon}
            alt=""
            aria-hidden="true"
            className="w-4 h-4 object-contain"
          />
          <span
            className="font-semibold text-blue whitespace-nowrap"
            style={{ fontSize: "11px", letterSpacing: "0.7px" }}
          >
            <span className="hidden xs:inline">Use My Location</span>
            <span className="xs:hidden">Locate</span>
          </span>
        </button>

        {/* Live Search Results Dropdown */}
        {isFocused && searchQuery.trim().length > 0 && (
          <div
            className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-[#C5C5D3] rounded-xl shadow-lg max-h-[280px] overflow-y-auto z-50 flex flex-col text-left box-border"
          >
            {!hasResults ? (
              <p className="m-0 p-4 text-sm text-[#757682] text-center">
                No districts or branches found.
              </p>
            ) : (
              <>
                {searchResults.matchedDistricts.map((district) => (
                  <Link
                    key={district.slug}
                    to={`/locations/${district.slug}`}
                    className="flex items-center gap-3 px-4 py-3.5 no-underline text-inherit border-b border-b-[#ECECF2] last:border-b-0 transition-colors duration-150 hover:bg-[#F9F9FF]"
                  >
                    <span className="font-semibold text-[11px] uppercase tracking-wide text-[#795900] bg-[#FFF9E6] border border-[#F9BD22] rounded px-1.5 py-0.5 flex-shrink-0">
                      District
                    </span>
                    <span className="text-[15px] font-semibold text-blue whitespace-nowrap">
                      {district.name}
                    </span>
                  </Link>
                ))}

                {searchResults.matchedBranches.map((branch) => (
                  <Link
                    key={branch.slug}
                    to={`/locations/${branch.districtSlug}/${branch.slug}`}
                    className="flex items-center gap-3 px-4 py-3.5 no-underline text-inherit border-b border-b-[#ECECF2] last:border-b-0 transition-colors duration-150 hover:bg-[#F9F9FF]"
                  >
                    <span className="font-semibold text-[11px] uppercase tracking-wide text-[#795900] bg-[#FFF9E6] border border-[#F9BD22] rounded px-1.5 py-0.5 flex-shrink-0">
                      Branch
                    </span>
                    <div className="flex flex-col items-start gap-0.5 overflow-hidden">
                      <span className="text-[15px] font-semibold text-blue whitespace-nowrap">
                        {branch.name}
                      </span>
                      <span className="text-[13px] text-[#757682] whitespace-nowrap overflow-hidden text-ellipsis">
                        {branch.addressShort}
                      </span>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        )}

        <p className="sr-only" role="status" aria-live="polite">
          {locationStatus}
        </p>
      </form>
    </section>
  );
};

export default ChurchLocatorHeroSection;
