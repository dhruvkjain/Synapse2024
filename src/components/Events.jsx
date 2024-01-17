import React, { useState, useEffect } from "react";
import Navbar from "./Functional Components/Navbar";
import EventCategoryCard from "./Functional Components/EventCategoryCard";
import SubEvents from "./Functional Components/SubEvents";
import './Events.css'

function Events({changePageinApp}){
    const [data, setData] = useState([])
    const [background, setBackground] = useState('')
    const [eventExit, setEventExit] = useState(true)
    const [current, setCurrent] = useState({})
    const bgUrl ='https://c0.wallpaperflare.com/preview/600/388/1006/group-of-people-enjoying-concerts.jpg'

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

      function handleExploreClick(id){
        let curr = data.find(e=>e.id===id)
        setCurrent(curr)
        setBackground(curr.url)
        setEventExit(false)
      }

      function handleBack(){
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
        </>
    )
}

export default Events
