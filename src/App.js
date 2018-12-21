import React, { Component } from 'react';
import './assets/styles/app.css';

import Routes from './components/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;