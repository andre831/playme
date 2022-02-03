import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { api, api_key } from '../../services/api';

import './style.min.css'

const Card = (props) => {

    return(
        <div className="container">
            <div className="row">
                <div className="cardMovie">
                    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center cardMovie-content">
                        <img width="180" src={props.poster} />
                        <div>
                            <div className="d-flex justify-content-center text-start align-items-center cardMovie-content--title">
                                <Link to="">
                                    <h3>
                                        {props.title}
                                    </h3>
                                </Link>
                            </div>
                           <div  className="d-flex flex-row justify-content-between flex-column flex-lg-row align-items-center">
                                <div className="d-flex flex-column  cardMovie-content--buttons">
                                   {props.children}
                                  
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

export default Card;