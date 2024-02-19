import React, { useEffect, useState } from "react";

import scrolldown from "../assets/scrolldown.png";

import Footer from "./Functional Components/Footer";
import Navbar from "./Functional Components/Navbar";
import './Sponsors.css';

function Sponsors({changePageinApp}){

    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        const sponsorsarray = async () => {
            const response = (await import('./logo2.json')).default;
            setSponsors(...sponsors, response);
        }
        sponsorsarray();
    }, [])


    return(
        <div>
            <div className=''>
                <div className='bg-sponsors'>
                    <Navbar changePageinApp={changePageinApp} />
                    <div className='synapse2'>
                        <div className='cont1'>
                            <div className='homepageimgs'>
                                <div>
                                    <p className='heading-flex phonk heading-sponsors'>Sponsors</p>
                                    <div className='scrolldownicon1'>
                                        <a href="#sponsors"><img className='scrolldown' src={scrolldown}></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="sponsors" className='sponsors'>
                <p className="phonk thetheme heading-flex">Sponsors</p>
                    {
                        sponsors.map((sponsorcollection) => {
                            return (
                                <div key={sponsorcollection.id}>
                                    <div className="phonk team-heading heading-flex"><span>{sponsorcollection.title}</span></div>
                                    <div className="sponsorsmain">
                                        {
                                            sponsorcollection.members.map((sponsor)=>{
                                                return(
                                                    <div key={sponsor.id}>
                                                    <div className="mainmember">
                                                    <div className="membercard">
                                                        <div className="background2" style={{ backgroundImage: `url(${sponsor.url})` }}>
                                                        </div>
                                                        {
                                                            (sponsor.hlink != "")
                                                                ? <div>
                                                                    <a href={sponsor.hlink}><div className="box box2"><span className="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                                        width="32" height="32" viewBox="0 0 24 24" 
                                                                        className="svg">
                                                                        <path fill="white" d="M8 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H9a1 1 0 0 1-1-1"/>
                                                                    </svg>
                                                                    </span>
                                                                    </div></a>
                                                                </div>
                                                                : <div></div>
                                                        }
                                                        <div className="box box4"></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="name">{sponsor.name}</div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>

            <div className=''>
                <Footer />
            </div>

        </div>
    )
}

export default Sponsors
