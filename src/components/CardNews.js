import React from 'react';
const CardNews = ({author, title, img, datePublished, summary, more}) => {
    return (
        <div className="news-card">
            <img src={img} alt={title} className="news-card__image"/>
            <div className="news-card__text-wrapper">
                <h2 className="news-card__title">{title}</h2>
                <div className="news-card__post-date">{datePublished}</div>
                <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">{summary}&hellip;</p>
                    <a href={more} className="news-card__read-more">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default CardNews;
