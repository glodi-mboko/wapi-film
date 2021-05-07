import React, {useContext} from 'react';
import {ActionMoviesContext} from '../contexts/ActionMoviesContext'
import CardMovie from './CardMovie'

const MovieAction = () => {
    const [listOfActionMovies] = useContext(ActionMoviesContext)
    console.log(listOfActionMovies)
    return (
        <div className='all-movies__container'>
                <h2>FILM ACTION</h2>
                <div className='all-movies__container__action-movi'>
                    <CardMovie/>
                    <CardMovie/>
                    <CardMovie/>
                    <CardMovie/>
                </div>
            </div>
    );
}

export default MovieAction;
