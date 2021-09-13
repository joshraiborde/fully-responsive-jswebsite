import React from 'react';
// import logo from './logo.svg';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
