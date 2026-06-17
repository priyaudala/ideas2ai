import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import ContactFAQ from "../components/Contact/ContactFAQ";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
    </div>
  );
};

export default Contact;

