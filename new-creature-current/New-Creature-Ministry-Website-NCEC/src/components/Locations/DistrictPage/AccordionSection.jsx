import { useState } from "react";
import { Link } from "react-router-dom";
import { getBranchesForDistrict } from "../../../data/locationsData";
import chevronIcon from "../../../assets/locations/district/icon5.svg";

const AccordionSection = ({ otherDistricts }) => {
  const [openSlug, setOpenSlug] = useState(null);

  if (otherDistricts.length === 0) return null;

  const toggleAccordion = (slug) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section
      className="flex flex-col gap-6 lg:gap-8 max-w-7xl mx-auto px-4 lg:px-8 py-14 lg:py-[120px] w-full box-border"
      aria-labelledby="other-districts-heading"
    >
      <div className="flex flex-col w-full">
        <h2
          id="other-districts-heading"
          className="text-[#1e3a8a] font-semibold m-0"
          style={{ fontSize: "clamp(22px, 3vw, 30px)", lineHeight: "1.25" }}
        >
          Other Districts
        </h2>
      </div>

      <div className="border-t border-b border-[#c5c5d3] flex flex-col w-full">
        {otherDistricts.map((district) => {
          const isOpen = openSlug === district.slug;
          const districtBranches = getBranchesForDistrict(district.slug);

          return (
            <div key={district.slug} className="flex flex-col w-full border-b border-[#c5c5d3] last:border-b-0">
              <button
                type="button"
                className="flex justify-between items-center self-stretch w-full py-4 lg:py-6 bg-transparent border-none cursor-pointer text-left box-border transition-[padding-left] duration-150 hover:pl-2"
                onClick={() => toggleAccordion(district.slug)}
                aria-expanded={isOpen}
                aria-controls={`panel-${district.slug}`}
                id={`trigger-${district.slug}`}
              >
                <span
                  className="text-blue font-semibold"
                  style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "1.3" }}
                >
                  {district.name}
                </span>
                <span
                  className={`flex items-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <img
                    className="block w-3 h-2"
                    alt=""
                    aria-hidden="true"
                    src={chevronIcon}
                  />
                </span>
              </button>

              <div
                id={`panel-${district.slug}`}
                role="region"
                aria-labelledby={`trigger-${district.slug}`}
                className="grid transition-[grid-template-rows] duration-300 overflow-hidden"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  visibility: isOpen ? "visible" : "hidden",
                }}
              >
                <div className="min-h-0 overflow-hidden flex flex-col gap-4 pl-3 pb-0 transition-[padding-bottom] duration-300">
                  {isOpen && (
                    <>
                      {districtBranches.length === 0 ? (
                        <p className="text-offwhite text-sm m-0 pb-6">
                          No branches registered yet.
                        </p>
                      ) : (
                        <ul className="list-none m-0 p-0 flex flex-col gap-3 pb-6">
                          {districtBranches.map((branch) => (
                            <li key={branch.slug}>
                              <Link
                                to={`/locations/${district.slug}/${branch.slug}`}
                                className="flex flex-col items-start gap-1 no-underline p-3 bg-[#f9f9ff] border border-[#e7eefe] rounded transition-[background-color,border-color] duration-150 hover:bg-[#eef2ff] hover:border-[#c5c5d3] lg:flex-row lg:items-center lg:justify-between lg:p-2.5 lg:px-4"
                              >
                                <span className="font-semibold text-sm lg:text-[15px] text-[#1e3a8a]">
                                  {branch.name}
                                </span>
                                <span className="text-xs lg:text-[13px] text-[#6b7280]">
                                  {branch.addressShort}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      <Link
                        to={`/locations/${district.slug}`}
                        className="self-start font-semibold text-sm text-[#795900] no-underline mt-1 pb-6 hover:underline"
                      >
                        View District Overview →
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AccordionSection;
