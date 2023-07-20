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
        <h1>My Tech Stack</h1>
        <h3>Technologies I’ve been working with recently</h3>
        <div className='icons'>
            <img className='icon'  src={Html}  alt="Html"  />
            <img className='icon' src={Css}  alt="Css" />
            <img className='icon' src={Js}  alt="Javascript"  />
            <img className='icon' src={Reactimg}  alt="React" />
            <img className='icon' src={Bootstrap}  alt="Bootstrap" /> 
            <img className='icon' src={Sass} alt="Sass"/>                         
            <img className='icon' src={Vscode}  alt="Vscode"  />
            <img className='icon' src={Git}  alt="Git" />
            <img className='icon' src={Githubicon}  alt="Github"  />
            <img className='icon' src={Figma}  alt="Figma"  />
        </div>
    </div>
  )
}

export default tech