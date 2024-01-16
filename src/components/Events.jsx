import React, { useState, useEffect } from "react";

import scrolldown from "../assets/scrolldown.png";

import Footer from "./Functional Components/Footer";
import Navbar from "./Functional Components/Navbar";
import EventCategoryCard from "./Functional Components/EventCategoryCard";
import './Events.css'

function Events({ changePageinApp }) {
    const [data, setData] = useState([])
    const [background, setBackground] = useState('')
    const [eventExit, setEventExit] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Synapse-2024/Categories.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    function handleExploreClick(url) {
        setBackground(url)
        setEventExit(false)
    }

    function handleBack() {
        setEventExit(true)
        setBackground('')
    }

    const eventStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
    };

    return (
        <>
            <div className='homepage'>
                <div className='bg-event'></div>
                <div className='synapse'>
                    <div className='cont1'>
                        <div className='homepageimgs'>
                            <p className='synapseimg heading-flex phonk heading-8vw'>Events</p>
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
                <Navbar changePageinApp={changePageinApp} />
            </div>

            <div className='theme'>
                {/* <Navbar changePageinApp={changePageinApp} /> */}
                <div className="event-page" style={eventStyle}>
                    <div className="event-container">
                        {
                            eventExit &&
                            <div className="event-heading">
                                <span className="explore">Explore</span> Events
                            </div>
                        }

                    </div>
                    {
                        eventExit === true ?
                            <div className="cards-container">
                                {
                                    data.map((d) =>
                                        <EventCategoryCard
                                            key={d.id}
                                            id={d.id}
                                            imageUrl={d.url}
                                            title={d.name}
                                            onClickExplore={handleExploreClick}
                                        />
                                    )
                                }
                            </div> :
                            <div className="sub-events-container">
                                <div className="back-btn">
                                    <i class="fa fa-arrow-left" aria-hidden="true" onClick={handleBack} ></i>
                                </div>
                            </div>
                    }
                </div>
                <Navbar changePageinApp={changePageinApp} />
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
                <Navbar changePageinApp={changePageinApp} />
                <div className='gallery'>
                    <p className="phonk">The Gallery</p>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Events
