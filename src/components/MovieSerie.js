import React from 'react';
import CardMovie from './CardMovie'
const MovieSerie = () => {
    return (
        <div className='all-movies__container'>
                <h2>SERIE</h2>
                <div className='all-movies__container__serie'>
                    <CardMovie/>
                    <CardMovie/>
                    <CardMovie/>
                    <CardMovie/>
                </div>
            </div>
    );
}

export default MovieSerie;
