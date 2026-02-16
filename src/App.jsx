import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Services,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Certifications,
  Footer,
} from './components';
import BackgroundEffect from './components/BackgroundHoverEffect';
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <BackgroundEffect />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
};

export default App;
