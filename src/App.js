import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js'
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Home from './Components/Home/Home.js';
import './main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar/>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
