import React, {useContext} from 'react';
import CardNews from './CardNews';
import  {CritiqueContext} from '../contexts/CritiqueContext'
const NewsAndCritiques = () => {
    const [critiques] = useContext(CritiqueContext)
    console.log(critiques)
    return (
        <div className="container-news">
            {
                critiques.map(({author, title, img, datePublished, summary, more}, index)=>(
                    <CardNews key={index} author={author} title={title} img={img} datePublished={datePublished} summary={summary} more={more} />
                ))
            }
        </div>
    );
}

export default NewsAndCritiques;
