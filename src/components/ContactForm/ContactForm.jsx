import { useState } from "react";
import { FiUser, FiPhone } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const initialFormData = {
  firstname: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="info-name">
        <div className="input-container">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
          <label>{"first-name"}</label>
          <FiUser className="icon-contact" />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>{"name"}</label>
          <FiUser className="icon-contact" />
        </div>
      </div>

      <div className="input-container">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>{"email"}</label>
        <MdAlternateEmail className="icon-contact" />
      </div>

      <div className="input-container">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <label>{"phone"}</label>
        <FiPhone className="icon-contact" />
      </div>

      <div className="input-container text-area">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <label> {"describ"}</label>
        <FaRegFileAlt className="icon-contact" />
      </div>

      <button type="submit">{"send"}</button>
    </form>
  );
}
