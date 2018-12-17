import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Agreements from "./Components/Agreements/Agreements";
import Interviews from "./Components/Interviews/Interviews";
import BeforeTrip from "./Components/BeforeTrip/BeforeTrip";
import Crediting from "./Components/Crediting/Crediting";
import FAQ from "./Components/FAQ/FAQ";
import Interview from "./Components/Interview/Interview";
import Home from "./Components/Home/Home";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import "./Components/SideDrawer/SideDrawer.scss";
import Backdrop from "./Components/Backdrop/Backdrop";
import Footer from "./Components/Footer/Footer";
import $ from "jquery";

let keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

class App extends Component {
  state = {
    drawerToggled: false,
  };

  /*Change the state for the SideDrawer (only displayed on smaller screens).
  If the menu button is clicked the state drawerToggled will be true.*/
  toggleDrawer = e => {
    this.setState(
      prevState => ({
        drawerToggled: !prevState.drawerToggled,
      }),
      () => {
        const { drawerToggled } = this.state;
        if (drawerToggled) {
          // this.preventDefault(e)
          this.preventDefaultForScrollKeys(e);
          this.disableScroll();
          $(".side-drawer").addClass("side-drawer-open");
        } else {
          $(".side-drawer").removeClass("side-drawer-open");
          this.enableScroll();
        }
      }
    );
  };

  preventDefault = e => {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
      e.returnValue = false;
    }
  };

  preventDefaultForScrollKeys = e => {
    if (keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }
  };

  disableScroll = () => {
    if (window.addEventListener) {
      // older FF
      window.addEventListener("DOMMouseScroll", this.preventDefault, false);
      window.onwheel = this.preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
      window.ontouchmove = this.preventDefault; // mobile
      document.onkeydown = this.preventDefaultForScrollKeys;
    }
  };

  enableScroll = () => {
    if (window.removeEventListener) {
      window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
    }
  };

  render() {
    const { drawerToggled } = this.state;
    return (
      <Router>
        <div>
          <header className="App-header">
            <Navbar toggleDrawer={this.toggleDrawer} />
            <SideDrawer
              toggleDrawer={this.toggleDrawer}
            />
            {drawerToggled ? <Backdrop toggleDrawer={this.toggleDrawer} /> : []}
          </header>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/intervjuer" component={Interviews} />
              <Route path="/avtal" component={Agreements} />
              <Route path="/inforResa" component={BeforeTrip} />
              <Route path="/tillgodoraknande" component={Crediting} />
              <Route path="/faq" component={FAQ} />
              <Route
                path="/intervjuer/:id"
                render={props => <Interview params={props.match.params} />}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
