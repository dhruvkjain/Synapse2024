import React from "react";
import "./SubEvents.css";
const SubEvents = ({id, event, description, backgroundUrl, rulebookLink, registerLink}) => {
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
              {/* <h1>{event}</h1> */}
            </div>
            <div className="flip-card-back" style={subEventStyle}>
              <div className="flip-card-content">
                {/* <div className="flip-back-bg"></div> */}
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
                {
                  !rulebookLink ? null :
                  <a className="custom-button-rulebook" href={rulebookLink} target="_blank"> Rulebook</a>
                }
                <a className="custom-button-register" href={registerLink} target="_blank">Register </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubEvents;
