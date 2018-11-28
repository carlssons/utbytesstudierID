import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Avtal from './Components/Avtal/Avtal.js';
import Tillgodoraknande from './Components/Tillgodoraknande/Tillgodoraknande.js';
import Intervjuer from './Components/Intervjuer/Intervjuer.js';
import InforResa from './Components/InforResa/InforResa.js';
import FAQ from './Components/FAQ/FAQ.js';
import Home from './Components/Home/Home.js';
import SideDrawer from './Components/SideDrawer/SideDrawer.js';
import Backdrop from './Components/Backdrop/Backdrop.js';
import Footer from "./Components/Footer/Footer.js";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  /*When the DrawerToggleButton is clicked the state of sideDrawerOpen will
  be set to true or false, depending on its previous state.*/
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {

      /*if the previous state for sidebarDrawerOpen is false it will now be set
      to true and vice versa*/
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    });
  };

  /*Function that sets the state of sideDrawerOpen to false when backrop
  is cliced.*/
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {

      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (<Router>
      <div className="App">
        <header className="App-header">
          {/* The navbar will always be visible */}
          <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
          {/*Side drawer for mobile menu. Will open when DrawerToggleButton is clicked.*/}
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {/* if the side drawer is open the backdrop will show. */}
          {backdrop}
        </header>
        <div>
          <Route exact="exact" path="/" component={Home}/>
          <Route exact="exact" path="/intervjuer" component={Intervjuer}/>
          <Route exact="exact" path="/avtal" component={Avtal}/>
          <Route exact="exact" path="/inforResa" component={InforResa}/>
          <Route exact="exact" path="/tillgodoraknande" component={Tillgodoraknande}/>
          <Route exact="exact" path="/faq" component={FAQ}/>
        </div>
        <Footer/>
      </div>
    </Router>);
  }
}
export default App;
