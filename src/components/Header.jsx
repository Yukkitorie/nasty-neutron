import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll position:", window.scrollY);
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // scroll event (not work yet)
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="flex items-center justify-between h-16">
          {/* logo?? */}
          <div className="flex-shrink-0">
            <a href="#hero" className="logo">
              TONY COIN
            </a>
          </div>

          {/* desktop nav */}
          <div className="hidden md:block">
            <div className="nav-links">
              <a href="#hero" onClick={handleLinkClick}>
                Home
              </a>
              <a href="#tokenadress" onClick={handleLinkClick}>
                About
              </a>
              <a href="#roadmap" onClick={handleLinkClick}>
                Roadmap
              </a>
              <a href="#tokenomics" onClick={handleLinkClick}>
                Tokenomics
              </a>
            </div>
          </div>

          {/* mobile btn */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="mobile-menu-button">
              {isMenuOpen ? <span>×</span> : <span>☰</span>}
            </button>
          </div>
        </div>

        {/* mobile */}
        {isMenuOpen && (
          <div className="md:hidden mobile-nav-links">
            <a href="#hero" onClick={handleLinkClick}>
              Home
            </a>
            <a href="#description" onClick={handleLinkClick}>
              About
            </a>
            <a href="#roadmap" onClick={handleLinkClick}>
              Roadmap
            </a>
            <a href="#tokenomics" onClick={handleLinkClick}>
              Tokenomics
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
