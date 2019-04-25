import React from "react";

export default function About() {
  return (
    <div className="About">
      <div className="myInfo">
        <div className="textImage">
          <h1>About me</h1>
        </div>

        <div className="pAbout">
          <p>
            I am self educated front end developer with almost one year
            experience. <br />
            For most part of the time I create my projects with react, because,
            to my opinion, react is really powerfull tool and it helps a lot in
            creation of functional as well as beautiful projects.
          </p>
        </div>
        <div className="textImage">
          <h2> My skills</h2>
        </div>
        <div className="uAbout">
          <ul>
            <li> Good command in React.</li>
            <li> Knowledge in CSS3, HTML5, JavaScript.</li>
            <li> Able to use tools like Sass, Material UI.</li>
            <li> Experience in using npm and Git. </li>
            <li> Able to write clean and understanding code.</li>
            <li> Basic knowledge of redux, webpack. </li>
            <li>
              Good command in English, Polish, Ukrainian, Russian. Basic
              knowledge of Italian.
            </li>
            <li>
              {" "}
              Communication skills (I have a great experience in working with
              customers, experience as a team player)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
