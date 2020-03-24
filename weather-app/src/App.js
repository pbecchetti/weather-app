import React, { Component } from 'react';
import './App.css';
import WeatherContainer from './WeatherContainer';
require('dotenv').config()

class App extends Component {
    render() {
        return ( <div className = "App" >
        <WeatherContainer/>
            </div>
        );
    }
}

export default App;