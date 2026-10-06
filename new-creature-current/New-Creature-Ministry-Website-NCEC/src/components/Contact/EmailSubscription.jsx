// import React from 'react'
import AlarmImage from '../../assets/Text.png'

const EmailSubscription = () => {
    return (
        <div className="bg-[#F0F3FF] flex justify-center items-center px-6 py-16 lg:py-30 max-w-7xl mx-auto">
            <div className="text-center space-y-4 flex justify-center items-center flex-col w-full">
                <img src={AlarmImage} alt="" className="w-16 h-16 object-contain" />
                <h1 className="font-bold text-3xl lg:text-[48px] text-blue">Stay Connected</h1>
                <p className='text-base lg:text-[18px] text-offwhite'>
                    Receive updates about church programs, events and activities.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-5 mt-4 lg:mt-8 w-full max-w-md sm:max-w-none">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border border-offwhite py-2 pl-3 pr-3 sm:pr-25 rounded-2xl w-full"
                    />
                    <button className="bg-yellow px-6 sm:px-10 py-2 rounded-2xl text-offwhite font-semibold text-[14px] whitespace-nowrap">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmailSubscription
