import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import '../style.min.css'

import Title from "../../components/layout/Title";
import Container from "../../components/Container";
import EmptySVG from "../../assets/img/emptySVG.svg"
import Card from "../../components/Card";


const Favorites = (props) => {
    const [favMovies, setFavMovies] = useState([]);

    useEffect(() => {
        const storageMovie = localStorage.getItem('movies');
        setFavMovies(JSON.parse(storageMovie));
    }, [])

    function toggleDeleteMovie(id){

        const updateStorage = favMovies.filter((movie)=>{
           return movie.id !== id;
        });

        setFavMovies(updateStorage);

        localStorage.setItem('movies', JSON.stringify(updateStorage))

    }

    const img = (width, path) => `https://image.tmdb.org/t/p/w${width}/${path}`;

    return (
        <Container>
            <Title>Favorites</Title>
            <div className='SideBarFavorites'>
                <div onClick={props.actionClose} className={props.close}>
                    <div className="icon-bar-1"></div>
                    <div className="icon-bar-2"></div>
                </div>
                <div className={props.open}>
                    {favMovies != 0
                        ?
                        favMovies.map(item => { return(
                            <Card poster={img(200, item.poster_path)} title={ item.title } average={ item.vote_average }>
                                <Link className="btn btn-primary" to={props.path} >More</Link>
                                 <button className="btn btn-primary" onClick={() => toggleDeleteMovie(item.id)}>Remove</button>
                            </Card>
                        )})
                        :
                        <div className="d-flex flex-column text-center align-items-center">
                            <img src={EmptySVG} alt="person with box" />
                            <p>You didn't save movies</p>
                            <p className="mr-4">
                                You can come
                                <Link className="ml-3" to="/">home</Link>
                            </p>
                        </div>}
                </div>
            </div>
        </Container>
    );
}

export default Favorites;