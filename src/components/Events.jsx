import React, { useState, useEffect } from "react";

import scrolldown from "../assets/scrolldown.png";

// import ScrollToBottom from "./Functional Components/scrollToBottom";
import Footer from "./Functional Components/Footer";
import Navbar from "./Functional Components/Navbar";
import EventCategoryCard from "./Functional Components/EventCategoryCard";
import SubEvents from "./Functional Components/SubEvents";
import './Events.css'

function Events({ changePageinApp }) {
    const [data, setData] = useState([])
    const [background, setBackground] = useState('')
    const [eventExit, setEventExit] = useState(true)
    const [current, setCurrent] = useState({})
    const bgUrl = 'https://c0.wallpaperflare.com/preview/600/388/1006/group-of-people-enjoying-concerts.jpg'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Synapse2024/Categories.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    function handleExploreClick(id) {
        let curr = data.find(e => e.id === id)
        setCurrent(curr)
        setBackground(curr.url)
        setEventExit(false)
    }

    function handleBack() {
        setEventExit(true)
        setBackground('')
        setCurrent({})
    }


    const eventStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
    };

    return (
        <div>
            <div className='homepage'>
                <div className='bg-event'>
                    <Navbar changePageinApp={changePageinApp} />
                    {/* <ScrollToBottom /> */}
                    <div className='synapse'>
                        <div className='cont1'>
                            <div className='homepageimgs'>
                                <div>
                                    <p className='heading-flex phonk heading-8vw'>Events</p>
                                    <div className='scrolldownicon1'>
                                        <a href="#event-page"><img className='scrolldown' src={scrolldown}></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className=''>
                <div id="event-page" className="event-page" style={eventStyle}>
                    <div className="event-container">
                        {
                            eventExit &&
                            <div className="event-heading">
                                <span className="explore phonk exploreevents">Explore Events</span>
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
                                        <i className="fa fa-arrow-left" aria-hidden="true" onClick={handleBack} ></i>
                                    </div>
                                <div className="sub-events">
                                    <div className="event-title phonk">{current.name}</div>
                                    <div className="event-desc"> {current.description} </div>
                                </div>

                                <div className="parent-event-cards-container">
                                    <div className="event-cards-container">
                                        {
                                            current.events ?
                                                current.events.map((d) =>
                                                    <SubEvents
                                                        key={d.id}
                                                        event={d.name}
                                                        description={d.description}
                                                        backgroundUrl={d.url}
                                                    />) :
                                                <div>
                                                    No Events Found
                                                </div>
                                        }

                                    </div>
                                </div>
                            </div>
                    }

                </div>
                <div className='eventpageevent'>
                    <p data-aos="fade-up" data-aos-delay="300" className="phonk">
                        Embrace The
                        Energy Pulse
                        where joy knows
                        no bounds
                        and fun takes
                        center stage
                    </p>
                </div>
                <div className="aboutus aboutus2">
                    <div className='cont3'>
                        <p className='aboutusheading phonk'>About Us</p>
                        <p data-aos="fade-up" data-aos-delay="300" className='cont2 phonk'>
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

export default Events
