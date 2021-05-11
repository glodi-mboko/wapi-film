//import React, {useState, useEffect} from 'react';
//import axios from 'axios'
import Header from './components/Header'
import Home from './pages/page 1/Home'
import Contact from './pages/page 1/Contact'
import About from './pages/page 1/About'
import {Route, Switch} from 'react-router-dom'
import Footer from './components/Footer'
import {ActionMoviesProvider} from './contexts/ActionMoviesContext'
import {HistoryMoviesProvider} from './contexts/HistoryMoviesContext'
import {SerieProvider} from './contexts/SerieContext'
import {FamilyMovieProvider} from './contexts/FamilyContext'
import {CritiqueProvider} from './contexts/CritiqueContext'
//const url ="https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-publication-date&api-key=MsAmiKsPldyZszRAHekV0FnmArQa1NGF"
const App = () => {
    /* const [actionMovies, setActionMovies] = useState([])
    const RetrievesDataAndPopulatesTheActionMovieList =(movies)=>{
      //console.log(movies.data)
        const temporaryListofMovies = movies.data.results.map(movie=>(
            {
              author:movie.byline,
              title:movie.display_title,
              img:movie.multimedia.src,
              dateOfPublication:movie.date_updated,
              summary:movie.summary_short,
              more:movie.link.url
            }
          ))
        
        console.table(temporaryListofMovies)
        setActionMovies(temporaryListofMovies)
    }
    useEffect(()=>{
        axios.get(url)
        .then(RetrievesDataAndPopulatesTheActionMovieList)
    }, []) */
//console.table(actionMovies)
  return (
    <CritiqueProvider>
    <FamilyMovieProvider>
    <SerieProvider>
    <HistoryMoviesProvider>
    <ActionMoviesProvider>
      <div>
          <Header/>
          <Switch>
            <Route  path="/contact" component={Contact}/>
            <Route  path="/about" component={About}/>
            <Route  path="/" component={Home}/>
          </Switch>
          <Footer />
      </div>
    </ActionMoviesProvider>
    </HistoryMoviesProvider>
    </SerieProvider>
    </FamilyMovieProvider>
    </CritiqueProvider>
  );
}

export default App;
