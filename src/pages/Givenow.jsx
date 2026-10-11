// import React from 'react'

import GivingOptions from "../components/Givenow/GivingOptions"
import Hero from "../components/Givenow/Hero"
import Navbar from "../components/Common/Navbar"
import Footer from "../components/Common/Footer"

const Givenow = () => {
    return (
    <>
        <Navbar />
            <div className="pt-20.25">
                <Hero />
                <GivingOptions />
            </div>
        <Footer />
    </>
    );
};

export default Givenow;