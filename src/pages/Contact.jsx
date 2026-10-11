// import React from 'react'

import ContactForm from "../components/Contact/ContactForm"
import EmailSubscription from "../components/Contact/EmailSubscription"
import Hero from "../components/Contact/Hero"
import Navbar from "../components/Common/Navbar"
import Footer from "../components/Common/Footer"

const Contact = () => {
    return (
        <>
            <Navbar />
            <main className="pt-20.25">
                    <Hero />
                    <ContactForm />
                    <EmailSubscription />
                </main>
            <Footer />
        </>
    );
};

export default Contact;