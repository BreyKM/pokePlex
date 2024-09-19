import React from 'react';
import { ReactComponent as Logo } from "../assets/logo-no-background.svg";
import { ReactComponent as Github } from "../assets/icons/icons8-github.svg";
import { ReactComponent as Linkedin } from "../assets/icons/icons8-linkedin.svg";
import "../css/nav.scss"


export default function Nav() {
  return (
    <>
    <div className="nav-container">
        <div className="logo">
        <Logo className="logo-svg" aria-label="Logo" />
        </div>
        <div className="links-container">
         <div className="github">
          <a href="https://github.com/BreyKM" target='blank' className="github-link"><Github className="github-svg" /></a>
        </div>
        <div className="LinkedIn">
          <a href="https://www.linkedin.com/in/bredanmwaura/" target='blank' className="LinkedIn-link"><Linkedin className="linkedIn-svg" /></a>
        </div> 
        </div>
        

    </div>
    </>
  )
}
