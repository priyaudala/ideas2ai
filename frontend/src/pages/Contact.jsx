import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;

