import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

function Footer() {
    return(
        <div id="footerContainer">
            <div className="upperFooter">
            <a className="trollLinks" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Use</a>
            <p>  💠 </p>
            <a className="trollLinks" target="_blank" rel="noreferrer" href="https://youtu.be/05dT34hGRdg">Privacy Policy</a>
            </div>
            <div>
            <p id="finePrint" >This is sample fine print text. I feel like many companies have some fine print at the bottom and although no one ever reads it, it makes the website appear to have lawyers overseeing the application at all times.</p>
            </div>
        <div className="linkContainer">
        <a target="_blank" rel="noreferrer" className="socialLinks" id="githubLink" href="https://github.com/aaronlally">{<FaGithub size="2em" color="B852CF"/>}</a>
        <a target="_blank" rel="noreferrer" className="socialLinks" id="linkedinLink" href="https://linkedin.com/in/aaron-lally">{<FaLinkedin size="2em" color="B852CF"/>}</a>
        <a target="_blank" rel="noreferrer" className="socialLinks" id="mediumLink" href="https://medium.com/@aaronblally">{<BsMedium size="2em" color="B852CF"/>}</a>
        </div>
        </div>
    )
}
export default Footer