import React, { Component } from 'react';
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import LandingPage from "./LandingPage/LandingPage.js";
import {Route} from 'react-router-dom';

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
        <header className="App-header">
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Landing-page" component={LandingPage} />
          </header>
      </div>
    );
  }
}

export default App;
