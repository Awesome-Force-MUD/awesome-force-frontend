import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './views/Login'
import Register from './views/Register'
import MainDash from './views/MainDash'
import SplashPage from './views/SplashPage'

import PrivateRoute from './components/utils/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={SplashPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/game" component={MainDash} />
      </div>
    </Router>
  );
}

export default App;
