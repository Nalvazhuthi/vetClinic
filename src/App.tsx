import AboutUs from "./pages/AboutUs";
import Charity from "./pages/Charity";
import Doctors from "./pages/Doctors";
import Equipment from "./pages/Equipment";
import Nav from "./pages/Nav";
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
    </div>
  );
};

export default App;
