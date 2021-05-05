//import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
