// import React from 'react'

import ContactForm from "../components/Contact/ContactForm"
import EmailSubscription from "../components/Contact/EmailSubscription"
import Hero from "../components/Contact/Hero"
import Footer from "../components/Home/Footer"

const Contact = () => {
    return (
        <div className="">
            <Hero />
            <ContactForm />
            <EmailSubscription />
            <Footer />
        </div>
    )
}

export default Contact