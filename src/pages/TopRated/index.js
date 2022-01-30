import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { api, api_key } from "../../services/api";
import Card from "../../components/Card";
import Container from "../../components/Container";

import '../style.min.css'
import Title from "../../components/layout/Title";

const TopRated = ()=> {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        async function getTopRatedMovies(){
            const response = await api.get("/movie/top_rated", {
                params: { api_key }
            });
            const dataMovie = response.data.results ;
            setMovies(dataMovie);
        }
        getTopRatedMovies()
    }, [])

    const img = (width, path) => `https://image.tmdb.org/t/p/w${width}/${path}`;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center text-center body--title">
                       <Title>Top Rated</Title>
                    </div>
                    <div className="d-flex flex-column flex-lg-row flex-lg-wrap justify-content-center">  
                        {
                            movies.map((movie)=>{
                                return(
                                    <div key={movie.id}>
                                        <Card 
                                            poster={img(400, movie.poster_path)} title={movie.title}
                                            language={movie.original_language} average={movie.vote_average}>
                                                <Link to={`movie/id=${movie.id}` } className="btn btn-danger">More</Link>
                                                <button className="btn btn-danger">Trailer</button>
                                        </Card>
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