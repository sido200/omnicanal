import React from "react";
import Question from "../Question/Question";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactSection.css";
const ContactSection = () => {
  return (
    <section className="contact-page">
      <h2>
        Here is some of <span>FAQ’s</span>
      </h2>
      <div className="contact-content">
        <Question />

        <div className="right">
          <h2>{"title"}</h2>
          <p>{"description"}</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
