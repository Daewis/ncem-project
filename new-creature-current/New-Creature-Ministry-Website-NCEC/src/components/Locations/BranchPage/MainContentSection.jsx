import { Link } from "react-router-dom";
import basemapImage from "../../../assets/locations/branch/image2.png";
import pastorImage from "../../../assets/locations/branch/image3.png";

const MainContentSection = ({ branch }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] w-full max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 gap-4 lg:gap-12 box-border">
      <div className="flex flex-col gap-4 lg:gap-6 w-full">
        <div className="flex flex-col bg-white border border-[rgba(197,197,211,0.3)] rounded-lg overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-5 lg:p-8 border-b border-[#e5e5ee]">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#151c27] font-semibold m-0" style={{ fontSize: "clamp(22px, 3vw, 30px)", lineHeight: "1.25" }}>
                Find Us
              </h2>
              <div className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
                      fill="#757682"
                    />
                  </svg>
                </span>
                <p className="m-0 text-sm lg:text-base text-offwhite leading-6">
                  {branch.addressFull}
                </p>
              </div>
            </div>
            {branch.mapLink && (
              <a
                className="inline-flex items-center justify-center flex-shrink-0"
                href={branch.mapLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${branch.name} location in maps`}
              >
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z"
                    fill="#1E3A8A"
                  />
                </svg>
              </a>
            )}
          </div>
          <div className="w-full h-[220px] lg:h-[280px] overflow-hidden bg-[#e2e8f8]">
            <img
              className="w-full h-full object-cover"
              src={basemapImage}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-start gap-4 lg:gap-6 p-5 lg:p-8 bg-white border border-[rgba(197,197,211,0.3)] rounded-lg">
          <div className="w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 bg-[#e2e8f8] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={pastorImage}
              alt={branch.pastorName}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <h3 className="text-[#151c27] font-semibold m-0" style={{ fontSize: "clamp(20px, 2.5vw, 24px)", lineHeight: "1.3" }}>
              {branch.pastorName}
            </h3>
            {branch.pastorRole && (
              <p className="m-0 text-offwhite text-sm lg:text-base leading-6">
                {branch.pastorRole}
              </p>
            )}
            {branch.pastorBio && (
              <p className="m-0 text-offwhite text-sm lg:text-base leading-6">
                {branch.pastorBio}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-6 w-full">
        {branch.serviceTimes && branch.serviceTimes.length > 0 && (
          <div className="flex flex-col gap-4 lg:gap-6 p-5 lg:p-8 bg-white border border-[rgba(197,197,211,0.5)] rounded-lg box-border">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2167 18 14.1042 17.2208 15.6625 15.6625C17.2208 14.1042 18 12.2167 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18Z"
                    fill="#FFC329"
                  />
                </svg>
              </span>
              <h3 className="text-[#151c27] font-semibold m-0 text-xl lg:text-2xl">
                Service Times
              </h3>
            </div>
            <div className="flex flex-col">
              {branch.serviceTimes.map((service, i) => (
                <div
                  key={service.label}
                  className={`flex items-center justify-between w-full py-3 ${i === 0 ? "border-t border-[#e5e5ee]" : "border-t border-[#e5e5ee]"}`}
                >
                  <span className="text-offwhite text-sm lg:text-base">{service.label}</span>
                  {service.time && (
                    <p className="m-0 text-offwhite text-sm lg:text-base font-medium">
                      {service.time}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {branch.upcomingEvent && (
          <div className="flex flex-col gap-3 p-5 lg:p-6 bg-white border border-[rgba(197,197,211,0.5)] rounded-lg box-border min-w-0">
            <div className="flex items-center gap-2">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 16C10.8 16 10.2083 15.7583 9.725 15.275C9.24167 14.7917 9 14.2 9 13.5C9 12.8 9.24167 12.2083 9.725 11.725C10.2083 11.2417 10.8 11 11.5 11C12.2 11 12.7917 11.2417 13.275 11.725C13.7583 12.2083 14 12.8 14 13.5C14 14.2 13.7583 14.7917 13.275 15.275C12.7917 15.7583 12.2 16 11.5 16ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z"
                  fill="#261A00"
                />
              </svg>
              <h4 className="text-[#151c27] font-semibold m-0 text-base">Upcoming Event</h4>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-offwhite font-medium">{branch.upcomingEvent.name}</span>
              <span className="text-offwhite text-sm">{branch.upcomingEvent.date}</span>
            </div>
            {branch.upcomingEvent.linkTo && (
              <Link
                to={branch.upcomingEvent.linkTo}
                className="inline-flex items-center gap-1.5 no-underline text-blue font-semibold text-sm mt-1"
              >
                <span>View Details</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z"
                    fill="#00236F"
                  />
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContentSection;
