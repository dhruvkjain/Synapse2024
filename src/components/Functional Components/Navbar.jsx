import React from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import "./Navbar.css";

function Navbar({ changePageinApp }) {

    function opennavbar() {
        const contlogo = document.getElementsByClassName('contlogo')[0];
        contlogo.classList.toggle('shownavbar');
        const navgrid2 = document.getElementsByClassName('navgrid2')[0];
        navgrid2.classList.toggle('navgrid2display'); 
    }

    return (
        <div className="navbar">
            <div className='contlogo'>
                <div className='navgrid'>
                    <img onClick={() => changePageinApp('homepage')} className='logo pointer' src={logo}></img>
                    <div className='navflex'>
                        <div className='navlinks' onClick={opennavbar} >
                            <div className='navflex2'>
                                <img className='menuimg' src={menu}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navgrid2 phonk'>
                    <p className='navptags'><span onClick={() => changePageinApp('events')} >Event</span></p>
                    <p className='navptags'><span onClick={() => changePageinApp('pronight')} >ProNight</span></p>
                    <p className='navptags'><span onClick={() => changePageinApp('team')} >Team</span></p>
                    <p className='navptags'><span onClick={() => changePageinApp('hackout')} >HackOut</span></p>
                    <p className='navptags'><a href="http://synapse.daiict.ac.in/youth.html" >YouthRun</a></p>
                    <p className='navptags'><span onClick={() => changePageinApp('sponsors')} >Sponsors</span></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar