import React, { Component } from 'react';
import './App.css';
import Login from "./auth/Login";
import Signup from "./auth/Signup";
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
        <header>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
        </header>
      </div>
    );
  }
}


export default App;
