import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './views/Login'
import Register from './views/Register'
import MainDash from './views/MainDash'
import About from './views/About'

import PrivateRoute from './components/utils/PrivateRoute'

import styled from 'styled-components'

import './App.css';

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Route exact path="/" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
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