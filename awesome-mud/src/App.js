import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import MainDash from './components/MainDash'

import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <PrivateRoute path="/" component={MainDash} /> */}
      </div>
    </Router>
  );
}

export default App;
