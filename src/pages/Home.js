import React from 'react';
import ContainerImage from '../components/ContainerImage';
import Button from '../components/Button'
import ViewAllMovies from '../components/ViewAllMovies'
const Home = () => {
    return (
        <div className="page-home">
            <ContainerImage/>
            <div className='page-home__container'>
                <div className='page-home__container__button'>
                    <Button route='/' texte='ALL MOVIES'/>
                    <Button route='/maison' texte='NEWS & EVENTS'/>
                    <Button route='/home' texte='POPULARS'/>
                </div>
                <div className='page-home__container__view'>
                <ViewAllMovies />
                </div>
            </div>
        </div>
    );
}
export default Home;
