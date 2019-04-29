import React from "react";
import myData from "./Data";
import Button from "./Button";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="textImage">
        <h1>My projects</h1>
      </div>
      <div className="wrapper">
        {myData &&
          myData.map((image, index) => (
            <div className="mainData" key={index}>
              <h2>{image.title}</h2>
              <div
                className="theImage"
                style={{
                  backgroundImage: `url(${image.name})`
                }}
              >
                <div className="imageData">{image.data}</div>
              </div>
              <div className="flexButtons">
                <Button href={image.href} text="Code" />
                {image.path && <Button href={image.path} text="Demo" />}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// data - text={ image.data }
