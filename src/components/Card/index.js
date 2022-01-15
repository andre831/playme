import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './style.min.css'
import cardmovie from '../../assets/img/cardmovie.jpg'

const Card = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="cardMovie">
                    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center cardMovie-content">
                        <img width="200" src={props.poster} />
                        <div>
                            <div className="d-flex justify-content-center text-start align-items-center cardMovie-content--title">
                                <Link to="">
                                    <h3>
                                        {props.title}
                                    </h3>
                                </Link>
                            </div>
                           <div  className="d-flex flex-row justify-content-between flex-column flex-lg-row align-items-center">
                                <div className="d-flex flex-column flex-lg-row cardMovie-content--buttons">
                                    <Link to="" className="btn btn-primary">More</Link>
                                    <Link to="" className="btn btn-primary">Trailer</Link>
                                </div>
                                <div className="text-end cardMovie-content--average">
                                    <p>{props.average}</p>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

//<div className="d-flex flex-row justify-content-center justify-content-md-start cardMovie-content--language">
//<p>Language: {props.language}</p>
//</div>

export default Card;