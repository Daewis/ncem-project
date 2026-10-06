// import React from 'react'

import Footer from '../components/Home/Footer'
import Hero from '../components/About/Hero'
import OurStory from '../components/About/OurStory'
import Mission from '../components/About/Mission'
import OurLeadership from '../components/About/OurLeadership'
import FounderSpotlight from '../components/About/FounderSpotlight'

const About = () => {
    return (
        <div>

            <Hero />
            <OurStory />
            <Mission />
            <OurLeadership />
            <FounderSpotlight />

            <Footer />
        </div>
    )
}

export default About