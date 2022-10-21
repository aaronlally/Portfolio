import React from "react";
import FaceCard from "./FaceCard"
import DescriptionCard from "./DescriptionCard"



function Home() {


    return (
        <div>
            <div className="faceCard">
            <FaceCard /> 
            </div>
            <br></br>
            <DescriptionCard />
            
        </div>
    )
}

export default Home;