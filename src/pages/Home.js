import React from 'react';
import ContainerImage from '../components/ContainerImage';
import Header from '../components/Header';
import ViewMovies from '../components/ViewMovies';

const Home = () => {
    return (
        <div className="page-home">
            <Header/>
            <ContainerImage />
            <ViewMovies/>
        </div>
    );
}

export default Home;
