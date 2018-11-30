import React, {Component} from "react";
import "./App.scss";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Avtal from "./Components/Avtal/Avtal.js";
import Tillgodoraknande from "./Components/Tillgodoraknande/Tillgodoraknande.js";
import Intervjuer from "./Components/Intervjuer/Intervjuer.js";
import InforResa from "./Components/InforResa/InforResa.js";
import FAQ from "./Components/FAQ/FAQ.js";
import Home from "./Components/Home/Home.js";
import SideDrawer from "./Components/SideDrawer/SideDrawer.js";
import Backdrop from "./Components/Backdrop/Backdrop.js";
import Footer from "./Components/Footer/Footer.js";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    dropdownOpen: false
  };

  /*When the DrawerToggleButton is clicked the state of sideDrawerOpen will
  be set to true or false, depending on its previous state.*/
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      /*if the previous state for sidebarDrawerOpen is false it will now be set
      to true and vice versa*/
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  /*This function sets the state of dropdownOpen to true if it was false and
  vice versa.*/
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  /*This function sets the state of sideDrawerOpen to false.
  ie the side drawer close when this function is called.
  Function is called when the backdrop component is clicked.
  */
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  /*This function sets the state of dropDownOpen and sideDrawerOpen to false.
  ie the dropdown and SideDrawer will close when this function is called.
  Function is called when a link in the SideDrawer component is clicked.
  */
  linkClickHandler = () =>{
    this.setState({dropdownOpen: false});
    this.setState({sideDrawerOpen: false});
  }


  render() {
    let backdrop;

    /*if the state of sideDrawerOpen is true a Backdrop component will be visable.*/
    if (this.state.sideDrawerOpen) {
      /*when Backdrop component is clicked backdropClickHandler function is called.*/
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (<Router>
      <div className="App">
        <header className="App-header">
          {/* The navbar will always be visible */}
          {/* SideDrawer component will open when DrawerToggleButton is clicked. */}
          <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>

          {/*SideDrawer will close when a Link in SIdeDrawer is clicked.
            The dropdown will open when the toggle function is called.*/}
          <SideDrawer linkClickHandler={this.linkClickHandler} toggle={this.toggle} dropdownOpen={this.state.dropdownOpen} sideDrawerOpen={this.state.sideDrawerOpen}/>
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
