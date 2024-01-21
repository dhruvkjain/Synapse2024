import React from "react";

import scrolldown from "../assets/scrolldown.png";

import ScrollToBottom from "./Functional Components/scrollToBottom";
import Gallery from "./Functional Components/Gallery";
import Footer from "./Functional Components/Footer";
import Navbar from "./Functional Components/Navbar";

import './Team.css';

function Team({ changePageinApp }) {

    return (
        <div>
            <div className='homepage'>
                <div className='bg-team'>
                    <Navbar changePageinApp={changePageinApp} />
                    <ScrollToBottom />
                    <div className='synapse'>
                        <div className='cont1'>
                            <div className='homepageimgs'>
                                <div>
                                    <p className='synapseimg heading-flex phonk heading-8vw'>Team</p>
                                    <div className='scrolldownicon1'>
                                        <a href="#aboutus"><img className='scrolldown' src={scrolldown}></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="aboutus" className='aboutus'>
                            <div className='cont3 '>
                                <p className='aboutusheading'>About Us</p>

                                <p className='cont2'>
                                    Synapse is DAIICT’s annual college fest that brings together artists,
                                    designers, and creative minds from all over the world to showcase their
                                    unique collages and share their creative process with others. The festival
                                    is named after the brain's synaptic connections, which inspire the organizers
                                    to create a space for creative connections and exchanges. As the night
                                    falls, the festival transforms into a vibrant party, with live music, DJ
                                    performances, and dance parties, providing attendees with an
                                    opportunity to unwind, socialize and celebrate creativity in all its forms.
                                </p>
                                <p className='aboutusheading'>Date</p>
                                <p className=''>
                                    22  |  23  |  24  |  25  -  February
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className='theme2'>
                <div className='eventpageevent'>
                    <p className="phonk">
                        Embrace The
                        Energy Pulse
                        where joy knows
                        no bounds
                        and fun takes
                        center stage
                    </p>
                </div>
                <div className=''>
                    <p className="thetheme heading-20vh heading-flex phonk">Gallery</p>
                    <Gallery />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Team
