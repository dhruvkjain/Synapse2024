import React from "react";
import Navbar from "./Functional Components/Navbar";

function HackOut({changePageinApp}){

    return(
        <div>
            Hackout
            <Navbar changePageinApp={changePageinApp} />
        </div>
    )
}

export default HackOut
