import React from 'react';
import "./CardStyle.css";

function Card({  movieval}) { // Pass 'movie' as a prop instead of 'popularData'
  return (
    
    <div className="card">
 <img src={`https://image.tmdb.org/t/p/original${ movieval ?  movieval.poster_path : ""}`}/> 
     
    </div>

  );
}

export default Card;
