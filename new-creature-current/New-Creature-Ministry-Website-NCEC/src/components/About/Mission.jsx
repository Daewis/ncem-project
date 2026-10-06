// import React from 'react'
import EyeIcon from '../../assets/Icon_eye.png'
import JetIcon from '../../assets/JetIcon.png'

const Mission = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-stretch max-w-7xl mx-auto bg-[#E7EEFE] py-14 lg:py-20 px-5 gap-5 lg:gap-7'>
            <div className='w-full lg:max-w-[584px] p-6 lg:p-10 bg-white space-y-5 rounded-2xl'>
                <div className='bg-[#1E3A8A1A] p-3 lg:p-5 w-14 lg:w-16 rounded-[10px]'>
                    <img src={EyeIcon} alt="" className="w-full h-full object-contain" />
                </div>
                <h2 className='text-blue font-semibold text-xl lg:text-[24px]'>Our Vision</h2>
                <p className='text-[15px] lg:text-base'>
                    To be a beacon of undeniable hope and profound
                    spiritual clarity, illuminating the intersection of modern
                    life and timeless faith for all generations.
                </p>
            </div>
            <div className='w-full lg:max-w-[584px] p-6 lg:p-10 bg-white space-y-5 rounded-2xl'>
                <div className='bg-[#FFDF9F4D] p-3 lg:p-5 w-14 lg:w-16 rounded-[10px]'>
                    <img src={JetIcon} alt="" className="w-full h-full object-contain" />
                </div>
                <h2 className='text-blue font-semibold text-xl lg:text-[24px]'>Our Mission</h2>
                <p className='text-[15px] lg:text-base'>
                    We equip individuals to navigate life with purpose and
                    grace by providing authentic community, practical
                    spiritual resources, and opportunities for selfless
                    service.
                </p>
            </div>
        </div>
    )
}

export default Mission
