// import React from 'react'
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto text-center px-6 py-16 lg:py-32 space-y-4 lg:space-y-5">
            <h1 className="font-bold text-3xl lg:text-[48px] text-blue">
                Stewardship of the Heart
            </h1>
            <p className="text-offwhite text-base lg:text-[18px] max-w-2xl mx-auto">
                Your generosity fuels our mission to spread the Gospel and serve our
                community. Partner with us in creating a lasting impact.
            </p>
            <button className="bg-[#795900] text-white px-6 py-3 rounded-[5px] cursor-pointer mt-5 hover:bg-[#795900]/90 transition-colors">
                <Link to='/givenow'>Give Online</Link>
            </button>
        </div>
    )
}

export default Hero
