import React from "react";
import yourPetDocuments from "../assets/service/yourPetDocuments.png";
import caringForNewborn from "../assets/service/caringForNewborn.png";
import consultation from "../assets/service/consultation.png";
import dentistryForAnimals from "../assets/service/dentistryForAnimals.png";
import vaccination from "../assets/service/vaccination.png";
import surgeryForPets from "../assets/service/surgeryForPets.png";

const Services = () => {
  const serviceGroups = [
    {
      header: "Our clinic provides a wide range of services",
      services: [
        {
          serviceName: "Dentistry for Animals",
          description:
            "Just like humans, animals can develop dental problems such as tooth decay, gum disease, and tooth loss.",
          serviceImage: dentistryForAnimals,
        },
        {
          serviceName: "Your Pet's Documents",
          description:
            "Animals do not require legal documents like humans do. However, some animals may need certain documents for specific purposes.",
          serviceImage: yourPetDocuments,
        },
        {
          serviceName: "Vaccination",
          description:
            "Vaccination for animals is the process of administering a vaccine to an animal to help prevent the spread of diseases.",
          serviceImage: vaccination,
        },
      ],
    },
    {
      header: "From surgery to behavioral consultations",
      services: [
        {
          serviceName: "Surgery for Pets",
          description:
            "Pet surgery refers to medical procedures performed on animals under anesthesia by a licensed veterinarian.",
          serviceImage: surgeryForPets,
        },
        {
          serviceName: "Consultation",
          description:
            "The veterinarian may also perform diagnostic tests such as blood work, urinalysis, or x-rays to help diagnose any underlying health issues.",
          serviceImage: consultation,
        },
        {
          serviceName: "Caring for Newborn",
          description:
            "Young animals require specialized care during their early weeks, including feeding, warmth, and regular veterinary checkups.",
          serviceImage: caringForNewborn,
        },
      ],
    },
  ];

  return (
    <div className="service-container" id="Services">
      <div className="service-wrapper">
        {serviceGroups.map((group, index) => (
          <div key={index} className="service-group">
            <h2 className="group-header">{group.header}</h2>
            <div className="services-list">
              {group.services.map((service, idx) => (
                <div className="service-card" key={idx}>
                  <div className="image-wrapper">
                    <img src={service.serviceImage} alt={service.serviceName} />
                  </div>
                  <div className="service-details">
                    <h3>{service.serviceName}</h3>
                    <p>{service.description}</p>
                    <div className="details-explore">View Details</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
