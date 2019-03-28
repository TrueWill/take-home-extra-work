import React, { Component } from 'react';
import './App.css';
import Sources from './Sources/SourcesContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Messaging</h1>
        <Sources />
      </div>
    );
  }
}

export default App;
