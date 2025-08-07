import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";
import { FaPhone } from "react-icons/fa6";
export default function Contact() {
  return (
<>
    <div className="contact right">
      <div className="iframe">
        <h3>
          <FaPhone /> +213 23 534 837
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.9472757862645!2d3.052654576377343!3d36.7238274720001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad2a57c96cc9%3A0xcb2cd3db08037a82!2sOmnicanal%20Creative%20Agency!5e0!3m2!1sen!2sdz!4v1751104017639!5m2!1sen!2sdz"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-content2">
        <h2>{"title"}</h2>
        <p>{"description"}</p>
        <ContactForm />
      </div>
      
    </div>
   </>
  );
}
