import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const url ="https://api.themoviedb.org/3/discover/tv?api_key=7c26ca67b90a8fe49a5f921b53774b4e&with_genres=10759"

export const SerieContext = createContext();

export const SerieProvider=({children})=>{
    const [series, setSeries] = useState([])
    const RetrievesDataAndPopulatesTheSerieList =(movies)=>{
        const temporaryListofSeries = movies.data.results.map(movie=>(
            {
              id:movie.id,
              title:movie.original_name,
              srcImg:movie.poster_path,
              note:movie.vote_average
            }
          ))
          setSeries(temporaryListofSeries)
    }   
    useEffect(()=>{
        axios.get(url)
        .then(RetrievesDataAndPopulatesTheSerieList)
    }, [])
    return(
        <SerieContext.Provider value={[series, setSeries]}>
            {children}
        </SerieContext.Provider>
    )
}