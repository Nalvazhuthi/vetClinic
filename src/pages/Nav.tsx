import React, { useState } from 'react';

const Nav = () => {
    const [activeLink, setActiveLink] = useState('About Us');

    const navItems = ['About Us', 'Services', 'Doctors', 'Equipment', 'Charity', 'Reviews'];

    return (
        <nav className="nav">
            <div className="nav__logo">.Pet</div>
            <div className="nav__links">
                {navItems.map((item) => (
                    <button
                        key={item}
                        className={`nav__link ${activeLink === item ? 'nav__link--active' : ''}`}
                        onClick={() => setActiveLink(item)}
                        aria-current={activeLink === item ? 'page' : undefined}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="nav__actions">
                <button className="nav__action">Questionnaire</button>
                <button className="nav__action">Free Call</button>
            </div>
        </nav>
    );
};

export default Nav;
