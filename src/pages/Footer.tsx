import React from 'react'

const Footer = () => {
  const sections = [
    {
      header: "About Us",
      sections: ["Address", "Connection"]
    },
    {
      header: "Services",
      sections: ["Dentistry", "Documentation", "Vaccination", "Surgery", "Consultation", "Newborns",
      ]
    },
    {
      header: "Doctors",
      sections: ["Specialists", "Licenses", "Practice", "Vacancies",
      ]
    },
    {
      header: "Equipment",
      sections: ["Certificates", "Exploitation"]
    },
    {
      header: "Charity",
      sections: ["Promotions", "Partners", "Achievements",
      ]
    },
    {
      header: "Reviews",
      sections: ["Our clients", "On platforms"]
    },

  ]
  return (
    <div className='footer-wrapper'>
      <div className="header">Always happy to help your friend</div>
      <div className="section-wrapper">
        {sections.map((section, index) => (
          <div className="each-section">
            <div className="section-header">{section.header}</div>
            <div className="section-navs">
              {section.sections.map((sec) => (
                <div className="section-nav">{sec}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="polices-social-wrapper">
        <div className="copy-write">© Copywriting | All Rights Reserved</div>
        <div className="social"></div>
        <div className="termAndPolicy">Terms of Use | Privacy</div>
      </div>
    </div>
  )
}

export default Footer