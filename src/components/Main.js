import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import NavButton from "./NavButton";
import { useWindowSize } from "react-hooks-window-size";

export default function Main() {
  const [width, setWidth] = useState("");
  const size = useWindowSize().width;
  useEffect(() => {
    setWidth(size > 699 ? true : false);
  }, [size]);
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
