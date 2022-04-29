import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [activeLink, activeLinkSet] = useState("home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuBar = () => {
    if (window.innerWidth <= 768) {
      toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setToggleMenu(false);
      }
    });
  }, [setToggleMenu, toggleMenu]);

  return (
    <>
      <header className="HomePageDiv sticky-top">
        <nav>
          <div className="logo">Kusum</div>
          <div className={toggleMenu ? "navLinks toggleNav" : "navLinks"}>
              <Link to="/" className={activeLink === "home" ? "active" : null} onClick ={()=>{toggleMenuBar();activeLinkSet("home")}}>
              Home
            </Link>
            <Link to="/portfolio" className={activeLink === "portfolio" ? "active" : null} onClick ={()=>{toggleMenuBar();activeLinkSet("portfolio")}}>

            Projects
            </Link>
            <Link to="/about" className={activeLink === "about" ? "active" : null} onClick ={()=>{toggleMenuBar();activeLinkSet("about")}}>

              About Me
            </Link>
            <Link
              to="/contact"
              className={activeLink === "contact" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("contact");
              }}
            >
              Contact
            </Link>
          </div>
          <div className="menubar">
          <i class="fas fa-bars" onClick={toggleMenuBar}></i> 
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;