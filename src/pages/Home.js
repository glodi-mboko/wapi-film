import React from 'react';
import ContainerImage from '../components/ContainerImage';
import Header from '../components/Header';
import Button from '../components/Button'
import ViewAllMovies from '../components/ViewAllMovies'

const Home = () => {
    return (
        <div className="page-home">
            <Header/>
            <ContainerImage/>
            <div className='page-home__container'>
                <div className='container__button'>
                    <Button texte='ALL MOVIES'/>
                    <Button texte='NEWS & EVENTS'/>
                    <Button texte='POPULARS'/>
                </div>
                <div className='page-home__container__view'>
                <ViewAllMovies />
                </div>
            </div>
        </div>
    );
}

export default Home;
