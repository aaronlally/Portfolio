import React from "react";
import flatironCertificate from "./flatironCertificate.jpg"


function DescriptionCard() {


    return (
        <>
         
        <div id="fullUnderPicContainer">
            <div id="underPicDescription"> 
            <h1>Aaron B. Lally B.A., M.A.</h1>
            <h1>Software Engineer: Full Stack Web Developer</h1>
            <h2>JavaScript || React || Ruby || Ruby on rails || HTML || CSS || Git</h2>
            </div>
        </div>
        <div id="flatironimageContainer">
            <img className="flatironimage" alt="" src={flatironCertificate} ></img>
            </div>
        </>
    )
}

export default DescriptionCard;