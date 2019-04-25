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
          myData.map(image => (
            <div className="mainData">
              <h2>{image.title}</h2>
              <div
                className="theImage"
                style={{
                  backgroundImage: `url(${image.name})`
                }}
                data-text={image.data}
              />
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
