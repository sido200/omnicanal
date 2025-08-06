import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="NavBar">
      <div className="logo">OmniCanal</div>
      <ul className={"nav-links " + (openNav ? "open_nav" : "")}>
        <IoClose className="close" onClick={() => setOpenNav(false)} />
        <NavLink to="/" activeClassName="active">
          <li>Home</li>
        </NavLink>
        <NavLink to="/portfolio" activeClassName="active">
          <li>Portfolio</li>
        </NavLink>

        <NavLink to="/service" activeClassName="active">
          <li>Services</li>
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          <li>Blog</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <li>Contact us</li>
        </NavLink>

        <button className="respo-button">Let’s talk</button>
      </ul>
      <IoMenu className="Menu" onClick={() => setOpenNav(true)} />
      <button>
        Let’s talk <FaLongArrowAltRight />
      </button>
    </nav>
  );
}
