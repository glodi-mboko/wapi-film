import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const url ="https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-publication-date&api-key=MsAmiKsPldyZszRAHekV0FnmArQa1NGF"

export const CritiqueContext = createContext();

export const CritiqueProvider=({children})=>{
    const [critiques, setCritiques] = useState([])
    const RetrievesDataAndPopulatesTheCritiqueList =(movies)=>{
        const temporaryListofCritique = movies.data.results.map(movie=>(
            {
                author:movie.byline,
                title:movie.display_title,
                img:movie.multimedia.src,
                datePublished:movie.date_updated,
                summary:movie.summary_short,
                more:movie.link.url
            }
          ))
          setCritiques(temporaryListofCritique)
    }   
    useEffect(()=>{
        axios.get(url)
        .then(RetrievesDataAndPopulatesTheCritiqueList)
    }, [])
    return(
        <CritiqueContext.Provider value={[critiques, setCritiques]}>
            {children}
        </CritiqueContext.Provider>
    )
}