import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const url ="https://api.themoviedb.org/3/discover/movie?api_key=7c26ca67b90a8fe49a5f921b53774b4e&with_genres=878"

export const ActionMoviesContext = createContext();

export const ActionMoviesProvider=({children})=>{
    const [actionMovies, setActionMovies] = useState([])
    const RetrievesDataAndPopulatesTheActionMovieList =(movies)=>{
        const temporaryListofMovies = movies.data.results.map(movie=>(
            {
              id:movie.id,
              title:movie.original_title,
              img:movie.poster_path,
              note:movie.vote_average
            }
          ))
          setActionMovies(temporaryListofMovies)
    }   
    useEffect(()=>{
        axios.get(url)
        .then(RetrievesDataAndPopulatesTheActionMovieList)
    }, [])
    return(
        <ActionMoviesContext.Provider value={[actionMovies, setActionMovies]}>
            {children}
        </ActionMoviesContext.Provider>
    )
}