import React from 'react';
import MovieAction from './MovieAction';
import MovieComedie from './MovieFamily';
import MovieDrame from './MovieHistory';
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
