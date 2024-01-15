import React, { useState, useEffect } from 'react';
import "./CardAreaStyle.css";
import Card from '../Cards/Card';
import { Api } from '../../Utility/Api';

function CardArea({ apiEndpoint }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    Api(apiEndpoint).then((data) => setCardData(data)); // Pass the apiEndpoint prop to the API function
  }, [apiEndpoint]);

  return (
    <div className='Card-Area'>
      {cardData.map((movieval, ind) => (
        <Card key={ind} movieval={movieval} />
      ))}
    </div>
  );
}

export default CardArea;
