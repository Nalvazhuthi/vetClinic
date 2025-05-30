import cat1 from "../assets/about/Cat 1.png";
import cat2 from "../assets/about/Cat 3.png";
import dog1 from "../assets/about/Dog 1.png";
import {
  ButtonArrow,
  CatTail,
  HeartLeft,
  HeartRight,
} from "../assets/svg/exportSvg";
import Button from "../component/Button";

const AboutUs = () => {
  return (
    <div className="aboutus-container" id="About Us">
      <div className="header">
        We are Pet.
        <span className="contact">
          {" "}
          <span className="icon"></span>+1 (671) 555-0110
        </span>
      </div>
      <div className="sub-header">Caring Vets, Healthy Pets - Trust Us</div>
      <div className="content-wrapper">
        <div className="card">
          <div className="card-wrapper">
            <div className="primary-card">
              <div className="left">
                <HeartLeft />
              </div>
              <div className="right">
                <HeartRight />
              </div>
              <img src={cat1} alt="" />
            </div>
            <div className="details-wrapper">
              <div className="description">
                Our veterinary clinic is a compassionate and skilled facility
                dedicated to providing high-quality medical care for pets.
              </div>

              <Button label="Services" />
            </div>
          </div>
          <div className="address">
            2715 Ash Dr. San Jose, South Dakota 83475
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="primary-card">
              <div className="left">
                <HeartLeft />
              </div>
              <div className="right">
                <HeartRight />
              </div>
              <img src={dog1} alt="" />
            </div>
            <div className="description">
              Trust us to be your go-to vet clinic for all your pet's healthcare
              needs.
            </div>
          </div>
          <div className="card">
            <div className="secondary-card">
              <img src={cat2} alt="" />
              <div className="svg">
                <CatTail />
              </div>
            </div>

            <Button label="Reviews" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
