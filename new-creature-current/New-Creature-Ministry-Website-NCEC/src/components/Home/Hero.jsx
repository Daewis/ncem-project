// import React from 'react'
import backgroundImage from '../../assets/Gradient.png'

const Hero = () => {
    return (
        <div
            className='relative min-h-[80vh] sm:h-screen w-full bg-cover bg-center flex flex-col items-center justify-center pt-24 pb-12 sm:pb-0 px-6 sm:px-7 space-y-6 sm:space-y-7 text-center text-white'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                // Pull up under the fixed navbar so the hero image fills viewport
                marginTop: 'calc(-1 * var(--header-height, 81px))',
                paddingTop: 'var(--header-height, 81px)',
            }}
        >
            <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold max-w-3xl mx-auto'>
                if any man is in christ is a new creature
            </h1>
            <p className='max-w-2xl mx-auto text-sm sm:text-base lg:text-[15px]'>
                Welcome to a community of faith, hope, and purpose. We are dedicated to sharing
                the transformative power of the Gospel in a modern world, building strong
                foundations for generations to come.
            </p>
            <div className='hero flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto'>
                <button className='bg-yellow px-6 py-3 text-black rounded-[15px] cursor-pointer w-full sm:w-auto hover:bg-yellow/90 transition-colors'>
                    Find a church
                </button>
                <button className='border-yellow border-2 py-3 px-5 rounded-[15px] cursor-pointer w-full sm:w-auto hover:bg-white/10 transition-colors'>
                    Explore Events
                </button>
            </div>
        </div>
    )
}

export default Hero
