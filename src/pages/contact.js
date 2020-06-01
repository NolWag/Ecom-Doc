import React from "react"
import Nav from "../components/nav"
import InnerHero from "../components/InnerHero"
import FooterNav from "../components/footer-nav"
import ContactForm from "../components/contact-form"

const ContactPage = () => {
    
    return (
        <div>
            <Nav />
            <InnerHero pageName="Contact" />
            <ContactForm />
            <FooterNav />

        </div>
    )

}

export default ContactPage