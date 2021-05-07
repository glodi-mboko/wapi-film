import React, {useContext} from 'react';
import {FamilyMovieContext} from '../contexts/FamilyContext'
import CardMovie from './CardMovie'
const MovieFamily = () => {
    const [familyMovies] = useContext(FamilyMovieContext)
    return (
        <div className='all-movies__container'>
                <h2>FAMILY</h2>
                <div className='all-movies__container__comedi'>
                    {
                        familyMovies.map(({id, title, img, note})=>(
                            <CardMovie key={id} title={title} srcImg={img} note={note} />
                        ))
                    }
                </div>        
            </div>
    );
}

export default MovieFamily;
