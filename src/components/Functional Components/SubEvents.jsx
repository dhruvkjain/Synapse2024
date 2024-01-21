import React from "react";
import "./SubEvents.css";
const SubEvents = ({id, event, description, backgroundUrl}) => {
  const subEventStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition : 'center center'
  }
  return (
    <div className="event-cards">
      <div className="services">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={subEventStyle}>
              {/* <img src="" alt="Avatar" > */}
              <h1>{event}</h1>
            </div>
            <div className="flip-card-back" style={subEventStyle}>
              <div className="flip-card-content">
                <h1>{event}</h1>
                <p>
                  {description}
                </p>
              </div>

              <div className="sub-event-btn">
                {/* <div className="button-container-1">
                  <span className="mas">RuleBook</span>
                  <button id="work" type="button" name="Hover">
                    Rulebook
                  </button>
                </div>
                <div className="button-container-2">
                  <span className="mas">Register</span>
                  <button id="work" type="button" name="Hover">
                    Register
                  </button>
                </div> */}
                <button className="custom-button-rulebook">Rulebook</button>
                <button className="custom-button-register">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubEvents;
