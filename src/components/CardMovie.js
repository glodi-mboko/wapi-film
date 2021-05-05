import React from 'react';
import venon from '../img/jpg/venon.jpg'

const CardMovie = () => {
    return (
        <div className='card-movi'>
            <img src={venon} alt='justiceleague'/>
            <div>
                <h3>JUSTICE LEAGUE</h3>
                <span>NOVEMBRE 6, 2014</span>
                <p><span>8.7</span>/10</p>
            </div>
        </div>
    );
}

export default CardMovie;
