import React from 'react';
import "./tech.css";
import Html from "../images/html.svg";
import Css from "../images/css.svg";
import Bootstrap from "../images/bootstrap.svg";
import Git from "../images/git.svg";
import Reactimg from '../images/react.svg';
import Vscode from '../images/vscode.svg';
import Js from '../images/js.svg';
import Githubicon from '../images/github-icon.svg';
import Figma from '../images/figma.png';
import Sass from '../images/sass.svg';

function tech() {
  return (
    <div className='tech-container'>
        <h1 className>My Tech Stack</h1>
        <h3>Technologies I’ve been working with recently</h3>
        <div className='icons'>
            <img src={Html}  alt="Html"  />
            <img src={Css}  alt="Css" />
            <img src={Js}  alt="Javascript"  />
            <img src={Reactimg}  alt="React" />
            <img src={Bootstrap}  alt="Bootstrap" /> 
            <img src={Sass} alt="Sass"/>                         
            <img src={Vscode}  alt="Vscode"  />
            <img src={Git}  alt="Git" />
            <img src={Githubicon}  alt="Github"  />
            <img src={Figma}  alt="Figma"  />
        </div>
    </div>
  )
}

export default tech