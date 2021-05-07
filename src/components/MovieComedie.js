import React from 'react';
import CardMovie from './CardMovie'
const MovieComedie = () => {
    return (
        <div className='all-movies__container'>
                <h2>COMEDIE</h2>
                <div className='all-movies__container__comedi'>
                    <CardMovie />
                    <CardMovie/>
                    <CardMovie/>
                    <CardMovie/>
                </div>        
            </div>
    );
}

export default MovieComedie;
