import React from 'react';
import MovieAction from './MovieAction';
import MovieComedie from './MovieComedie';
import MovieDrame from './MovieDrame';
import MovieSerie from './MovieSerie';

const ViewAllMovies = () => {
    return (
        <div className='all-movies'>
            <MovieAction />
            <MovieDrame />
            <MovieSerie />
            <MovieComedie />
        </div>
    );
}

export default ViewAllMovies;
