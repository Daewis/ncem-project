// import React from 'react'
import backgroundImage from '../../assets/Gradient.png'

const Hero = () => {
    return (
        <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden box-border
         px-6 pb-45 pt-30" aria-label="Welcome">
      <div className="absolute inset-0 z-0">
        <img className="h-full w-full object-cover object-center" alt="" aria-hidden="true" src={backgroundImage} />
        <div className="absolute inset-0 bg-[rgba(21,28,39,0.45)]" aria-hidden="true" />
      </div>

      <div className="relative z-1 flex flex-col items-center text-center max-w-225 w-full gap-6">
        <h1 className="m-0 font-[var(--font-heading,'Montserrat' ,sans-serif)]
         text-[clamp(32px,5vw,64px)] font-bold leading-[1.15] tracking-[-0.5px] text-white">
          If any man is in Christ <br /> He is a New Creature
        </h1>

        <p className="m-0 max-w-191.25 font-[var(--font-body, 'Inter' ,sans-serif)] text-[clamp(16px,2vw,20px)]
         font-normal leading-[1.6] text-primary [text-shadow:0_2px_4px_rbga(0,0,0,0.25)]">
          Welcome to a community of faith, hope, and purpose. We are dedicated to sharing the transformative power of the Gospel in a modern world, building strong foundations for generations to come.
        </p>

        <div className='mt-4 flex w-full flex-wrap items-center justify-center gap-4'>
          <a href="/locations" className="inline-flex items-center justify-center px-9 py-4 rounded-xl bg-amber-400 text-[14px] font-semibold tracking-[0.7px]
           text-[#151c27] no-underline shadow-[0_4px_6px_-4px_rgba(0,0,0,0.15), 0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[#f59e0b] bg-[var(--color-accent-amber, #fbbf24)] font-[var(--font-body, 'Inter', sans-serif)] ">
            Find a Church
          </a>
          <a href="/events" className="inline-flex items-center justify-center px-8.5 py-3.5 rounded-xl border-2 border-amber-400 border-[var(--color-accent-amber, #fbbf24)] bg-transparent text-[14px] font-semibold tracking-[0.7px]
           text-white font-[var(--font-body, 'Inter', sans-serif)] no-underline backdrop-blur-xs transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[rgba(251,191,36,0.15)]">
            Explore Events
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-1 h-35 w-full bg-linear-to-b from-[rgba(249,249,255,0)] to-[rgba(249,249,255,1)]" aria-hidden="true" />
    </section>
    )
}

export default Hero
