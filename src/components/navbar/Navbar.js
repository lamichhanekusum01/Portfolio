import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
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
            <Link to="/" onClick={toggleMenuBar}>
              Home
            </Link>
            <Link to="/portfolio" onClick={toggleMenuBar}>
            Projects
            </Link>
            <Link to="/about" onClick={toggleMenuBar}>
              About Me
            </Link>
            <Link to="/contact" onClick={toggleMenuBar}>
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