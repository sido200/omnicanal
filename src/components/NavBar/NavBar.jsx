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

        <NavLink  onClick={() => setOpenNav(false)} to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <li>Home</li>
        </NavLink>

        <NavLink  onClick={() => setOpenNav(false)} to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
          <li>Portfolio</li>
        </NavLink>

        <NavLink  onClick={() => setOpenNav(false)} to="/service" className={({ isActive }) => (isActive ? "active" : "")}>
          <li>Services</li>
        </NavLink>

        <NavLink  onClick={() => setOpenNav(false)} to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
          <li>Blog</li>
        </NavLink>

        <NavLink  onClick={() => setOpenNav(false)} to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
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
