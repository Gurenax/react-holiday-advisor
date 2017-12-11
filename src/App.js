import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Listings from './components/Listings'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <h1>React Holiday Advisor</h1>
        <Listings />
      </div>
    );
  }
}

export default App;
