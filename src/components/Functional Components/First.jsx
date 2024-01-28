import React from "react";

import synapse from "../../assets/synapse.png";
import scrolldown from "../../assets/scrolldown.png";
import theme from "../../assets/theme.png";

import Events from "../Events";
import ProNight from '../ProNight';
import Team from '../Team';
import HackOut from '../HackOut';
import YouthRun from '../YouthRun';
import Sponsors from '../Sponsors';

import ScrollToBottom from "./scrollToBottom";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Navbar from "./Navbar";

import './First.css';



class First extends React.Component {
    constructor() {
        super();
        this.state = { page: 'homepage' };
    }

    changePageinApp = (newpageinApp) => {
        this.setState({ page: newpageinApp });
    }

    render() {
        if (this.state.page == 'homepage') {
            return (
                <div>
                    <div className='homepage'>
                        <div className='bg-1'>
                            <Navbar changePageinApp={this.changePageinApp} />
                            <ScrollToBottom />
                            <div className='synapse'>
                                <div className='cont1'>
                                    <div className='homepageimgs'>
                                        <div>
                                            <p className="DAka satoshi prevent_txt_selection">#DA Ka Tyohaar!</p>
                                            <img className='synapseimg' src={synapse}></img>
                                            <p className="phonk vibrantvortex prevent_txt_selection">VIBRANT VORTEX</p>
                                            <p className="satoshi dates">22  |  23  |  24  |  25  - February</p>
                                            <div className='scrolldownicon1'>
                                                <a href="#theme"><img className='scrolldown' src={scrolldown}></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div>
                        <div id='theme' className='theme'>
                            <div className='themeflexout'>
                                <div className='themegrid'>
                                    <div className='themeflex'>
                                        <img className='themeimg custom-box-shadow' src={theme}></img>
                                    </div>
                                    <div className='themetxt stickytxt'>
                                        <div>
                                            <p className='thetheme phonk'>
                                                Theme
                                            </p>
                                            <p className="themedes satoshi">
                                                Synapse is DAIICT’s annual college fest that brings together artists,
                                                designers, and creative minds from all over the world to showcase their
                                                unique collages and share their creative process with others. The festival is named after the brain's synaptic connections, which inspire the organizers to create a space for creative connections and exchanges. As the night falls, the festival transforms into a vibrant party, with live music, DJ performances, and dance parties, providing attendees with an opportunity to unwind, socialize and celebrate creativity in all its forms.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepageevent'>
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

                            <div className="aboutus aboutus1">
                                <div className='cont3'>
                                    <p className='aboutusheading phonk'>About Us</p>
                                    <p className='cont2 phonk'>
                                    Synapse<span className="satoshi">,</span> DAIICT<span className="satoshi">’</span>s annual college fest<span className="satoshi">,</span> unites global artists and creative 
                                    minds to showcase unique collages<span className="satoshi">,</span> share creative processes<span className="satoshi">,</span> and transforms 
                                    into a vibrant night of live music<span className="satoshi">,</span> DJ performances<span className="satoshi">,</span> and dance parties<span className="satoshi">,</span> fostering 
                                    creative connections and celebrating artistic expression<span className="satoshi">.</span>
                                    </p>
                                </div>
                            </div>
                            <Footer />

                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.page == 'events') {
            return (
                <div>
                    <Events changePageinApp={this.changePageinApp} />
                </div>
            )
        }
        else if (this.state.page == 'pronight') {
            return (
                <div>
                    <ProNight changePageinApp={this.changePageinApp} />
                </div>
            )
        }
        else if (this.state.page == 'team') {
            return (
                <div>
                    <Team changePageinApp={this.changePageinApp} />
                </div>
            )
        }
        else if (this.state.page == 'hackout') {
            return (
                <div>
                    <HackOut changePageinApp={this.changePageinApp} />
                </div>
            )
        }
        else if (this.state.page == 'sponsors') {
            return (
                <div>
                    <Sponsors changePageinApp={this.changePageinApp} />
                </div>
            )
        }
        else {
            return (
                <div>
                <div className='homepage'>
                    <div className='bg-1'>
                        <Navbar changePageinApp={this.changePageinApp} />
                        <ScrollToBottom />
                        <div className='synapse'>
                            <div className='cont1'>
                                <div className='homepageimgs'>
                                    <div>
                                        <p className="DAka satoshi">#DA Ka Tyohaar!</p>
                                        <img className='synapseimg' src={synapse}></img>
                                        <p className="phonk vibrantvortex">A VIBRANT VORTEX</p>
                                        <p className="satoshi dates">22  |  23  |  24  |  25  - February</p>
                                        <div className='scrolldownicon1'>
                                            <a href="#theme"><img className='scrolldown' src={scrolldown}></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                <div>
                    <div id='theme' className='theme'>
                        <div className='themeflexout'>
                            <div className='themegrid'>
                                <div className='themeflex'>
                                    <img className='themeimg custom-box-shadow' src={theme}></img>
                                </div>
                                <div className='themetxt stickytxt'>
                                    <div>
                                        <p className='thetheme phonk'>
                                            Theme
                                        </p>
                                        <p className="themedes satoshi">
                                            Synapse is DAIICT’s annual college fest that brings together artists,
                                            designers, and creative minds from all over the world to showcase their
                                            unique collages and share their creative process with others. The festival is named after the brain's synaptic connections, which inspire the organizers to create a space for creative connections and exchanges. As the night falls, the festival transforms into a vibrant party, with live music, DJ performances, and dance parties, providing attendees with an opportunity to unwind, socialize and celebrate creativity in all its forms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='homepageevent'>
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

                        <div className="aboutus aboutus1">
                            <div className='cont3'>
                                <p className='aboutusheading phonk'>About Us</p>
                                <p className='cont2 phonk'>
                                Synapse<span className="satoshi">,</span> DAIICT<span className="satoshi">’</span>s annual college fest<span className="satoshi">,</span> unites global artists and creative 
                                minds to showcase unique collages<span className="satoshi">,</span> share creative processes<span className="satoshi">,</span> and transforms 
                                into a vibrant night of live music<span className="satoshi">,</span> DJ performances<span className="satoshi">,</span> and dance parties<span className="satoshi">,</span> fostering 
                                creative connections and celebrating artistic expression<span className="satoshi">.</span>
                                </p>
                            </div>
                        </div>
                        <Footer />

                    </div>
                </div>
            </div>
            )
        }
    }
}

export default First
