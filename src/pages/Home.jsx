// import React from 'react'

import Navbar from "../components/Common/Navbar"
import Footer from "../components/Common/Footer"
import Hero from "../components/Home/Hero"
import Mission from "../components/Home/Mission"
import Upcoming_Events from "../components/Home/Upcoming_Events"

const Home = () => {
    return (
        <>
            <Navbar />
                <main className="relative flex flex-col items-center pt-20.25 w-full min-h-screen box-border bg-(--color-surface-bg,#f9f9ff)">
                    <Hero />
                    <Mission />
                    <Upcoming_Events />
                </main>
             <Footer />
        </>
    );
};

export default Home;