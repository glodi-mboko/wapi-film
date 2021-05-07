import React from 'react';
import CardMovie from './CardMovie'
const MovieDrame = () => {
    return (
        <div className='all-movies__container'>
                <h2>FILM DRAME</h2>
                <div className='all-movies__container__drame-movi'>
                    <CardMovie/>
                    <CardMovie/>
                    <CardMovie/>
                    <CardMovie/>
                </div>
            </div>
    );
}

export default MovieDrame;
