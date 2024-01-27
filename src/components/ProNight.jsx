import React from "react";

import scrolldown from "../assets/scrolldown.png";

import ScrollToBottom from "./Functional Components/scrollToBottom";
import Gallery from "./Functional Components/Gallery";
import Footer from "./Functional Components/Footer";
import Navbar from "./Functional Components/Navbar";
import Amit from "../assets/Amit.jpg";
import "./ProNight.css";
import Slider from "./Functional Components/Slider";

function ProNight({ changePageinApp }) {

    return (
        <div>
            <div className='homepage'>
                <div className='bg-pronight'>
                    <Navbar changePageinApp={changePageinApp} />
                    <ScrollToBottom />
                    <div className='synapse'>
                        <div className='cont1'>
                            <div className='homepageimgs'>
                                <div>
                                    <p className='heading-flex phonk headingpronight'>ProNight</p>
                                    <div className='scrolldownicon1'>
                                        <a href="#slider"><img className='scrolldown' src={scrolldown}></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="slider" className='theme2'>
                <Slider />
                <div className=''>
                    <p className="thetheme heading-20vh heading-flex phonk">Gallery</p>
                    <Gallery />
                </div>
                <div className="aboutus aboutus3">
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
    )
}

export default ProNight
