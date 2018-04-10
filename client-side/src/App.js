import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages/Messages.js';
import Fighters from './Z-Fighters/Fighters.js';

class App extends Component {

  render() {
    return (
      <div>
        <Messages color='blue' width='25%'></Messages>
        <Fighters color='red'></Fighters>
      </div>
    );
  }
}

export default App;
