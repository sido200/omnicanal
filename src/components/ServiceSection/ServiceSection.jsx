import React from "react";
import "./ServiceSection.css";
import image from "../../assets/home.jpg";
import { FaRegEdit } from "react-icons/fa";
const ServiceSection = () => {
  return (
    <section className="service_section">
      <h2>
        A Range of <span>services</span> to elevate your <span>project</span>
      </h2>

      <div className="service_content">
        <div className="left_service">
          <img src={image} alt="service" />
        </div>
        <div className="right_service">
          <ul>
            <li>
              <div className="icon_service">
                <FaRegEdit />
              </div>
              <div className="text_servi">
                <h3>Web Development</h3>
                <p>
                  Crafting responsive and dynamic websites tailored to your
                  business needs.
                </p>
              </div>
            </li>
            <li>
              <div className="icon_service">
                {" "}
                <FaRegEdit />
              </div>
              <div className="text_servi">
                <h3>Web Development</h3>
                <p>
                  Crafting responsive and dynamic websites tailored to your
                  business needs.
                </p>
              </div>
            </li>
            <li>
              <div className="icon_service">
                {" "}
                <FaRegEdit />
              </div>
              <div className="text_servi">
                <h3>Web Development</h3>
                <p>
                  Crafting responsive and dynamic websites tailored to your
                  business needs.
                </p>
              </div>
            </li>
            <li>
              <div className="icon_service">
                {" "}
                <FaRegEdit />
              </div>
              <div className="text_servi">
                <h3>Web Development</h3>
                <p>
                  Crafting responsive and dynamic websites tailored to your
                  business needs.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button>Learn more</button>
    </section>
  );
};

export default ServiceSection;
