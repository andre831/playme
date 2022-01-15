import React, { useEffect, useState } from "react";

import { api, api_key } from "../../services/api";
import Card from "../../components/Card";
import Container from "../../components/Container";

import '../style.min.css'

const TopRated = ()=> {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        async function getTopRatedMovies(){
            const response = await api.get("/movie/popular", {
                params: { api_key }
            });
            const dataMovie = response.data.results ;
            setMovies(dataMovie);
            console.log(movies);
        }
        getTopRatedMovies()
    }, [])

    const img = (width, path) => `https://image.tmdb.org/t/p/w${width}/${path}`;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center text-center body--title">
                        <h2>Popular</h2>
                    </div> 
                    <div className="d-flex flex-column flex-lg-row flex-lg-wrap justify-content-center">
                        
                        {
                            movies.map((movie)=>{
                                return(
                                    <div key={movie.id}>
                                        <Card 
                                            poster={img(400, movie.poster_path)} 
                                            title={movie.title}
                                            language={movie.original_language}
                                            average={movie.vote_average}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default TopRated;