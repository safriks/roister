import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
<<<<<<< HEAD


=======
require('dotenv').config()

>>>>>>> 2444d583c746badda516764b0952b8e08152cb86
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root')); // Root for react app

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
