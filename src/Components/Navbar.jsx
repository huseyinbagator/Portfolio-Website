import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/Github.svg";
function Navbar() {
  return (
    <div>
     
      <nav>
       
        <div className="nav-row-1">
         
          <Link to="/" className="Logo">
            Hüseyin.dev
          </Link>
        </div>
        <div className="nav-row-2">
         
          <Link to="/">Home</Link> 
          <Link to="/about">About</Link>
          <Link to="/tech-stack">Tech Stack</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
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
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
