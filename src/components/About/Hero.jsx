// import React from 'react'
// import AboutHero from '../../assets/about_hero.png'

const Hero = () => {
    return (
        <div className="min-h-[60vh] sm:h-screen w-full flex items-center justify-center flex-col bg-[#F0F3FF] max-w-7xl mx-auto px-6 py-16 sm:py-0" >
            <h1 className="text-3xl sm:text-[48px] font-bold text-blue mb-4 sm:mb-6 text-center">Who We Are</h1>
            <p className='text-base sm:text-[18px] text-offwhite max-w-[661.27px] text-center'>
                We are a modern community of faith dedicated to illuminating paths, fostering
                deep connections, and serving with purposeful grace in a complex world.
            </p>
        </div>
    )
}

export default Hero
