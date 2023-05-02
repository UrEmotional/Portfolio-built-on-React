import React from "react";
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Mohammad</h2>
        <div className="prompt">
          <p>A Full Stack Web Developer that wants to take the first steps to becoming a legend</p>
          <p><b>Contact: </b>Junaidsattar47@gmail.com</p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJs, HTML, CSS, JavaScript, JQuery, Bootstrap, Material-UI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJs, ExpressJs, MongoDB, MySQL, Apollo, GraphQL, RESTful APIs, 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, SQL, HTML, CSS
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

