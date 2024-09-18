import React from 'react';
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/images/logo.png"
import './Navbar.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll';




const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container">
          <div className="logoicon">
            <img src={Logo} alt="logo" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars size={30} />
          </button>
          <Fade top>
          <div className="collapse navbar-collapse d-lg-flex" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                  <Link activeClass='active' to='home-id' spy={true} smooth={true} offset={-100} duration={100} className="nav-link">
                    Home
                  </Link>
                </li>
              <li className="nav-item">
                  <Link activeClass='active' to='features-id' spy={true} smooth={true} offset={-100} duration={100} className="nav-link">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass='active' to='about-id' spy={true} smooth={true} offset={-100} duration={100} className="nav-link">
                    About Us
                  </Link>
                </li>
            </ul>
          </div>
          </Fade>
          <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header ms-auto">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item ">
                  <Link activeClass='active-navItem' to='home-id' spy={true} smooth={true} offset={-100} duration={100} className="nav-link">
                    Home
                  </Link>
                </li>
              <li className="nav-item">
                  <Link activeClass='active-navItem' to='features-id' spy={true} smooth={true} offset={-100} duration={100} className="nav-link">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass='active' to='about-id' spy={true} smooth={true} offset={-100} duration={100} className="nav-link">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
