
import { useState, useEffect } from 'react';

import '/home/andre/Documentos/dev_project/study/playme/src/components/layout/Sidebar/SideBarFavorites/style.min.css';

import { api, api_key} from "../../../../services/api";
import Card from "../../../Card"

function SideBarFavorites(props){
    const [movies, setMovies] = useState([]);
 
    const getAllMovies = api.get("/movie/now_playing", {
        params: { api_key }
    });

    useEffect(() =>{
        getAllMovies.then(r =>{
        setMovies(r.data.results);
        });
    }, [])

    const img = (width, path) => `https://image.tmdb.org/t/p/w${width}/${path}`;

    return(
        <div className='SideBarFavorites'>
            <div onClick={props.actionClose} className={props.close}>
                <div className="icon-bar-1"></div>
                <div className="icon-bar-2"></div>
            </div>
            <ul className={props.open}>
            </ul>
        </div>
    );  
}

export { SideBarFavorites} ;