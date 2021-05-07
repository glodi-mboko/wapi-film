//import React, {useState, useEffect} from 'react';
//import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import {ActionMoviesProvider} from './contexts/ActionMoviesContext'
//const url ="https://api.themoviedb.org/3/discover/movie?api_key=7c26ca67b90a8fe49a5f921b53774b4e&with_genres=28"
const App = () => {
  /* const [actionMovies, setActionMovies] = useState([])
    const RetrievesDataAndPopulatesTheActionMovieList =(movies)=>{
        const temporaryListofMovies = movies.data.results.map(movie=>(
            {
              id:movie.id,
              title:movie.original_title,
              img:movie.poster_path,
              note:movie.vote_average
            }
          ))
          setActionMovies(temporaryListofMovies)
    }
    useEffect(()=>{
        axios.get(url)
        .then(RetrievesDataAndPopulatesTheActionMovieList)
    }, [])
console.log(actionMovies) */
  return (
    <ActionMoviesProvider>
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </ActionMoviesProvider>
    
  );
}

export default App;
