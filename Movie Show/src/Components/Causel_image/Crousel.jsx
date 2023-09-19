import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Crausel.css";
function Crousel({ popularData }) {
    return (
        <>
            <div className="crousel-poster">

                <Carousel showThumbs={false}
                    autoPlay={false}
                    transitionTime={3}
                    showStatus={false}
                    infiniteLoop={true}
                >
                    {
                        popularData.map(movie => (
                            <>
                                <div className="crousel">

                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                    <div className="poster-detail">

                                        <p>{movie ? movie.original_title : ""}</p>
                                        <div className="date_rating">

                                            <span>{movie ? movie.release_date : ""}</span>
                                            <span className='rating'></span>
                                        </div>
                                        <span>{movie ? movie.overview : ""}</span>
                                    </div>


                                </div>
                            </>

                        ))

                    }
                </Carousel>
            </div>

        </>

    )
}

export default Crousel
