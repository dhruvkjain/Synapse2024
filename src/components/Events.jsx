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
                    <i class="fa fa-arrow-left" aria-hidden="true" onClick={handleBack} ></i>
                    </div>
                </div>
            }
            
           </div>
        </>
    )
}

export default Events
