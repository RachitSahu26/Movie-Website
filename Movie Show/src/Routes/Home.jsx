import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar';
const [popularData,setPopularData]=useState([]);
function Home() {
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data =>setPopularData(data.results))
    }, [])
    return (
        <>
           <NavBar/>

        </>
    )
}

export default Home
