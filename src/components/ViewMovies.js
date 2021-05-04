import React from 'react';
import Button from './Button';

const ViewMovies = () => {
    return (
        <div className='container-view-movies'>
            <div className='container-view-movies__button'>
                <Button texte='ALL MOVIES'/>
                <Button texte='NEWS & EVENTS'/>
            </div>
            
        </div>
    );
}

export default ViewMovies;
