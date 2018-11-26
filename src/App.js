import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Avtal from './Components/Avtal/Avtal.js';
import EfterResa from './Components/EfterResa/EfterResa.js';
import Intervjuer from './Components/Intervjuer/Intervjuer.js';
import FAQ from './Components/FAQ/FAQ.js';
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
            <Route exact path="/intervjuer" component={Intervjuer} />
            <Route exact path="/avtal" component={Avtal} />
            <Route exact path="/efterResa" component={EfterResa} />
            <Route exact path="/faq" component={FAQ} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
