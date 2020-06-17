import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '3oilerplate'
import { TrickProvider } from '../context'
import { HomeView, SetupView, PlayView, TricksView, RulesView } from '../views'
import { LocalGlobalStyle, fonts, colors } from '../style'
import { SApp } from './App.styled'
import './fonts.css'

export const history = createBrowserHistory()

const App = () => {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        fonts: {
          ...theme.fonts,
          ...fonts,
        },
        colors: {
          ...theme.colors,
          ...colors,
        },
      }}
    >
      <SApp>
        <GlobalStyle />
        <LocalGlobalStyle />
        <TrickProvider>
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
            </Switch>
          </Router>
        </TrickProvider>
      </SApp>
    </ThemeProvider>
  )
}

export default App
