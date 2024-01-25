import React from "react";
import Navbar from "./Functional Components/Navbar";

import hackout from "../assets/hackout.jpg";

function HackOut({changePageinApp}){

    return(
        <div>
            <div className="hackoutcover">
                <img className="hackout" src={hackout}></img>
            </div>
            <Navbar changePageinApp={changePageinApp} />
        </div>
    )
}

export default HackOut
