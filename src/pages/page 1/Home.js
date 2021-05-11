import React from 'react';
import ContainerImage from '../../components/ContainerImage';
import Button from '../../components/Button'
import {Route, Switch} from 'react-router-dom'
import ViewAllMovies from '../../components/ViewAllMovies'
import NewsAndCritiques from '../../components/NewsAndCritiques';
const Home = () => {
    return (
        <div className="page-home">
            <ContainerImage/>
            <div className='page-home__container'>
                <div className='page-home__container__button'>
                    <Button route="/all-movies" texte='ALL MOVIES'/>
                    <Button route='/news' texte='NEWS & EVENTS'/>
                    <Button route='/maison' texte='POPULARS'/>
                </div>
                <div className='page-home__container__view'>
                    <Switch>
                        <Route path="/all-movies">
                            <ViewAllMovies/>
                        </Route>
                        <Route path="/news">
                            <NewsAndCritiques/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}
export default Home;
