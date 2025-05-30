import doctor1 from "../assets/doctors/doctor1.png";
import Button from "../component/Button";

const Doctors = () => {
  return (
    <div className="doctors-container" id="Doctors">
      <div className="doctors-main-wrapper">
        <div className="header">
          Our doctors provide a wide range of services, from routine check-ups
        </div>
        <div className="doctors-wrapper">
          <div className="doctor-details">
            <div className="description">
              Our veterinarians have completed extensive training and education
              in veterinary medicine, including a Doctor of Veterinary Medicine
              (DVM) degree from an accredited veterinary school.
            </div>
            <div className="doctor-footer">
              <div className="doctor-type">
                <div className="type">Surgeons</div>
                <div className="type">Dentists</div>
                <div className="type">Therapists</div>
                <div className="type">Ophthalmologists</div>
              </div>
              <Button label="Reviews" />
            </div>
          </div>
          <div className="doctor-image">
            <img src={doctor1} alt="" />
            <div className="viewAll">
              <Button label="View All" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
