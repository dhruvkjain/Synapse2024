import React from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import "./Navbar.css";

function Navbar({changePageinApp}) {

    function opennavbar() {
        const navptags = document.getElementsByClassName('navptags');
        const navlinks = document.getElementsByClassName('navlinks');
        for (let i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.add('shownavback');
        }
        for (let i = 0; i < navptags.length; i++) {
            navptags[i].classList.add('shownavbar');
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
        <div>
            <div className='contlogo'>
                <div className='navgrid'>
                    <img onClick={() => changePageinApp('homepage')} className='logo pointer' src={logo}></img>
                    <div className='navflex'>
                        <div className='navlinks' onMouseEnter={opennavbar} onMouseLeave={closenavbar}>
                            <div className='navgrid2'>
                                <p onClick={() => changePageinApp('events') } className='navptags'>Event</p>
                                <p onClick={() => changePageinApp('pronight') } className='navptags'>ProNight</p>
                                <p onClick={() => changePageinApp('team') } className='navptags'>Team</p>
                                <p onClick={() => changePageinApp('hackout') } className='navptags'>HackOut</p>
                                <p onClick={() => changePageinApp('youthrun') } className='navptags'>YouthRun</p>
                                <p onClick={() => changePageinApp('sponsors') } className='navptags'>Sponsors</p>
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