import React, { useEffect, useState } from "react";

import { api, api_key } from "../../services/api";
import Card from "../../components/Card";
import Container from "../../components/Container";

const Home = ()=> {
    const [movies, setMovies] = useState([]);
 
    const getAllMovies = api.get("/movie/now_playing", {
        params: { api_key }
    });

    useEffect(() =>{
        getAllMovies.then(r =>{
        setMovies(r.data.results);
        console.log(movies);
        });
    }, [])

    const img = (width, path) => `https://image.tmdb.org/t/p/w${width}/${path}`;

    return (
        <div>
            <h2>The better of weeka</h2>
            <div className="d-flex flex-column flex-md-row justify-content-center">  
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
    );
}

export default Home;