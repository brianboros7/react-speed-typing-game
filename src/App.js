import React from 'react'
import Header from './components/header/Header'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Header /> 

      <Switch>
        <Route
          path="/" exact>
            <Home /> 
        </Route>

        <Route
          path="/dashboard">
            <Dashboard /> 
        </Route>

      </Switch>
    </Router>
  );
}

export default App;