import { useRef }from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/Github.svg";
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive-nav")
  }

  return (
    <div>
      <nav ref={navRef}>
        <div className="nav-row-1">
          <Link to="/" className="Logo">
            Hüseyin.dev
          </Link>
        </div>
        <div className="nav-row-2">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/tech-stack">
            Tech Stack
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <button className="nav-btn  nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <div className="social-media">
            <a
              target="_blank"
              href="https://github.com/huseyinbagator"
              alt="Github Link"
              rel="noreferrer"
            >
              <img src={Github} alt="Github Logo" />
            </a>{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/h%C3%BCseyin-ba%C4%9Fator-348960199/"
              alt="Linkedin Link"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Linkedin Logo" />
            </a>{" "}
          </div>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </div>
  );
}
export default Navbar;
