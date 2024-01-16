import React, { useState, useEffect } from "react";
import Navbar from "./Functional Components/Navbar";
import EventCategoryCard from "./Functional Components/EventCategoryCard";
import './Events.css'

function Events({changePageinApp}){
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

      function handleExploreClick(url){
        setBackground(url)
        setEventExit(false)
      }

      function handleBack(){
        setEventExit(true)
        setBackground('')
      }

      const eventStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
      };

    return(
        <>
           <Navbar changePageinApp={changePageinApp} />

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
                eventExit ===true?
                <div className="cards-container">
                {
                    data.map((d)=>
                        <EventCategoryCard
                            key={d.id}
                            id={d.id}
                            imageUrl={d.url}
                            title={d.name}
                            onClickExplore={handleExploreClick}
                        />
                    )
                }            
                </div>:
                <div className="sub-events-container">
                    <div className="back-btn">
                    <i className="fa fa-arrow-left" aria-hidden="true" onClick={handleBack} ></i>
                    </div>
                    <div className="sub-events">
                      <div className="event-title">Dance</div>
                      <div className="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias obcaecati optio eveniet laboriosam quibusdam fuga quas qui exercitationem nulla! Debitis voluptas adipisci quis laudantium perspiciatis. Veritatis dolorum illo aliquam omnis sit quaerat. Saepe nemo cupiditate inventore excepturi placeat deleniti aspernatur esse, recusandae labore? Modi odit distinctio id amet. Temporibus, maxime.</div>
                    </div>
                    <div className="event-cards">
                      <div className="services">
                      <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          {/* <img src="" alt="Avatar" > */}
                          <h1>Event</h1>
                        </div>
                        <div className="flip-card-back">
                          <div className="flip-card-content">
                          <h1>Event</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laboriosam iusto quas ex deleniti esse, eos odit labore possimus quisquam!</p> 
                          </div>

                          <div className="sub-event-btn">
                          <div className="button-container-1">
                            <span className="mas">RuleBook</span>
                            <button id='work' type="button" name="Hover">Rulebook</button>
                          </div>
                          <div className="button-container-2">
                            <span className="mas">Register</span>
                            <button id='work' type="button" name="Hover">Register</button>
                          </div>
                          </div>

                        </div>
                      </div>
                    </div>
                      </div>
                    </div>
                </div>
            }
            
           </div>
        </>
    )
}

export default Events
