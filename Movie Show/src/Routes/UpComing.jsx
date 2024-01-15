import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import CardArea from '../Components/CardArea/CardArea';

function Upcoming() {
  return (
    <div>
      <NavBar />
      <h1>Upcoming Sec</h1>
      <CardArea/> {/* Pass a prop to specify the API endpoint */}
    </div>
  );
}

export default Upcoming;