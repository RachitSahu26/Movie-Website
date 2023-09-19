import React from 'react';
import "./CardStyle.css";

function Card({  movieval}) { // Pass 'movie' as a prop instead of 'popularData'
  return (
    
    <div className="card">
<p>iamge</p>
      <div className="card-detail">
        <h4>{movieval ? movieval.original_title : ""}</h4>
        <p>{movieval ? movieval.overview : ""}</p>
      
      </div>
    </div>

  );
}

export default Card;
