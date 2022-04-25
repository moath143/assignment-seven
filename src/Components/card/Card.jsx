import React from 'react'
import './card.css'
const Card = ({photo, title, desc}) => {
  return (
    <div className="card">
      <div className="img">
        <img src={photo} alt="react js" />
      </div>
      <div className="card-info">
        <h3> {title} </h3>
        <p>
            {desc}
        </p>
      </div>
    </div>
  );
}

export default Card