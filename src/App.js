import React, { Suspense } from "react";
import "./styles/output.css";
import { Element } from "react-scroll";
import Main from "./components/Main";
import About from "./components/About";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";
const Projects = React.lazy(() => import("./components/Projects"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
      </Element>
      <Element name="contacts">
        <Footer />
      </Element>
    </React.Fragment>
  );
}

export default App;
