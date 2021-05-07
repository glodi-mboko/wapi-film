import React, {useContext} from 'react';
import {ActionMoviesContext} from '../contexts/ActionMoviesContext'
import CardMovie from './CardMovie'
import "react-slideshow-image/dist/styles.css"

const MovieAction = () => {
    const [actionMovies] = useContext(ActionMoviesContext)
    return (
        <div className='all-movies__container'>
                <h2>ACTION MOVIE</h2>
                <div className='all-movies__container__action-movi'>
                    {actionMovies.map(({id, title, img, note})=>(
                            <CardMovie key={id} title = {title} srcImg={img} note={note}/>
                    ))}        
                </div> 
            </div>
    );
}

export default MovieAction;
