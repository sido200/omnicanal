import React from "react";
import Question from "../Question/Question";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactSection.css";
import {motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  return (
    <section className="contact-page" ref={ref}>
      <h2>
        Here is some of  <motion.span
          className="typewriter"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >FAQ’s</motion.span>
      </h2>
      <div className="contact-content">
        <Question />

        <div className="right">
         <div className="right_text">
           <h2>{"Still have questions ?"}</h2>
          <p>{"Can’t find the answer to you’re looking for? Please contact with our costumer service."}</p>
         </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
