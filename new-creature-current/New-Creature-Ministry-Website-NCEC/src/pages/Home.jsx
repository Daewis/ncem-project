// import React from 'react'

import Footer from "../components/Home/Footer"
import Hero from "../components/Home/Hero"
import Mission from "../components/Home/Mission"
import Upcoming_Events from "../components/Home/Upcoming_Events"

const Home = () => {
    return (
        <div>
            <Hero />
            <Mission />
            <Upcoming_Events />
            <Footer />
        </div>
    )
}

export default Home