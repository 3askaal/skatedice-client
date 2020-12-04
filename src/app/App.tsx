import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '3oilerplate'
import deepmerge from 'deepmerge'
import { TrickProvider, MatchProvider } from '../context'
import { HomeView, SetupView, PlayView, TricksView } from '../views'
import { LocalGlobalStyle, theme as localTheme } from '../style'
import { SApp } from './App.styled'
import './fonts.css'
import MatchesView from '../views/Matches/Matches'
import TournamentsView from '../views/Tournaments/Tournaments'

export const history = createBrowserHistory()

const App = () => {
  return (
    <ThemeProvider theme={deepmerge(theme, localTheme)}>
      <SApp>
        <GlobalStyle />
        <LocalGlobalStyle />
        <TrickProvider>
          <MatchProvider>
            <Router history={history}>
              <Switch>
                <Route exact path="/">
                  <HomeView />
                </Route>
                <Route path="/setup">
                  <SetupView />
                </Route>
                <Route path="/play">
                  <PlayView />
                </Route>
                {/* <Route path="/rules">
                <RulesView />
              </Route> */}
                <Route path="/tricks">
                  <TricksView />
                </Route>
                <Route path="/matches">
                  <MatchesView />
                </Route>
                <Route path="/tournaments">
                  <TournamentsView />
                </Route>
              </Switch>
            </Router>
          </MatchProvider>
        </TrickProvider>
      </SApp>
    </ThemeProvider>
  )
}

export default App
