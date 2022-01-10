import { useEffect, useState} from 'react';

import {api} from './services/api';
import {api_key} from './services/api'
import  Routes  from './routes';

function App() {

  const [movies, setMovies] = useState([]);


  const getAllMovies = api.get("/movie/upcoming", {
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
      {
        movies.map((movie)=>{
          return(
            <div key={movie.id}>
              <img src={img(400, movie.poster_path)} />
              {movie.overview}
            </div>
          )
        })
      }
      <Routes />
    </div>
  );
}

export default App;
