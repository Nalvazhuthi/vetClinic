import React from "react";
import circleOfLife from "../assets/charity/circleOfLife.png";
import friendly from "../assets/charity/friendly.png";
import goodHands from "../assets/charity/goodHands.png";
import happySmile from "../assets/charity/happySmile.png";
import healthyAtmosphere from "../assets/charity/healthyAtmosphere.png";
import together from "../assets/charity/together.png";

const Charity = () => {
  const charities = [
    { description: "Happy Smile Foundation", image: happySmile },
    { description: "Healthy Atmosphere Foundation", image: healthyAtmosphere },
    { description: "Friendly Hand Foundation", image: friendly },
    { description: "We Are Together Foundation", image: together },
    { description: "Circle of Life Foundation", image: circleOfLife },
    { description: "Good Hands Foundation", image: goodHands },
  ];
  return (
    <div className="charity-container" id="Charity">
      <div className="charity-wrapper">
        <div className="header">
          We collaborate with charities around the world
        </div>
        <div className="charity-details">
          <div className="description-wrapper">
            <div className="description">
              Our vet clinic prioritizes community involvement and animal
              welfare through regular charity events benefiting local animal
              shelters, rescue organizations, and related causes
            </div>
          </div>

          <div className="achievements">
            <div className="achive">110+</div>
            <div className="achive-detail">Animals saved All time</div>
          </div>

          <div className="achievements">
            <div className="achive">64</div>
            <div className="achive-detail">Charitable events Held</div>
          </div>
        </div>
        <div className="charity-collab">
          <div className="head">Collaborate with popular brand</div>
          <div className="card-wrapper">
            {charities.map((charity, index) => (
              <div className="card">
                <div className="description">{charity.description}</div>
                <img src={charity.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
