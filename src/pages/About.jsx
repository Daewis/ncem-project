// import React from 'react'


import Navbar from "../components/Common/Navbar"
import Footer from "../components/Common/Footer"
import Hero from '../components/About/Hero'
import OurStory from '../components/About/OurStory'
import Mission from '../components/About/Mission'
import OurLeadership from '../components/About/OurLeadership'
import FounderSpotlight from '../components/About/FounderSpotlight'

const About = () => {
    return (
        <>
            <Navbar /> 
            <main className="relative flex flex-col items-center w-full min-h-screen border-box bg-[var(--color-surface-bg, #f9f9ff)]">
                <Hero />
                <OurStory />
                <Mission />
                <OurLeadership />
                <FounderSpotlight />
            </main>
            <Footer />
        </>  
    );
};

export default About;