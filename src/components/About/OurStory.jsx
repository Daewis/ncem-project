// import React from 'react'
import OurStoryImageOne from '../../assets/OurStory1.png'
import OurStoryImageTwo from '../../assets/OurStory2.png'

const OurStory = () => {
    return (
        <section className='flex flex-col lg:flex-row justify-between
         gap-10 max-w-7xl mx-auto py-14 lg:py-20 px-6 lg:px-7'>
            <div className='max-w-[485.33px] space-y-5 w-full'>
                <div className="relative inline-flex flex-col w-fit">
                    <h2 id="our-story-title" className="m-0 text-blue font-(--font-heading,'Montserrat',sans-serif) font-semibold leading-[1.2] text-[clamp(26px,4vw,32px)]">
                     Our Story
                    </h2>
                     <span className="absolute -bottom-2.5 left-0 w-12 h-1 bg-[#79590e] rounded-xl" aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-4 mt-2">
                <p className="m-0 text-[16px] font-normal leading-[1.65] text-(--color-text-muted,#444651) font-(--font-body,'Inter',sans-serif) ">
                    Founded on the principles of steadfast faith and progressive
                    action, New Creature Evangelical Ministry began as a small
                    gathering seeking a more authentic, community-driven spiritual
                    experience. Over the decades, we have evolved from a humble
                    congregation into a multifaceted ministry that serves
                    thousands.
                </p>
                <p className="m-0 text-[16px] font-normal leading-[1.65] text-(--color-text-muted,#444651) font-(--font-body,'Inter',sans-serif) ">
                    Our journey is marked not by grand monuments, but by the
                    quiet, transformative moments of grace we've shared. We
                    believe that true ministry is found in the modern application of
                    timeless truths, adapting to the needs of our community while
                    remaining anchored in our core spiritual foundation.
                </p>
                </div>
            </div>

            <div className='w-full gap-5 items-start grid grid-cols-[1fr_1fr] '>            
                    <div className='pt-8'>
                    <div className='w-full h-96 rounded-lg overflow-hidden bg-[#e2e8f8]
                     shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_2px_4px_-1px_rgba(0,0,0,0.04)] lg:max-w-85.25 -translate-y-5'>
                        <img className='w-full h-full object-cover block' src={OurStoryImageOne} alt="" />
                    </div>
                    </div>
                    <div className='w-full h-96 rounded-lg overflow-hidden bg-[#e2e8f8]
                     shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_2px_4px_-1px_rgba(0,0,0,0.04)] lg:max-w-85.25 -translate-y-5'>
                        <img className='w-full h-full object-cover block' src={OurStoryImageTwo} alt="" />
                    </div>                
            </div>  
        </section>
    )
}

export default OurStory
