// /import React from 'react'
import FOUNDER from '../../assets/FOUNDER.png'

const FounderSpotlight = () => {
    return (
        <section className='w-full bg-[#2A313D]'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 max-w-7xl mx-auto px-5 py-16 lg:py-30'>
        <div className="w-full  max-w-md rounded-2xl
             overflow-hidden bg-[#2A313D] shrink-0
             shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] ">
                <img className='rounded-[10px] w-full h-full object-cover block 
                object-[center_top] grayscale mix-blend-luminosity' src={FOUNDER} alt="" />
            </div>

            <div className='max-w-2xl flex-col items-start gap-4 w-full flex'>
                <h3 className="text-[#FFDF9F] font-semibold text-[14px] leading-5 
                 font-(--font-body,'Inter',sans-serif) tracking-[1.4px] uppercase">
                    FOUNDER & VISIONARY
                </h3>
                <h2 className="text-white m-0 font-(--font-heading,'Montserrat',sans-serif) text-5xl font-bold leading-12 tracking-[-0.96px]">
                    Rev. Dr. E.J Oludayitan                   
                </h2>
                <div className='m-0 w-16 h-1 bg-yellow'/>

                <blockquote className="text-[#D3DAEA] text-base leading-7.25 opacity-0.9 m-0 
                 font-(--font-body,'Inter',sans-serif) lg:text-[18px] pt-2 font-normal">
                    &ldquo;True leadership in faith isn't about standing above the
                    congregation; it's about standing beside them in the trenches of
                    everyday life, holding a light when the path grows dim.&rdquo;
                </blockquote>

                <p className="text-[#C0C6DB] pt-2 pb-4 text-base leading-6.5 m-0 
                 font-(--font-body,'Inter',sans-serif) lg:text-[16px] max-w-xl font-normal">
                    Dr. Vance founded New Creature Evangelical Ministry with a simple yet
                    radical premise: that spiritual depth and modern accessibility do not have to
                    be mutually exclusive. With over two decades of theological study and
                    organizational leadership, she has guided the ministry from a small study
                    group into a vibrant, impactful community.
                </p>
                
                <button className='box-border inline-flex items-center justify-center tracking-[0.7px]
                 h-12 py-3 px-8 text-[#B6C4FF] border-2 border-solid bg-transparent leading-5
                 border-[#B6C4FF] rounded-xl hover:bg-[rgba(182,196,255,0.1)] hover:border-[#ffffff] hover:text-[#ffffff] transition-colors no-underline
                 duration-150 ease-in-out font-semibold text-[14px]
                 '>
                    Read Full Profile
                </button>
            </div>
        </div>
        </section>
    )
}

export default FounderSpotlight
