// import React from 'react'
import OurStoryImageOne from '../../assets/OurStory1.png'
import OurStoryImageTwo from '../../assets/OurStory2.png'

const OurStory = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto py-14 lg:py-20 px-6 lg:px-7'>
            <div className='max-w-[485.33px] space-y-5 w-full'>
                <h2 className='text-blue font-semibold text-2xl sm:text-[30px]'>
                    <span className='border-b-2 border-transparent h-10 hover:border-[#795900] transition-colors duration-300 pb-1'>Our</span> Story
                </h2>
                <p className='text-[15px] sm:text-base'>
                    Founded on the principles of steadfast faith and progressive
                    action, New Creature Evangelical Ministry began as a small
                    gathering seeking a more authentic, community-driven spiritual
                    experience. Over the decades, we have evolved from a humble
                    congregation into a multifaceted ministry that serves
                    thousands.
                </p>
                <p className='text-[15px] sm:text-base'>
                    Our journey is marked not by grand monuments, but by the
                    quiet, transformative moments of grace we've shared. We
                    believe that true ministry is found in the modern application of
                    timeless truths, adapting to the needs of our community while
                    remaining anchored in our core spiritual foundation.
                </p>
            </div>
            <div className='w-full lg:max-w-[698px]'>
                <div className='flex gap-3'>
                    <div className='w-1/2 lg:max-w-[341px]'>
                        <img className='w-full' src={OurStoryImageOne} alt="" />
                    </div>
                    <div className='w-1/2 lg:max-w-[341px] -translate-y-5'>
                        <img className='w-full' src={OurStoryImageTwo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory
