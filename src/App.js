import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css';

import { Home } from './pages/Home'
import { Details } from './pages/Details'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Details} />
          <Route component={NotFound} />
        </Switch>
        </div>
    );
  }
}

export default App;
