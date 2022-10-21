import React from "react";
import AaronLallyResume from "./AaronLallyResume.pdf";


function About() {
    

    return (
        <div id="AboutPage">
            <br></br>
            <div className="coverStatement">
            <p id="consummate">I am a consummate nerd and an enthusastic programmer skilled in developing full stack applications. I am determined to gain skills as a web developer and turn my favorite hobby into a career I can be proud of.</p>
            <br></br>
            <p id="academic">I started my academic career at the SUNY University at Albany where I studied Psychology and Neuroscience with a focus on research. After graduating and starting my first job I decided to get my Master's degree in social work. I graduated from the University of Denver two years later and passed the licensing exam. After several years of practice I began programming in my free time, starting with JavaScript, HTML, and CSS. I quickly realized I wanted to learn at an accelerated rate and turn something I came to love, into a career. I decided to join Flatiron School's Software Engineering Bootcamp (live-online). After 15 weeks of rigorous learning, testing, and building I graduated from the bootcamp capable of building full stack applications from scratch. Although I learned many important skills throughout my time at the boot camp, I belive the most important skill I learned was to think like an engineer.</p>
            </div>
            <div className="objectContainer">
            <object
                className="pdf"
                data={AaronLallyResume}
                type="application/pdf"
                width="72%"
                height="800px"
                >
            <p>
            You need a plugin to view a PDF on this browser.
            you can &nbsp;
            <a
                href="https://docs.google.com/document/d/1-wTxPP8KEZCwl6ti8qipyYf9FPQaPlyPWbKDPXTOFc4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                click here
            </a>
            &nbsp; 
                to download the PDF file!
            </p>
            </object>
            </div>
            <div></div>
            <p id="accessLinks" >Access my Github, LinkedIn, and Blog with the links in the footer!</p>
            <div className="coverStatement">Email: aaronlallydev@gmail.com</div>
            <div className="coverStatement">Phone: (518) 258-9681</div>c
        </div>
    )
}

export default About;