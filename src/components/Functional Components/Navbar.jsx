import React from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import "./Navbar.css";

function Navbar({changePageinApp}) {

    function opennavbar() {
        const navptags = document.getElementsByClassName('navptags');
        const navlinks = document.getElementsByClassName('navlinks');
        for (let i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.toggle('shownavback');
        }
        for (let i = 0; i < navptags.length; i++) {
            navptags[i].classList.toggle('shownavbar');
        }
    }

    function closenavbar() {
        const navptags = document.getElementsByClassName('navptags');
        const navlinks = document.getElementsByClassName('navlinks');
        for (let i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.remove('shownavback');
        }
        for (let i = 0; i < navptags.length; i++) {
            navptags[i].classList.remove('shownavbar');
        }
    }

    return (
        <div className="navbar">
            <div className='contlogo'>
                <div className='navgrid'>
                    <img onClick={() => changePageinApp('homepage')} className='logo pointer' src={logo}></img>
                    <div className='navflex'>
                        <div className='navlinks' onClick={opennavbar} >
                            <div className='navgrid2'>
                                <p className='navptags'><span onClick={() => changePageinApp('events') } >Event</span></p>
                                <p className='navptags'><span onClick={() => changePageinApp('pronight') } >ProNight</span></p>
                                <p className='navptags'><span onClick={() => changePageinApp('team') } >Team</span></p>
                                <p className='navptags'><span onClick={() => changePageinApp('hackout') } >HackOut</span></p>
                                <p className='navptags'><span onClick={() => changePageinApp('youthrun') } >YouthRun</span></p>
                                <p className='navptags'><span onClick={() => changePageinApp('sponsors') } >Sponsors</span></p>
                            </div>
                            <div className='navflex2'>
                                <img className='menuimg' src={menu}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar