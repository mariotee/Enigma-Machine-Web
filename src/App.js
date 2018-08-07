import React, { Component } from 'react';
import './App.css';
import RotorMenu from './components/RotorMenu';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enigma M3 Web</h1>
        </header>
        <RotorMenu/>
      </div>
    );
  }
}

export default App;
