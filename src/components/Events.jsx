import React, { useState, useEffect } from "react";

import scrolldown from "../assets/scrolldown.png";

import Gallery from "./Functional Components/Gallery";
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
                const response = await fetch('/Synapse-2024/Categories.json');
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
                <div className='bg-event'></div>
                <div className='synapse'>
                    <div className='cont1'>
                        <div className='homepageimgs'>
                            <div>
                                <p className='synapseimg heading-flex phonk heading-8vw'>Events</p>
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
                <Navbar changePageinApp={changePageinApp} />
            </div>

            <div className='theme'>
                {/* <Navbar changePageinApp={changePageinApp} /> */}
                <div className="event-page" style={eventStyle}>
                    <div className="event-container">
                        {
                            eventExit &&
                            <div className="event-heading">
                                <span className="explore phonk thetheme">Explore Events</span>
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
                      <div className="event-title">{current.name}</div>
                      <div className="event-desc"> {current.description} </div>
                    </div>

                    <div className="parent-event-cards-container">
                      <div className="event-cards-container">
                        {
                          current.events ?                        
                            current.events.map((d)=>
                              <SubEvents
                              key ={d.id}
                              event= {d.name}
                              description={d.description}
                              backgroundUrl={d.url}
                              />):
                          <div>
                            No Events Found
                          </div>
                        }

                      </div>
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
                <div className=''>
                    <Navbar changePageinApp={changePageinApp} />
                    <p className="thetheme heading-20vh heading-flex phonk">The Gallery</p>
                    <Gallery />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Events
