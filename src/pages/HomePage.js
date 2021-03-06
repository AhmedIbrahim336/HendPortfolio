import React from "react";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import Work from "../components/Work";
import Favicon from "react-favicon";

const HomePage = () => {
  return (
    <div className="bg-gray-50 w-full h-full overflow-hidden">
      <Favicon url="/assets/favicon.png" />
      <MainSection />
      <Projects />
      <Work />
      <Tools />
      <Skills />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default HomePage;
