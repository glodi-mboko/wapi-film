import React from 'react';

const CardMovie = ({id, title, srcImg, note}) => {
    const baseSourceForImage = "https://image.tmdb.org/t/p/original/"
    return (
        <div className='card-movi'>
            <img src={baseSourceForImage + srcImg} alt={title}/>
            <div>
                <h3>{title}</h3>
                <span>{note}</span>
            </div>
        </div>
    );
}

export default CardMovie;
