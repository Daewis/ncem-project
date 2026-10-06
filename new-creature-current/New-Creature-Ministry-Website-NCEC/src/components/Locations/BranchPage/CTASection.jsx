import icon from "../../../assets/locations/branch/icon1.svg";

const CTASection = ({ branch }) => {
  const venueName = branch.ctaVenueName ?? branch.name;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    branch.addressFull
  )}`;

  return (
    <section
      className="relative flex flex-col items-center bg-[#1e3a8a] rounded-xl lg:rounded-2xl overflow-hidden px-4 lg:px-6 py-12 lg:py-16 w-full max-w-7xl mx-auto box-border"
      aria-labelledby="branch-cta-heading"
    >
      <div
        className="absolute bg-[rgba(144,168,255,0.1)] rounded-xl blur-8 lg:blur-[32px] pointer-events-none"
        style={{
          height: "180px",
          width: "180px",
          right: "-40px",
          top: "-80px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bg-[rgba(255,195,41,0.1)] rounded-xl blur-5 lg:blur-[20px] pointer-events-none"
        style={{
          height: "140px",
          width: "140px",
          left: "-32px",
          bottom: "-32px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center max-w-2xl mx-auto w-full z-10">
        <div className="pb-4">
          <div className="inline-flex items-center justify-center">
            <img className="h-10 lg:h-auto w-10 lg:w-[42px]" alt="Icon" src={icon} />
          </div>
        </div>

        <h2
          id="branch-cta-heading"
          className="text-white text-center font-semibold m-0 mb-3"
          style={{ fontSize: "clamp(22px, 3vw, 30px)", lineHeight: "1.25", letterSpacing: "-0.3px" }}
        >
          Ready to Visit Us?
        </h2>

        <p className="text-white/80 text-center m-0 mb-6" style={{ fontSize: "clamp(16px, 2vw, 18px)", lineHeight: "1.55" }}>
          We can't wait to welcome you to {venueName} this Sunday.
        </p>

        <a
          href={directionsHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#ffc329] text-[#6f5100] font-semibold rounded-xl px-6 py-3 no-underline shadow-sm transition-[background-color,transform] duration-150 hover:bg-[#e5ab19] hover:-translate-y-0.5 w-full sm:w-auto"
          style={{ fontSize: "clamp(15px, 1.5vw, 18px)", letterSpacing: "0.9px" }}
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default CTASection;
