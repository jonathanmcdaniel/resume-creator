import React, { Component } from 'react';
import Form from './Form.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>Resume Creator</h1>
          </div>
        </div>
        <div className="row">
          <Form/>
        </div>
      </div> 
    );
  }
}

export default App;
