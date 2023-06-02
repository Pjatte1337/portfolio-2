import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/joakim-vanebo-93a64562/"><LinkedInIcon /></a>
                <a href="mailto:Joakimvanebo1@gmail.com"><EmailIcon /></a>
                <a href="https://github.com/Pjatte1337"><GithubIcon /></a>
            </div>
            <p> &copy; Copyright 2023 </p>
            <p>Designed and built by Joakim Vanebo</p>
        </div>
    )
}

export default Footer;