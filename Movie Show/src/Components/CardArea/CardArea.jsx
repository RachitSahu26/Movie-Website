import React, { useState,useEffect } from 'react'
import "./CardAreaStyle.css";
import Card from '../Cards/Card';
import { Api } from '../../Utility/Api';

function CardArea({ }) {

  const [CardData, setCardData] = useState([])
  useEffect(() => {
    Api().then((data) => setCardData(data));
  }, []);
  return (
    <div className='Card-Area'>
      {
        CardData.map((movieval,ind)=>{
          return(
            <>
            <Card movieval={movieval}/>
            
            </>
          )
        })
      }

 

    </div>
  )
}

export default CardArea
