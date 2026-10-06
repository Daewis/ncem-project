// import React from 'react'
import MissionIcon from '../../assets/Icon.png'
import VisionIcon from '../../assets/Icon_eye.png'
import ImageOne from '../../assets/Image.png'
import ImageTwo from '../../assets/scripture_img.png'
import RightHandArrow from '../../assets/Icon_right_arrow.png'

const Mission = () => {
    return (
        <div className='py-10 px-4 sm:px-5' >
            <div className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-10 max-w-7xl mx-auto'>
                {/* Our purpose */}
                <div className='space-y-2 max-w-xl relative w-full' >
                    <p className='uppercase text-yellow text-[14px]  '>our purpose</p>
                    <h2 className='font-semibold text-blue text-2xl sm:text-[32px] leading-tight'>
                        Illuminating Paths, Building Strong Foundations.
                    </h2>
                    <p className='text-[16px] sm:text-[18px]'>
                        We exist to raise a generation of purpose-driven individuals who reflect
                        the light of Christ in every sphere of life. Our community is a place of
                        healing, growth, and empowerment.
                    </p>
                    <div className='flex flex-col gap-6 lg:gap-8'>
                        <div className='flex items-start justify-center gap-3'>
                            <div className='bg-[#edeae2] border border-amber-400 p-3 flex-shrink-0'><img src={MissionIcon} alt="MissionIcon" /></div>
                            <div className='flex flex-col items-start justify-center'>
                                <h3 className='text-[18px] sm:text-[20px]'>Our Mission</h3>
                                <p className='text-[15px] sm:text-[16px]'>
                                    To preach the Gospel to all nations, disciple believers into maturity,
                                    and demonstrate God's love through practical service.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start justify-center gap-3'>
                            <div className='bg-[#f4eddd] border border-amber-400 p-3 flex-shrink-0'><img src={VisionIcon} alt="VisionIcon" /></div>
                            <div>
                                <h3 className='text-[18px] sm:text-[20px]'>Our Vision</h3>
                                <p className='text-[15px] sm:text-[16px]'>
                                    To be a global ministry where every individual is equipped to fulfill
                                    their divine destiny and impact their generation.
                                </p>
                            </div>
                            {/* Discover */}
                        </div>
                        <button className='group flex items-center justify-center gap-2 lg:absolute lg:bottom-0 px-4 py-3 bg-blue-100'>
                            <p>Discover Our Ministry</p>
                            <img src={RightHandArrow} alt="Right_Hand_Arrow" />
                        </button>
                    </div>

                </div>
                {/* right_image_content */}
                <div className='max-w-xl w-full grid grid-cols-[3fr_1fr_1.5fr] grid-rows-3 gap-3 sm:gap-5'>
                    <img className='col-span-1 row-span-3 w-full h-full object-cover rounded-[10px]' src={ImageOne} alt="ImageOne" />
                    <img className='col-span-2 row-span-1 w-full h-full object-cover rounded-[10px]' src={ImageTwo} alt="ImageTwo" />
                    <div className='col-span-2 row-span-2 w-full h-full bg-amber-400 flex items-center justify-center flex-col rounded-[10px] '>
                        <h1 className='text-3xl sm:text-[48px] font-semibold'>40+</h1>
                        <p className='uppercase text-sm sm:text-[16px] font-semibold'>Year of Grace</p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Mission
