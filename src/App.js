import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CombiButton from './CombiButton';

class App extends Component {
  constructor(){
    super();
    this.state = {
      complexity: 3,
      combination: null,
      tumblers: [],
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
  render() {
    return (
      <div className="App">
        {this.state.combination.map((value,index) => <CombiButton key={index} tumbler={value} />)}
      </div>
    );
  }
}

export default App;
