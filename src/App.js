import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CombiButton from './CombiButton';
import ButtonBox from './ButtonBox.js';
import Message from './Message';

// TODO
// button styling should be a condition of its open status so that even if you flip the bool in devtools it will change
// fix starting bools
// ability to change complexity in app - lifecycle

class App extends Component {
  constructor(){
    super();
    this.state = {
      complexity: 7,
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
    // below is hacky placeholder - derive proper bools!
    // move this logic to buttonBox?
    this.setState({combination, tumblers: combination});

  }

  updateTumblers=(status,index)=> {
    let newArray = this.state.tumblers.slice(); //return new array
    newArray.splice(index, 1, status);
    this.setState({tumblers: newArray});
  }
  addComplexity=(e)=>{
    const buttons = e.target.value;
    this.setState({complexity: buttons})
  }

  render() {
    return (
      <div className="App">
        {this.state.tumblers.every(status => status===true) ? 
            <Message />
            :
            <h1>Unbreakable Combination</h1>
        }
        <ButtonBox 
          {...this.state} 
          update={this.updateTumblers} />
      </div>
    );
  }
}

export default App;


