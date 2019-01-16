import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
//Component imports
import Home from './Components/Home/Home'
import Capabilities from './Components/Capabilities/Capabilities'
import Contracts from './Components/Contracts/Contracts'
import Leadership from './Components/Leadership/Leadership'
import Careers from './Components/Careers/Careers'
import Nav from './Components/Nav/Nav'
//Material Imports



class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/capabilities" component={Capabilities} />
            <Route path="/contract-vehicles" component={Contracts} />
            <Route path="/leadership" component={Leadership} />
            <Route path="/careers" component={Careers} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
