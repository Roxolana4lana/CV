import React, { useState } from "react";
import NavigationSmall from "./NavigationSmall";

export default function NavButton() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeButton = <i onClick={handleClick} className="fas fa-times" />;
  return (
    <div className="navBar">
      <i className="fas fa-bars" onClick={handleClick} />
      {click ? <NavigationSmall closeButton={closeButton} /> : null}
    </div>
  );
}
