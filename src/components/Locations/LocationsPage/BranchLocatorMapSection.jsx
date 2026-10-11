import { useState } from "react";
import { Link } from "react-router-dom";
import { districts, branches, getDistrictBySlug } from "../../../data/locationsData";
import basemapImage from "../../../assets/locations/iconBranchLocator/basemap-image.png";
import icon4 from "../../../assets/locations/iconBranchLocator/icon4.svg";
import icon5 from "../../../assets/locations/iconBranchLocator/icon5.svg";
import icon6 from "../../../assets/locations/iconBranchLocator/icon6.svg";

const BranchLocatorMapSection = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-[380px_1fr] w-full max-w-7xl mx-auto gap-6 lg:gap-8 px-4 lg:px-0 pb-12 lg:pb-[120px] box-border"
      aria-labelledby="branches-heading"
    >
      <aside className="flex flex-col bg-white border border-[#c5c5d3] rounded-lg overflow-hidden shadow-sm">
        <header className="p-6 bg-[#f0f3ff] border-b border-[#c5c5d3]">
          <h2 id="branches-heading" className="m-0 font-semibold text-blue text-2xl leading-8">
            Branches
          </h2>
          <p className="mt-1 text-base leading-6 text-offwhite">
            Showing locations near you
          </p>
        </header>

        <div
          className="flex flex-col gap-4 p-4 max-h-[460px] lg:max-h-[600px] overflow-y-auto"
          aria-label="Nearby branch locations"
        >
          {branches.map((branch) => {
            const district = getDistrictBySlug(branch.districtSlug);

            return (
              <article
                key={branch.slug}
                className="flex flex-col gap-3 p-5 bg-white border border-[#c5c5d3] rounded-md transition-[border-color,background-color] duration-200"
              >
                <div className="flex justify-between items-start gap-2">
                  <h3 className="m-0 font-semibold text-blue text-lg leading-6">
                    {branch.name}
                  </h3>
                  {district && (
                    <span className="inline-flex px-3 py-1 bg-[#e2e8f8] rounded-xl text-xs leading-4 text-blue">
                      {district.name}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src={icon4}
                    alt=""
                    aria-hidden="true"
                    className="w-3.5 h-3.5 object-contain opacity-70"
                  />
                  <p className="m-0 text-sm leading-5 text-offwhite">
                    {branch.addressShort}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[rgba(197,197,211,0.5)]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#e2e8f8] rounded-lg">
                      <img
                        src={icon5}
                        alt=""
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                      />
                    </div>
                    <span className="text-sm font-medium text-offwhite">
                      {branch.pastorName}
                    </span>
                  </div>

                  <Link
                    to={`/locations/${branch.districtSlug}/${branch.slug}`}
                    className="inline-flex items-center gap-1.5 bg-transparent border-none px-2.5 py-1.5 text-sm font-semibold text-blue cursor-pointer rounded-md transition-colors duration-150 hover:bg-[rgba(226,232,248,0.6)]"
                    aria-label={`View ${branch.name}`}
                  >
                    <span>View Branch</span>
                    <img
                      src={icon6}
                      alt=""
                      aria-hidden="true"
                      className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </aside>

      <div
        className="relative w-full min-h-[360px] lg:min-h-[520px] bg-[#e2e8f8] border border-[#c5c5d3] rounded-lg overflow-hidden"
        role="region"
        aria-label="Map showing branch locations"
      >
        <img
          src={basemapImage}
          alt="Basemap of locations"
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        />

        <div
          className="absolute top-4 right-4 flex flex-col gap-2 z-10"
          aria-label="Zoom controls"
        >
          <button
            type="button"
            className="w-10 h-10 bg-white border-none rounded shadow-sm flex items-center justify-center cursor-pointer text-offwhite transition-colors duration-150 hover:bg-[#f8f9fa]"
            onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2))}
            aria-label="Zoom in"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1V13M1 7H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="w-10 h-10 bg-white border-none rounded shadow-sm flex items-center justify-center cursor-pointer text-offwhite transition-colors duration-150 hover:bg-[#f8f9fa]"
            onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
            aria-label="Zoom out"
          >
            <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
              <path
                d="M1 1H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BranchLocatorMapSection;
