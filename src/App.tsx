import AboutUs from "./pages/AboutUs";
import Charity from "./pages/Charity";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Equipment from "./pages/Equipment";
import Footer from "./pages/Footer";
import Nav from "./pages/Nav";
import Review from "./pages/Review";
import Services from "./pages/Services";
import "./style/main.scss";

const App = () => {
  return (
    <div className="content-container">
      <Nav />
      <AboutUs />
      <Services />
      <Doctors />
      <Equipment />
      <Charity />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
