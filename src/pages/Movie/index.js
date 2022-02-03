import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/";

import { api, api_key} from '../../services/api'

import Container from '../../components/Container';

export default function Movie(){

    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function getMovie(){
            const response = await api.get(`/movie/${id}`,{
                params: { api_key },
            })

            const data = response.data;
            setMovie(data);
        }
        
        getMovie()
    },[])

    function toggleSave(){
        
        const storage = localStorage;

        const listMovies = storage.getItem('movies');

        const savedMovies = JSON.parse(listMovies) || [] ;

        const has = savedMovies.some( item => item.id === movie.id);
        
        if(has){
            alert('ja tem esse filme');
            return;
        }

        savedMovies.push(movie);
        storage.setItem('movies', JSON.stringify(savedMovies));
        alert('salvo com sucesso');
    }



    return(
       <Container>
            <div>
                <h2>Pagina do flme { movie.title }</h2>
                <button onClick={() => toggleSave()}>Save</button>
            </div>
       </Container>
        
    )
}