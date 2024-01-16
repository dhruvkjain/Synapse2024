import React, { useState, useEffect } from "react";
import Navbar from "./Functional Components/Navbar";
import EventCategoryCard from "./Functional Components/EventCategoryCard";
import './Events.css'

function Events({changePageinApp}){
    const [data, setData] = useState([])

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

      function handleExploreClick(){
        console.log("Gello");
      }

    return(
        <>
           <Navbar changePageinApp={changePageinApp} />

           <div className="event-page">
            <div className="event-container">
                <div className="event-heading">
                    <span className="explore">Explore</span> Events
                </div>
            </div>
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
            
            </div>
           </div>
        </>
    )
}

export default Events
