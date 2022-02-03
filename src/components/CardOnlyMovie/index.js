import { Link } from 'react-router-dom';

import './style.min.css'

const CardOnlyMovie = (props) => {

    return(
        <div className="d-flex flex-column flex-lg-row align-items-center">
            <div className="card__poster">
                <img src={props.poster} alt={`poster from ${props.alt}`} />
            </div>
            <div className="card__text">
                <h2>{props.title}</h2>
            </div>
            <div className="card__buttons">
                <Link className="btn btn-primary" to={props.path} >More</Link>
                <button className="btn btn-primary" onClick={() => deleteMovie()}>Remove</button>
            </div>
        </div>
    )
}

export default CardOnlyMovie;