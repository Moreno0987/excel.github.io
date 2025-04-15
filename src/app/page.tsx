
import Navbar from "./navbar";
import About from "./About";
import Process from "./Process";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Happy from "./Happy";
import Contact from "./contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Servicess from "./Servicess";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Section Navbar */}
      <Navbar />
      
      {/* Section Home */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Section About */}
      <div id="about">
        <About />
      </div>

      {/* Section Process */}
      <div id="process">
        <Process />
      </div>

      {/* Section Portfolio */}
      <div id="portfolio">
        <Portfolio />
      </div>

      {/* Section Blog */}
      <div id="blog">
        <Blog />
      </div>

      {/* Section Servicess */}
      <div id="Servicess">
        <Servicess />
      </div>

      {/* Section Happy */}
      <div id="happy">
        <Happy />
      </div>

      {/* Section Contact */}
      <div id="contact">
        <Contact />
      </div>

      {/* Section Footer */}
      <Footer />
    </div>
  );
}
