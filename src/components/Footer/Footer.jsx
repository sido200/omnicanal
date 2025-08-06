import "./Footer.css";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  // State to toggle email input visibility
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");
  const formRef = useRef(null);

  const handleNewsletterClick = () => {
    setShowEmailInput(true); // Toggle the visibility
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowEmailInput(false);
      }
    };

    if (showEmailInput) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmailInput]);

  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="left-footer">
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to
          </p>

          <button
            id="newsletter-button"
            onClick={handleNewsletterClick}
            style={{
              display: showEmailInput ? "none" : "block",
              opacity: showEmailInput ? 0 : 1,
              transition: "all 0.4s ease-in-out",
            }}
          >
            {"News Lettres"}
          </button>

          <form
            onSubmit={handleEmailSubmit}
            ref={formRef}
            className="newsletter-form"
            style={{
              transition: "all 0.4s ease-in-out",
              opacity: showEmailInput ? 1 : 0,
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="email-input"
              style={{
                width: showEmailInput ? "22vw" : "10%",
                transition: "all 0.5s ease-in-out",
                display: showEmailInput ? "block" : "none",
              }}
            />
            <button
              type="submit"
              id="submit-button"
              className="submit-button"
              style={{
                left: showEmailInput ? "16vw" : "0",
                transition: "all 0.5s ease-in-out",
                cursor: "pointer",
                right: "16vw",
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="right-footer">
          <ul>
            <li className="title-liste">Explore</li>
            <Link to="/">
              <li>{"Home"}</li>
            </Link>
            <Link to="/portfolio">
              <li>{"Portfolio"}</li>
            </Link>
            <Link to={`/service`}>
              <li>{"Services"}</li>
            </Link>
            <Link to={`/Blog`}>
              <li>{"Blog"}</li>
            </Link>
            <Link to={`/contact`}>
              <li>{"contact"}</li>
            </Link>
          </ul>

          <ul>
            <li className="title-liste">Contact</li>
            <li>+213 28 17 67 96</li>
            <li>Info@omnicanal-dz.com</li>
            <a href="https://maps.app.goo.gl/Zhd2uYinLyzjLzFf7" target="_blank">
              {" "}
              <li>Maps</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="social">
          <a
            href="https://www.instagram.com/omnicanal_agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "
            target="_blank"
          >
            <FiInstagram color="white" size={32} />
          </a>
          <a
            href="https://www.linkedin.com/company/omnicanal-creative-agency/"
            target="_blank"
          >
            <FiLinkedin color="white" size={32} />
          </a>
        </div>
        <p>© 2025 Omnicall all right reserved</p>
      </div>
    </footer>
  );
}
