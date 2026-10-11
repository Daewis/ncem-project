// import React from 'react'
import MissionIcon from '../../assets/Icon.png'
import VisionIcon from '../../assets/Icon_eye.png'
import ImageOne from '../../assets/Image.png'
import ImageTwo from '../../assets/scripture_img.png'
import RightHandArrow from '../../assets/Icon_right_arrow.png'

const Mission = () => {
    return (
        <section className='flex justify-center w-full border-box py-32 px-6 bg-[var(--color-surface-bg, #f9F9ff)]' aria-labelledby="mission-heading" >
            <div className='grid w-full max-w-7xl grid-cols-1 items-center gap-16 box-border lg:grid-cols-2 lg:gap-16'>
                {/* Our purpose */}
                <div className='flex flex-col gap-5' >                          
                    <span className="text-[14px] font-bold tracking-[1.4px] uppercase text-[var(--color-accent-gold,#795900)]
                     font-(--font-body, 'Inter',sans-serif)">OUR PURPOSE</span>

                    <h2 className="m-0 text-[clamp(28px,4vw,36px)] font-bold leading-tight text-[var(--color,#00236f)] font-[var(--font-heading,'Montserrat',sans-serif)]">
                        Illuminating Paths, Building Strong Foundations.
                    </h2>

                    <p className="mb-3 m-0 text-[18px] font-normal leading-[1.6] text-offwhite font-(--font-body,'Inter',sans-serif">
                        We exist to raise a generation of purpose-driven individuals who reflect
                        the light of Christ in every sphere of life. Our community is a place of
                        healing, growth, and empowerment.
                    </p>
                    <div className='flex flex-col gap-5 mt-2'>
                        <div className='flex items-start gap-5'>
                            <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[rgba(251,191,36,0.4)] bg-[rgba(251,191,36,0.15)] shadow-sm shadow-black/5'>
                            <img className='h-6.5 w-6.5 object-contain' src={MissionIcon} alt="MissionIcon" />
                            </div>
                            <div className='flex flex-col gap-1.5'>
                                <h3 className="m-0 text-[20px] font-semibold leading-[1.35] text-(--color,#00236f)">Our Mission</h3>
                                <p className=" m-0 text-[16px] font-normal leading-[1.55] text-offwhite font-(--font-body,'Inter',sans-serif">
                                    To preach the Gospel to all nations, disciple believers into maturity,
                                    and demonstrate God's love through practical service.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-5'>
                        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[rgba(251,191,36,0.4)] bg-[rgba(251,191,36,0.15)] shadow-sm shadow-black/5'>
                            <img src={VisionIcon} alt="VisionIcon" />
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <h3 className="m-0 text-[20px] font-semibold leading-[1.35] text-(--color,#00236f)">Our Vision</h3>
                                <p className=" m-0 text-[16px] font-normal leading-[1.55] text-offwhite font-(--font-body,'Inter',sans-serif">
                                    To be a global ministry where every individual is equipped to fulfill
                                    their divine destiny and impact their generation.
                                </p>
                            </div>
                            {/* Discover */}
                        </div>
                        <a href="/about" className="inline-flex mt-4 self-start items-center gap-2 rounded-[4px]border border-[rgba(197,197,211,0.3)] bg-[#f0f3ff] px-5 py-2 text-[14px] font-semibold tracking-[0.5px] text-(--color-primary, #00236f) no-underline shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-150 ease-in-out font-(--font-body, 'Inter',sans-serif) hover:bg-[#e2e8F8] hover:-translate-y-px">
                            <span className='text-blue'>Discover Our Ministry</span>
                                <img className="w-3.5 h-3.5 object-contain" alt="" aria-hidden="true" src={RightHandArrow} />
                        </a>
                    </div>
                </div>

                {/* right_image_content */}
                <div className="grid w-full grid-cols-2 grid-rows-[200px_300px] gap-5">
          <div className="col-start-1 col-end-2 row-start-1 row-end-3 overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_24px_-6px_rgba(0,0,0,0.1)]">
            <img className="w-full h-full object-cover" alt="Church gathering" src={ImageOne} loading="lazy" />
          </div>

          <div className="col-start-2 col-end-3 row-start-1 row-end-2 overflow-hidden rounded-2xl border-4 border-white shadow-[0_6px_16px_-4px_rgba(0,0,0,0.08)]">
            <img className="w-full h-full object-cover" alt="Worship moment" src={ImageTwo} loading="lazy" />
          </div>

          <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col items-center justify-center rounded-2xl border-4 border-white bg-(--color-accent-amber, #fbbf24) bg-amber-400 text-center shadow-[0_8px_18px_-4px_rgba(0,0,0,0.1)]">
            <span className="m-0 text-[48px] font-extrabold leading-[1.1] tracking-[-1px] text-[#151c27] font-(--font-heading, 'Montserrat', sans-serif)">40+</span>
            <span className="mt-[6px] text-[13px] font-bold tracking-[1px] text-[#151c27] font-(--font-body, 'Inter',sans-serif)">YEARS OF GRACE</span>
          </div>
        </div>
      </div>
        </section >
    )
}

export default Mission
