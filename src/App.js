import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CombiButton from './CombiButton';
import ButtonBox from './ButtonBox.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      complexity: 5,
      combination: null,
      tumblers: [],
      message: "Stuffcluster",
    }
  }

  randomVal=()=>{
    return Math.floor(Math.random()*10);
  }

  componentWillMount(){
    const complexity = this.state.complexity;
    const combination = Array(complexity).fill().map((e)=>this.randomVal());
    this.setState({combination});
  }

  updateTumblers=(e)=> {
    console.log('bum');
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <ButtonBox 
          {...this.state} 
          update={this.updateTumblers} />
      </div>
    );
  }
}

export default App;
