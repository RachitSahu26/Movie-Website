import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Crousel from '../Components/Causel_image/Crousel';

function Home() {
    const [popularData, setPopularData] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularData(data.results))
    }, []);

    return (
        <>
            <NavBar />
            {/* Pass popularData as a prop to the Crousel component */}
            <Crousel popularData={popularData} />
        </>
    )
}

export default Home;
