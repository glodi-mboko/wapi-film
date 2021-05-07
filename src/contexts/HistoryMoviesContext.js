import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const url ="https://api.themoviedb.org/3/discover/movie?api_key=7c26ca67b90a8fe49a5f921b53774b4e&with_genres=36"

export const HistoryMoviesContext = createContext();

export const HistoryMoviesProvider=({children})=>{
    const [historyMovies, setHistoryMovies] = useState([])
    const RetrievesDataAndPopulatesTheHistoryMovieList =(movies)=>{
        const temporaryListofMovies = movies.data.results.map(movie=>(
            {
              id:movie.id,
              title:movie.original_title,
              img:movie.poster_path,
              note:movie.vote_average
            }
          ))
          setHistoryMovies(temporaryListofMovies)
    }   
    useEffect(()=>{
        axios.get(url)
        .then(RetrievesDataAndPopulatesTheHistoryMovieList)
    }, [])
    return(
        <HistoryMoviesContext.Provider value={[historyMovies, setHistoryMovies]}>
            {children}
        </HistoryMoviesContext.Provider>
    )
}