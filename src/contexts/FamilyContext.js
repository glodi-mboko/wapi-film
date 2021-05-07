import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const url ="https://api.themoviedb.org/3/discover/movie?api_key=7c26ca67b90a8fe49a5f921b53774b4e&with_genres=10751"

export const FamilyMovieContext = createContext();

export const FamilyMovieProvider=({children})=>{
    const [familyMovies, setFamilyMovies] = useState([])
    const RetrievesDataAndPopulatesTheFamilyMovieList =(movies)=>{
        const temporaryListofFamilyMovies = movies.data.results.map(movie=>(
            {
              id:movie.id,
              title:movie.original_title,
              img:movie.poster_path,
              note:movie.vote_average
            }
          ))
          setFamilyMovies(temporaryListofFamilyMovies)
    }   
    useEffect(()=>{
        axios.get(url)
        .then(RetrievesDataAndPopulatesTheFamilyMovieList)
    }, [])
    return(
        <FamilyMovieContext.Provider value={[familyMovies, setFamilyMovies]}>
            {children}
        </FamilyMovieContext.Provider>
    )
}