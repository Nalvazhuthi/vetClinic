import { ButtonArrow } from "../assets/svg/exportSvg";
import equipment1 from "../assets/equipment/equipment1.png";
import equipment2 from "../assets/equipment/equipment2.png";

const Equipment = () => {
  return (
    <div className="equipment-container" id="Equipment">
      <div className="header">Our doctors choose only the best equipment</div>
      <div className="equipment-grid">
        <div className="box box-1">
          <div className="header-wrapper">
            <div className="head">
              All our equipment has international quality certificates
            </div>
            <div className="icon">
              <ButtonArrow />
            </div>
          </div>
          <div className="about">More About</div>
        </div>
        <div className="box box-2">
          <img src={equipment1} alt="" />
        </div>
        <div className="box box-3">
          <div className="header-wrapper">
            <div className="head">
              Our clinic uses proven drugs and also provides them to our clients
            </div>
            <div className="icon">
              <ButtonArrow />
            </div>
          </div>
          <div className="about">More About</div>
        </div>
        <div className="box box-4">
          {" "}
          <div className="header">
            All equipment undergoes special treatment
          </div>
          <div className="icon">
            <ButtonArrow />
          </div>
        </div>
        <div className="box box-5">
          <img src={equipment2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Equipment;
