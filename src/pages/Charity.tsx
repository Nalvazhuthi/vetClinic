import React from "react";

const Charity = () => {
  return (
    <div className="charity-container">
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
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
