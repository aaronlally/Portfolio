import React from "react";
import nbaTeamGeneratorSS from "./nbaTeamGeneratorSS.jpg"
import realreviewsSS from "./realreviewsSS.jpg"

function Projects() {


    return (
        <>
        <div id="projectContainer">

            <div id="NBAContainer">
                <a href="https://rgarfield11.github.io/phase-1-project-NBA-team-generator/" target="_blank" rel="noreferrer">
        <img id="firstImage" className="projectImages" src={nbaTeamGeneratorSS} alt=""></img>
        </a>
        <div id="NBA">
            <label className="projectLabels" >NBA Team Generator</label>
       
        <p className="projectDescriptions"> This is a Vanilla JavaScript frontend application which uses the ballislife NBA API to generate a random team at request!</p>
        </div>
        </div>


        <div id="RealReviewContainer">
        <img id="realreviewImage" className="projectImages" src={realreviewsSS} alt=""></img>
        <div id="RealReviews">
            <label className="projectLabels">Real Reviews</label>
        
        <p className="projectDescriptions">This is a video game review website created with a Ruby on Rails backend and a React.js frontend. Full CRUD included for games, developers, reviews, and users!</p>
        </div>
        </div>
        </div>
        <p id="moreinDev">more applications are in development and will be added soon!</p>
        <ol id="projectList">
        <li>Trivia Game</li>
        <li>Job Application Tracker</li>
        <li>Messaging App</li>
        </ol>       
        </>
    )
}

export default Projects;