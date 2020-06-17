import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.scss';
import { HomeView, PlayView } from '../views';

export const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/play">
          <PlayView />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
