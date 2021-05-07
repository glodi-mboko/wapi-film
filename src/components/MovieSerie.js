import {SerieContext} from '../contexts/SerieContext'
import React, {useContext} from 'react';
import CardMovie from './CardMovie'
const MovieSerie = () => {
    const [series] = useContext(SerieContext)
    return (
        <div className='all-movies__container'>
                <h2>SERIE</h2>
                <div className='all-movies__container__serie'>
                    {
                        series.map(({id, title, srcImg, note})=>(
                            <CardMovie key={id} title={title} srcImg={srcImg} note={note}/>
                        ))
                    }
                </div>
            </div>
    );
}

export default MovieSerie;
