import React from 'react'
import PropTypes from 'prop-types';
import './EventCategoryCard.css'
const EventCategoryCard = ({id, imageUrl, title, onClickExplore }) => {
    function getMargin(num){
        if(num%2===0){
            return 1
        }
        else if((num-1)%4===0){
            return 0
        }
        else{
            return 2
        }
    }
    const margin = 1.5*getMargin(id)
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
        marginTop:`${margin}rem`
      };
    
      return (
        <div className="card" style={cardStyle}>
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <button className="explore-button" onClick={onClickExplore}>
              Explore
            </button>
          </div>
        </div>
      );
}
EventCategoryCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClickExplore: PropTypes.func.isRequired,
  };

  export default EventCategoryCard;