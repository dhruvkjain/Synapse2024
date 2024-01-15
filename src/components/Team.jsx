import React from "react";
import Navbar from "./Functional Components/Navbar";

function Team({changePageinApp}){

    return(
        <div>
            Team
            <Navbar changePageinApp={changePageinApp} />
        </div>
    )
}

export default Team
