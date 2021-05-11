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


/* import React from 'react';
import labirynthe from '../img/jpg/labyrinthe-1.jpg'
import '../styles/layouts/style.css'
const CardNews = (props) => {
    return (
        <div className="mycard">
            <div className="image">
                <img src={labirynthe} alt="..."/>
            </div>
            <div className="content">
                <h2>card title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis laboriosam in molestiae, pariatur ullam mollitia labore quae nulla facilis illo maxime ad voluptates quo rerum tempore expedita obcaecati quas.</p>
            </div>
        </div>
    );
}

export default CardNews;
 */