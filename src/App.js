import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CombiButton from './CombiButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CombiButton tumbler="0"/>
        <CombiButton tumbler="1"/>
        <CombiButton tumbler="2"/>
      </div>
    );
  }
}

export default App;
