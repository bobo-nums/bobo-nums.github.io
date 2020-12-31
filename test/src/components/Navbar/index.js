import React from 'react'
import './Navbar.css'

function Navbar(){
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link text-white text-uppercase" href="#home">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white text-uppercase" href="#about-me">About Me</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white text-uppercase" href="#work-experience">Work Experience</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white text-uppercase" href="#projects">Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white text-uppercase" href="#contact">Contact</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;