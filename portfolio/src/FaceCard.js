import React from "react";
import AaronLally from "./AaronLally.jpg"
import UalbanyDiploma5 from "./UalbanyDiploma5.jpg"
import universityofDenverDiploma1 from "./universityofDenverDiploma1.jpg"



function FaceCard() {


    return (
        <>
         <img className="diplomaImages" alt="" src={universityofDenverDiploma1} ></img> <div className="facecardContainerContainer"> 
            <div className="faceCardContainer">
            <img className="profilePicture" title="Aaron Lally" alt="AaronLally" src={AaronLally}></img>
            </div>
        </div> <img className="diplomaImages" alt="" src={UalbanyDiploma5} ></img>
        </>
    )
}

export default FaceCard;