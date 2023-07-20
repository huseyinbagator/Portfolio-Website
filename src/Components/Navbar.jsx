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
         
          <Link className="nav-link" to="/">Home</Link> 
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/tech-stack">Tech Stack</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <div className="social-media">
         
          <a
            target="_blank"
            href="https://github.com/huseyinbagator"
            alt="Github Link"
            rel="noreferrer"
          >
            
            <img src={Github} alt="Github Logo" />
          </a>{" "}
          footergithub
            </div>
        </div>
       
      </nav>
    </div>
  );
}
export default Navbar;
