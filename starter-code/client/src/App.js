import React from 'react';
import './App.css';
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
      </header>
    </div>
  );
}

export default App;
