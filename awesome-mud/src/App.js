import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SplashPage from './views/SplashPage';
import Header from './components/Header'
import About from './views/About'
import Login from './views/Login'
import Register from './views/Register'
import Character from './views/Character'
import MainDash from './views/MainDash'

import PrivateRoute from './components/utils/PrivateRoute'

import styled from 'styled-components'


function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Route exact path="/" component={SplashPage} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/character" component={Character} />
        <PrivateRoute path="/game" component={MainDash} />
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
  background-color: #111;
`