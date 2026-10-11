import basemapImage from "../../../assets/locations/branch/image1.png";

const DEFAULT_DESCRIPTION =
  "A welcoming community in the heart of the city, dedicated to spiritual growth and service.";

const HeroSection = ({ branch, districtName }) => {
  if (!branch) return null;

  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    branch.addressFull
  )}`;
  const mapsHref = branch.mapLink ?? directionsHref;

  return (
    <section
      className="relative w-full flex items-center justify-center box-border isolation-isolate px-4 sm:px-6 lg:px-8"
      style={{
        paddingTop: "clamp(96px, 18vw, 267px)",
        paddingBottom: "clamp(56px, 12vw, 187px)",
      }}
      aria-labelledby="branch-hero-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={basemapImage}
          alt=""
        />
        <div className="absolute inset-0 bg-[#00236f66] mix-blend-multiply" />
      </div>

      <div className="relative flex flex-col items-center gap-4 max-w-2xl text-center px-2">
        <p
          className="text-[#ffc329] font-semibold uppercase tracking-[1.4px] m-0"
          style={{ fontSize: "clamp(11px, 1.5vw, 14px)", lineHeight: "20px" }}
        >
          {districtName}
        </p>

        <h1
          id="branch-hero-title"
          className="text-white font-bold uppercase m-0"
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            lineHeight: "1.15",
            letterSpacing: "-0.96px",
          }}
        >
          {branch.name}
        </h1>

        <p
          className="text-white/90 m-0"
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "1.55",
            maxWidth: "100%",
          }}
        >
          {branch.heroDescription ?? DEFAULT_DESCRIPTION}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 w-full sm:w-auto sm:gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-xl px-5 lg:px-8 py-3 font-semibold text-[#6f5100] no-underline bg-[#ffc329] shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#ffcf52] w-full sm:w-auto justify-center"
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 13H8V10H11.5V12.5L15 9L11.5 5.5V8H7C6.71667 8 6.47917 8.09583 6.2875 8.2875C6.09583 8.47917 6 8.71667 6 9V13ZM10 20C9.75 20 9.50417 19.95 9.2625 19.85C9.02083 19.75 8.8 19.6 8.6 19.4L0.6 11.4C0.4 11.2 0.25 10.9792 0.15 10.7375C0.05 10.4958 0 10.25 0 10C0 9.75 0.05 9.50417 0.15 9.2625C0.25 9.02083 0.4 8.8 0.6 8.6L8.6 0.6C8.8 0.4 9.02083 0.25 9.2625 0.15C9.50417 0.05 9.75 0 10 0C10.25 0 10.4958 0.05 10.7375 0.15C10.9792 0.25 11.2 0.4 11.4 0.6L19.4 8.6C19.6 8.8 19.75 9.02083 19.85 9.2625C19.95 9.50417 20 9.75 20 10C20 10.25 19.95 10.4958 19.85 10.7375C19.75 10.9792 19.6 11.2 19.4 11.4L11.4 19.4C11.2 19.6 10.9792 19.75 10.7375 19.85C10.4958 19.95 10.25 20 10 20ZM6 14L10 18L18 10L10 2L2 10L6 14Z"
                fill="#6F5100"
              />
            </svg>
            <span style={{ fontSize: "14px", letterSpacing: "0.7px" }}>Get Directions</span>
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-xl px-5 lg:px-8 py-3 font-semibold text-white no-underline bg-white/10 border border-white/30 backdrop-blur-[2px] transition-colors duration-150 hover:bg-white/20 w-full sm:w-auto justify-center"
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 18L6 15.9L1.35 17.7C1.01667 17.8333 0.708333 17.7958 0.425 17.5875C0.141667 17.3792 0 17.1 0 16.75V2.75C0 2.53333 0.0625 2.34167 0.1875 2.175C0.3125 2.00833 0.483333 1.88333 0.7 1.8L6 0L12 2.1L16.65 0.3C16.9833 0.166667 17.2917 0.204167 17.575 0.4125C17.8583 0.620833 18 0.9 18 1.25V15.25C18 15.4667 17.9375 15.6583 17.8125 15.825C17.6875 15.9917 17.5167 16.1167 17.3 16.2L12 18ZM11 15.55V3.85L7 2.45V14.15L11 15.55ZM13 15.55L16 14.55V2.7L13 3.85V15.55ZM2 15.3L5 14.15V2.45L2 3.45V15.3Z"
                fill="white"
              />
            </svg>
            <span style={{ fontSize: "14px", letterSpacing: "0.7px" }}>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
