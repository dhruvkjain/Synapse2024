import React from "react";
import Navbar from "./Functional Components/Navbar";

function Events({changePageinApp}){

    return(
        <div>
           Events 
           <Navbar changePageinApp={changePageinApp} />
        </div>
    )
}

export default Events
