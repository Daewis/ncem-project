// /import React from 'react'
import FOUNDER from '../../assets/FOUNDER.png'

const FounderSpotlight = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 max-w-7xl mx-auto bg-[#2A313D] px-5 py-16 lg:py-30'>
            <div className='w-full max-w-md'>
                <img className='rounded-[10px] w-full h-auto' src={FOUNDER} alt="" />
            </div>
            <div className='max-w-2xl w-full space-y-5'>
                <h3 className='text-[#FFDF9F] font-semibold text-[14px]'>
                    FOUNDER & VISIONARY
                </h3>
                <h2 className='text-white text-3xl lg:text-[48px] font-bold inline-block relative leading-tight'>
                    Rev. Dr. E.J Oludayitan
                    <span className='absolute left-0 -bottom-2 w-[100px] h-[3px] bg-yellow'></span>
                </h2>
                <p className='text-[#D3DAEA] text-base lg:text-[18px]'>
                    "True leadership in faith isn't about standing above the
                    congregation; it's about standing beside them in the trenches of
                    everyday life, holding a light when the path grows dim."
                </p>
                <p className='text-[#D3DAEA] text-base lg:text-[18px]'>
                    Dr. Vance founded New Creature Evangelical Ministry with a simple yet
                    radical premise: that spiritual depth and modern accessibility do not have to
                    be mutually exclusive. With over two decades of theological study and
                    organizational leadership, she has guided the ministry from a small study
                    group into a vibrant, impactful community.
                </p>
                <button className='border text-[#B6C4FF] border-[#B6C4FF] px-5 py-2 rounded-[5px] hover:bg-[#B6C4FF]/10 transition-colors'>
                    Read Full Profile
                </button>
            </div>
        </div>
    )
}

export default FounderSpotlight
