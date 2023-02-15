import React from 'react';
import { ReactComponent as Logo } from "../assets/logo-no-background.svg";
import "../css/nav.scss"


export default function Nav() {
  return (
    <>
    <div className="nav-container">
        <div className="logo">
        <Logo className="logo-svg" aria-label="Logo" />
        </div>
        <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>

        </div>
    </div>
    </>
  )
}
