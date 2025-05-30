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

  return (
    <nav className="nav">
      <div className="nav__logo">Pet.</div>
      <div className="nav__links">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav__link ${
              activeLink === item ? "nav__link--active" : ""
            }`}
            onClick={() => setActiveLink(item)}
            aria-current={activeLink === item ? "page" : undefined}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="nav__actions">
        <button className="nav__action">Questionnaire</button>
        <button className="nav__action">Free Call</button>
      </div>

      <div
        className={`hamburger-menu-wrapper ${
          openHamburgerOption ? "active" : ""
        }`}
        onClick={() => setOpenHamburgerOption(!openHamburgerOption)}
      >
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="hamburger-option">
          <div className="options">About Us</div>
          <div className="options">Services</div>
          <div className="options">Doctors</div>
          <div className="options">Equipment</div>
          <div className="options">Charity</div>
          <div className="options">Reviews</div>
          <div className="options">Questionnaire</div>
          <div className="options">Free Call</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// i am not getting hamburger-option.active wen click on ha
