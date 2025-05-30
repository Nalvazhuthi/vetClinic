import React, { useState } from "react";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("About Us");
  const [openHamburgerOption, setOpenHamburgerOption] = useState(false);

  const navItems = [
    "About Us",
    "Services",
    "Doctors",
    "Equipment",
    "Charity",
    "Reviews",
  ];

  const extraItems = ["Questionnaire", "Free Call"];

  const delay = 800;

  const scrollToSection = (id: string) => {
    const scrollWithOffset = () => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (openHamburgerOption) {
      setOpenHamburgerOption(false);
      setTimeout(scrollWithOffset, delay);
    } else {
      scrollWithOffset();
    }
  };

  return (
    <nav className="nav">
      <div className="nav__logo">Pet.</div>

      {/* Desktop Nav */}
      <div className="nav__links">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav__link ${activeLink === item ? "nav__link--active" : ""}`}
            onClick={() => {
              setActiveLink(item);
              scrollToSection(item);
            }}
            aria-current={activeLink === item ? "page" : undefined}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="nav__actions">
        {extraItems.map((item) => (
          <button
            key={item}
            className="nav__action"
            onClick={() => scrollToSection(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger-menu-wrapper ${openHamburgerOption ? "active" : ""}`}
        onClick={() => setOpenHamburgerOption(!openHamburgerOption)}
      >
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className={`hamburger-option ${openHamburgerOption ? "active" : ""}`}>
          {[...navItems, ...extraItems].map((item) => (
            <div
              key={item}
              className="options"
              onClick={() => {
                setActiveLink(item);
                scrollToSection(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
