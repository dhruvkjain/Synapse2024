import React from "react";
import Navbar from "./Functional Components/Navbar";

import hackout from "../assets/hackout.jpg";

function HackOut({changePageinApp}){
z
    return(
        <div>
            <div style={{backgroundImage:`url("${hackout}")`}} className="hackoutcover">
            </div>
            <div className="hackoutinnercover">
            <img className="hackout" src={hackout}></img>
            </div>
            <Navbar changePageinApp={changePageinApp} />
        </div>
    )
}

export default HackOut
