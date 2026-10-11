// import React from 'react'
import RightHandArrow from '../../assets/Icon_right_arrow.png'
import CardImageOne from '../../assets/card_image_one.png'
import CardImageTwo from '../../assets/card_image_two.png'
import CardImageThree from '../../assets/card_image_three.png'
import ClockIcon from '../../assets/Clock_Icon.png'
import LocationIcon from '../../assets/Location_Icon.png'

  
  const upcomingEvents = [
    {
      id: "ministers-conference",
      image: CardImageOne,
      date: "Oct 15",
      time: "6:00 PM",
      location: "Main Auditorium",
      title: "Ministers Conference",
      description:
        "A night of powerful worship, transformative teachings, and community for young adults seeking deeper connection.",
      href: "/events/ministers-conference",
    },
    {
      id: "youth-conference",
      image: CardImageTwo,
      date: "Oct 22",
      time: "9:00 AM",
      location: "Conference Hall",
      title: "Youth Conference",
      description:
        "Equipping current and emerging leaders with principles for impactful ministry and marketplace dominance.",
      href: "/events/youth-conference",
    },
    {
      id: "thanksgiving-service",
      image: CardImageThree,
      date: "Nov 05",
      time: "10:00 AM",
      location: "Main Sanctuary",
      title: "Thanksgiving Service",
      description:
        "Join us for a special combined service as we gather to celebrate God's faithfulness throughout the year.",
      href: "/events/thanksgiving-service",
    },
  ];
  


const Upcoming_Events = () => {
    return (
        <section className="relative w-full bg-white py-32 border-y border-white box-border" aria-labelledby="upcoming-events-title">
            <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-[#f9f9ff] to-[rgba(249,249,255,0)] pointer-events-none" aria-hidden="true" />
            
            <div className="relative z-10 flex w-full max-w-300 mx-auto flex-col gap-16 px-6 box-border">
            {/* Upcoming Event Heading */}
            <header className="flex w-full items-end justify-between gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-[13px] font-bold tracking-[1.4px] uppercase text-(--color-accent-gold,#795900) font-(--font-body, 'Inter',sans-serif)">gatherings</span>
                    <h2 id="upcoming-events-title" className="m-0 text-[clamp(26px,4vw,32px)] font-bold leading-tight text-(--color-,#00236f) font-(--font-heading, 'Montserrat',sans-serif)">
                        upcoming events
                    </h2>
                </div>

                <a href="/events" className="inline-flex items-center gap-2 rounded bg-[#f0f3ff] border border-[rgba(197,197,211,0.3)]
                 px-4.5 py-2.5 text-sm font-semibold tracking-[0.5px] text-blue no-underline shadow-[0_1px_2px_rgba(0,0,0,0.05)] whitespace-nowrap transition-all duration-150 ease-in-out hover:bg-[#e2e8f8] hover:-translate-y-px">
                    <span>View All Events</span>
                    <img className="w-3.5, h-3.5 object-contain" src={RightHandArrow} alt="Right_Hand_Arrow" />
                </a>                
            </header>

            {/* Upcoming Event Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 sm:px-0">
          {upcomingEvents.map((event) => (
            <article key={event.id} className="relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(197,197,211,0.4)]
             bg-primary shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.05)] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_20px_-3px_rgba(0,0,0,0.08)]">
              <div className="relative w-full h-56 bg-[#e5e7eb]">
                <img className="w-full h-full object-cover" alt={event.title} src={event.image} loading="lazy" />
                <span className="absolute top-4 left-4 rounded-lg bg-amber-400 bg-(--color-accent-amber,#fbbf24)
                 px-3.5 py-1.5 text-[13px] font-bold text-[#151c27] shadow-[0_2px_4px_rgba(0,0,0,0.15)] font-(--font-body, 'Inter',sans-serif)">
                    {event.date}</span>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-6 py-7">
                <div className="flex items-center gap-4 text-xs font-medium text-offwhite font-(--font-body,'Inter',sans-serif">
                  <div className="inline-flex items-center gap-1.5">
                    <img className="w-3.5 h-3.5 object-contain" alt="" aria-hidden="true" src={ClockIcon} />
                    <span>{event.time}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <img className="w-3.5 h-3.5 object-contain" alt="" aria-hidden="true" src={LocationIcon} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <h3 className="m-0 text-[20px] font-bold leading-[1.35] text-(--color,#00236f) font-(--font-heading, 'Montserrat',sans-serif)">
                    {event.title}</h3>
                <p className="m-0 flex-1 text-[15px] font-normal leading-[1.55] text-offwhite font-(--font-body,'Inter',sans-serif)" >{event.description}</p>

                <a href={event.href} className="flex items-center justify-between border-t border-[rgba(197,197,211,0.35)] pt-4.5 mt-2 text-[14px] font-semibold tracking-[0.5px] text-(--color,#00236f) text-[#00236f] no-underline font-(--font-body,'Inter',sans-serif) transition-opacity duration-150 ease-in-out hover:opacity-80">
                  <span>View Event Details</span>
                  <img className="w-3.5 h-3.5 object-contain" alt="" aria-hidden="true" src={RightHandArrow} />
                </a>
              </div>
            </article>
          ))}
        </div>

            </div>
        </section>
    )
}

export default Upcoming_Events
