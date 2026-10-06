import { Link } from "react-router-dom";

const OtherChurchesSection = ({ currentDistrict, nearbyBranches }) => {
  if (nearbyBranches.length === 0) return null;

  return (
    <section
      className="flex flex-col bg-[#f0f3ff] py-14 lg:py-24 px-4 lg:px-6 w-full box-border"
      aria-labelledby="other-locations-heading"
    >
      <div className="flex flex-col gap-8 lg:gap-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-2">
          <span className="text-[#1e3a8a] font-semibold text-sm tracking-wide">
            {currentDistrict.name.toUpperCase()}
          </span>
          <h2
            id="other-locations-heading"
            className="text-[#151c27] font-semibold m-0"
            style={{ fontSize: "clamp(22px, 3vw, 30px)", lineHeight: "1.25" }}
          >
            Other Locations Nearby
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
          {nearbyBranches.map((branch) => (
            <Link
              key={branch.slug}
              to={`/locations/${branch.districtSlug}/${branch.slug}`}
              className="group flex flex-col bg-white border border-[rgba(197,197,211,0.3)] rounded-lg overflow-hidden w-full no-underline text-inherit shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md"
            >
              <img
                src={branch.cardImage}
                alt={branch.name}
                loading="lazy"
                className="w-full object-cover object-center block"
                style={{
                  height: "180px",
                  background:
                    "linear-gradient(135deg, #dce1ff 0%, #e7eefe 100%)",
                }}
              />
              <div className="flex flex-col p-4 lg:p-6 gap-1 w-full box-border">
                <h3
                  className="text-[#151c27] font-semibold m-0 mb-1.5"
                  style={{ fontSize: "clamp(20px, 2vw, 24px)", lineHeight: "1.3" }}
                >
                  {branch.name}
                </h3>

                <p className="text-offwhite text-sm lg:text-base leading-6 m-0 mb-3 flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.6 12L4.7 7.3L0 5.4V4.46667L12 0L7.53333 12H6.6ZM7.03333 9.53333L9.73333 2.26667L2.46667 4.96667L5.73333 6.26667L7.03333 9.53333Z"
                      fill="#757682"
                    />
                  </svg>
                  <span>{branch.addressShort}</span>
                </p>

                <div className="flex items-center gap-1">
                  <span className="text-blue font-semibold text-sm tracking-wide">
                    View Location
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z"
                      fill="#00236F"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherChurchesSection;
