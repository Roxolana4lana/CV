import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import windowSize from "react-window-size";
import NavButton from "./NavButton";

function Main(props) {
  const [width, setWidth] = useState("");
  useEffect(() => {
    setWidth(props.windowWidth > 450 ? true : false);
  }, [props.windowWidth]);
  return (
    <div className="App">
      {width ? <Navigation /> : <NavButton />}

      <div className="Main">
        <h1>Roxolana</h1>
        <h1>Pavlyk</h1>
        <h3>Front-end developer</h3>
      </div>
    </div>
  );
}
export default windowSize(Main);
