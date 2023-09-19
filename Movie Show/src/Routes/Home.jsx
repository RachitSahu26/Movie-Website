import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Crousel from '../Components/Causel_image/Crousel';
import { Api } from "../Utility/Api";
import CardArea from '../Components/CardArea/CardArea';

function Home() {

      const [popularData, setPopularData] = useState([]);
    
      useEffect(() => {
        Api().then((data) => setPopularData(data));
      }, []);
    
      // Rest of your component code
   

    return (
        <>
            <NavBar />
            {/* Pass popularData as a prop to the Crousel component */}
            <Crousel popularData={popularData}  />
            <CardArea/>
        </>
    )
}

export default Home;
