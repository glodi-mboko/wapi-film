import React, {useContext} from 'react';
import {HistoryMoviesContext} from '../contexts/HistoryMoviesContext'
import CardMovie from './CardMovie'
const MovieHistory = () => {
    const [movies] = useContext(HistoryMoviesContext)
    return (
        <div className='all-movies__container'>
                <h2>STORY MOVIE</h2>
                <div className='all-movies__container__drame-movi'>
                    {
                        movies.map(({id, title, img, note})=>(
                            <CardMovie key={id} title={title} srcImg={img} note ={note}/>
                        ))
                    }   
                </div>
            </div>
    );
}

export default MovieHistory;
