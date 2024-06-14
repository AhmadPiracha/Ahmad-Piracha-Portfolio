import { BrowserRouter } from "react-router-dom";
import {
  About,
  Services,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";
import Certifications from "./components/Certifications";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Experience />
        <Tech />
        <Works />
        <Certifications/>
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
