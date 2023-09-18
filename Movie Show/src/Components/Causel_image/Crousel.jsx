import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Crausel.css";
function Crousel({ popularData }) {
    return (
        <>
            <div className="crousel-poster">

                <Carousel showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    showStatus={false}
                    infiniteLoop={true}
                >
                    {
                        popularData.map(movie => (
                            <div className="crousel">
                                <div >
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                    <p className="Poster_text">{movie.original_title}</p>
                                </div>

                            </div>

                        ))

                    }
                </Carousel>
            </div>

        </>

    )
}

export default Crousel
