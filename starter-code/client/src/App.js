import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import LandingPage from "./LandingPage/LandingPage.js";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Profile from "./components/Profile";
import CreateProfile from "./components/CreateProfile";

// import NucleoIcons from "./views/index-sections/NucleoIcons"



// import axios from "axios";


class App extends Component {

  state = {
      data: null,
      error: null
  };

  componentDidMount() {
    // axios.get(`${process.env.REACT_APP_API}`)
    //     .then(response => {
    //         this.setState({data: response.data})
    //     })
    //     .catch((error)=> {  
    //     })
  }

  render() {
    return (
      <div className="App">
        <header>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Create" component={CreateProfile} />

            {/* <Route exact path="/icons" component={NucleoIcons} /> */}

          </header>
      </div>
    );
  }
}

export default App;
