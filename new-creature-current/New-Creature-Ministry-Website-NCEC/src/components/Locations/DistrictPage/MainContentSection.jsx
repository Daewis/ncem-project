import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../../assets/locations/district/icon2.svg";
import basemapImage from "../../../assets/locations/district/image3.png";

const fillerPositions = [
  { top: "35%", left: "80%" },
  { top: "20%", left: "70%" },
  { top: "75%", left: "20%" },
];

const MainContentSection = ({ district, branches: branchList }) => {
  const [query, setQuery] = useState("");

  const filteredBranches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return branchList;
    return branchList.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.addressShort.toLowerCase().includes(q) ||
        b.pastorName.toLowerCase().includes(q)
    );
  }, [branchList, query]);

  const markedBranches = branchList.filter((b) => b.mapMarker);
  const unmarkedCount = branchList.filter((b) => !b.mapMarker).length;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,512px)_1fr] w-full max-w-7xl mx-auto pt-5 lg:pt-5 lg:min-h-[819px] relative box-border"
    >
      <aside className="flex flex-col bg-[#f9f9ff] border-r-0 lg:border-r border-[#c5c5d3] border-b lg:border-b-0 w-full box-border">
        <div className="flex flex-col gap-3 self-stretch bg-[#f9f9ff] border-b border-[#c5c5d3] p-5 lg:p-8 w-full box-border">
          <div className="flex flex-col w-full">
            <h1
              className="text-blue m-0 font-bold"
              style={{ fontSize: "clamp(26px, 4vw, 36px)", lineHeight: "1.1", letterSpacing: "-0.72px" }}
            >
              {district.name}
            </h1>
          </div>

          <div className="flex items-center gap-2 w-full">
            <svg
              className="w-3.5 h-4 text-[#795900] flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-offwhite text-sm lg:text-base leading-6">
              {branchList.length} {branchList.length === 1 ? "Branch" : "Branches"}
            </span>
          </div>

          <div className="flex flex-col w-full">
            <div className="relative flex items-center bg-white border border-[#c5c5d3] rounded shadow-sm overflow-hidden w-full box-border">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
                <img
                  className="w-4 h-4 object-contain"
                  alt=""
                  aria-hidden="true"
                  src={searchIcon}
                />
              </span>
              <input
                className="bg-transparent border-none text-[#151c27] flex-grow w-full py-3 pl-11 pr-4 text-base outline-none focus:outline-2 focus:outline-blue focus:outline-offset-[-2px] box-border"
                placeholder="Search this district..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={`Search branches in ${district.name}`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4 self-stretch p-4 lg:p-8 w-full box-border">
          {filteredBranches.length === 0 && (
            <p className="text-offwhite text-sm py-6">
              No branches match "{query}".
            </p>
          )}

          {filteredBranches.map((branch) => (
            <Link
              key={branch.slug}
              to={`/locations/${district.slug}/${branch.slug}`}
              className="flex flex-col gap-1 self-stretch bg-white border border-[#c5c5d3] rounded p-4 lg:p-6 w-full box-border no-underline text-inherit transition-[border-color,box-shadow] duration-150 hover:border-blue hover:shadow-sm"
            >
              <div className="flex flex-col w-full">
                <span className="text-blue font-semibold text-xl lg:text-2xl leading-7 lg:leading-8">
                  {branch.name}
                </span>
              </div>

              <div className="flex items-center gap-2 pb-3 w-full">
                <svg
                  className="w-3 h-3 flex-shrink-0"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7 10.5L3.5 9.275L0.7875 10.325C0.593056 10.4028 0.413194 10.3809 0.247917 10.2594C0.0826389 10.1378 0 9.975 0 9.77083V1.60417C0 1.47778 0.0364583 1.36597 0.109375 1.26875C0.182292 1.17153 0.281944 1.09861 0.408333 1.05L3.5 0L7 1.225L9.7125 0.175C9.90694 0.0972222 10.0868 0.119097 10.2521 0.240625C10.4174 0.362153 10.5 0.525 10.5 0.729167V8.89583C10.5 9.02222 10.4635 9.13403 10.3906 9.23125C10.3177 9.32847 10.2181 9.40139 10.0917 9.45L7 10.5ZM6.41667 9.07083V2.24583L4.08333 1.42917V8.25417L6.41667 9.07083ZM7.58333 9.07083L9.33333 8.4875V1.575L7.58333 2.24583V9.07083ZM1.16667 8.925L2.91667 8.25417V1.42917L1.16667 2.0125V8.925Z"
                    fill="#757682"
                  />
                </svg>
                <span className="text-offwhite text-sm lg:text-base leading-6">
                  {branch.addressShort}
                </span>
              </div>

              <div className="flex items-center self-stretch border-t border-[#dce2f3] gap-3 pt-4 w-full">
                {branch.pastorAvatar ? (
                  <img
                    className="bg-[#e7eefe] rounded-lg w-9 h-9 lg:w-10 lg:h-10 flex-shrink-0 object-cover"
                    src={branch.pastorAvatar}
                    alt=""
                    aria-hidden="true"
                  />
                ) : (
                  <div className="bg-[#e7eefe] rounded-lg w-9 h-9 lg:w-10 lg:h-10 flex-shrink-0" />
                )}
                <div className="flex flex-col">
                  <span className="text-[#151c27] font-semibold text-sm leading-5 tracking-wide">
                    {branch.pastorName}
                  </span>
                  <span className="text-[#757682] text-xs leading-4">
                    Lead Pastor
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      <div
        className="relative w-full bg-[#dce2f3] overflow-hidden h-[320px] lg:h-auto lg:min-h-[819px]"
        aria-label="District branch map"
      >
        <img
          src={basemapImage}
          alt="Map area"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60"
          loading="lazy"
        />

        {markedBranches.map((branch) => (
          <img
            key={branch.slug}
            src={branch.mapMarker.icon}
            alt={branch.name}
            className="absolute h-12 w-auto cursor-pointer"
            style={{
              left: branch.mapMarker.left,
              top: branch.mapMarker.top,
              transform: "translate(-50%, -100%)",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
            }}
          />
        ))}

        {fillerPositions.slice(0, unmarkedCount).map((pos, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-[#f9bd22] opacity-60 border border-white rounded-full"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContentSection;
