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

import Gallery from "./Gallery";
import Footer from "./Footer";
import Navbar from "./Navbar";

import './First.css';



class First extends React.Component{
    constructor(){
        super();
        this.state = {page : 'homepage'};
    }
    
    changePageinApp=(newpageinApp)=> {
        this.setState({page : newpageinApp});
    }

    render(){
        if (this.state.page == 'homepage') {
            return (
                <div>
                    <div className='homepage'>
                        <div className='bg-1'></div>
                        <div className='synapse'>
                            <div className='cont1'>
                                <div className='homepageimgs'>
                                    <div>
                                        <img className='synapseimg' src={synapse}></img>
                                        <div className='scrolldownicon1'>
                                            <a href="#aboutus"><img className='scrolldown' src={scrolldown}></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="aboutus" className='aboutus'>
                                <div className='cont3'>
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
                        <Navbar changePageinApp={this.changePageinApp} />
                    </div>
    
                    <div>
                        <div className='theme'>
                            <Navbar changePageinApp={this.changePageinApp} />
                            <div className='themeflexout'>
                                <div className='themegrid'>
                                    <div className='themeflex'>
                                        <img className='themeimg custom-box-shadow' src={theme}></img>
                                    </div>
                                    <div className='themetxt'>
                                        <div>
                                            <p className='thetheme phonk'>The Theme</p>
                                            <p className="satoshi">
                                                Synapse is DAIICT’s annual college fest that brings together artists,
                                                designers, and creative minds from all over the world to showcase their
                                                unique collages and share their creative process with others. The festival is named after the brain's synaptic connections, which inspire the organizers to create a space for creative connections and exchanges. As the night falls, the festival transforms into a vibrant party, with live music, DJ performances, and dance parties, providing attendees with an opportunity to unwind, socialize and celebrate creativity in all its forms.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Navbar changePageinApp={this.changePageinApp} />
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
                                <Navbar changePageinApp={this.changePageinApp} />
                                <p className="thetheme heading-20vh heading-flex phonk">The Gallery</p>
                                <Gallery />
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
                    <Events changePageinApp={this.changePageinApp}/>
                </div>
            )
        }
        else if (this.state.page == 'pronight') {
            return (
                <div>
                    <ProNight changePageinApp={this.changePageinApp}/>
                </div>
            )
        }
        else if (this.state.page == 'team') {
            return (
                <div>
                    <Team changePageinApp={this.changePageinApp}/>
                </div>
            )
        }
        else if (this.state.page == 'hackout') {
            return (
                <div>
                    <HackOut changePageinApp={this.changePageinApp}/>
                </div>
            )
        }
        else if (this.state.page == 'youthrun') {
            return (
                <div>
                    <YouthRun changePageinApp={this.changePageinApp}/>
                </div>
            )
        }
        else if (this.state.page == 'sponsors') {
            return (
                <div>
                    <Sponsors changePageinApp={this.changePageinApp}/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className='homepage'>
                        <div className='bg-1'></div>
                        <div className='synapse'>
                            <div className='cont1'>
                                <div className='homepageimgs'>
                                    <img className='synapseimg' src={synapse}></img>
                                    <div className='scrolldownicon1'>
                                        <a href="#aboutus"><img className='scrolldown' src={scrolldown}></img></a>
                                    </div>
                                </div>
                            </div>
                            <div id="aboutus" className='aboutus'>
                                <div className='cont3'>
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
                        <Navbar changePageinApp={this.changePageinApp} />
                    </div>
    
                    <div>
                        <div className='theme'>
                            <Navbar changePageinApp={this.changePageinApp} />
                            <div className='themeflexout'>
                                <div className='themegrid'>
                                    <div className='themeflex'>
                                        <img className='themeimg custom-box-shadow' src={theme}></img>
                                    </div>
                                    <div className='themetxt'>
                                        <div>
                                            <p className='thetheme'>The Theme</p>
                                            <p>
                                                Synapse is DAIICT’s annual college fest that brings together artists,
                                                designers, and creative minds from all over the world to showcase their
                                                unique collages and share their creative process with others. The festival is named after the brain's synaptic connections, which inspire the organizers to create a space for creative connections and exchanges. As the night falls, the festival transforms into a vibrant party, with live music, DJ performances, and dance parties, providing attendees with an opportunity to unwind, socialize and celebrate creativity in all its forms.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Navbar changePageinApp={this.changePageinApp} />
                            <div className='homepageevent'>
                                <p>
                                    Embrace The
                                    Energy Pulse
                                    where joy knows
                                    no bounds
                                    and fun takes
                                    center stage
                                </p>
                            </div>
                            <Navbar changePageinApp={this.changePageinApp} />
                            <div className='gallery'>
                                <p>The Gallery</p>
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
