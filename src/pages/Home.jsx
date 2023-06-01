import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import "../styles/Button.css";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home">
      <Helmet>
        <meta name="description" content="This is my portfolio page with my projects from the last two years" />
      </Helmet>
      <div className="about">
        <h2>Joakim Vanebo</h2>
        <div className="promt">
          <p>Front-End Developer Student</p>
          <button className="btn">
            <a href="https://www.linkedin.com/in/joakim-vanebo-93a64562/">
              <LinkedInIcon />
            </a>
          </button>
          <button className="btn">
            <a href="mailto:Joakimvanebo1@gmail.com">
              <EmailIcon />
            </a>
          </button>
          <button className="btn">
            <a href="https://github.com/Pjatte1337">
              <GithubIcon />
            </a>
          </button>
        </div>
      </div>
      <div className="me-skills">
        <h1>About</h1>
        <ol className="list">
          <li className="item">
            <h2>My name is Joakim</h2>
            <p>
              Just finished Front-End Developer at Noroff School Of Technology And
              Digital Media.
            </p>
            <p>
              Soon to start Back-End Developer at Noroff School Of Technology And
              Digital Media.
            </p>
            <p>Living in Trondheim, Norway.</p>
            <p>This is my portfolio page with my projects from the two last years</p>
          </li>
        </ol>
      </div>
      <div className="me-skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <p>HTML, CSS, JavaScript, React, SASS, Bootstrap, Tailwind CSS</p>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <p>JavaScript, PHP, Node.js, C#, .NET, SQL</p>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <p>Git, GitHub, Wordpress, Visual Studio Code, Adobe XD, Adobe Photoshop, Figma</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
