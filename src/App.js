import React from "react";
import "./styles/output.css";
import { Element } from "react-scroll";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Element name="main">
        <Main />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contacts">
        <Footer />
      </Element>
    </React.Fragment>
  );
}

export default App;
