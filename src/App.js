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
// timer to completion

class App extends Component {
  constructor(){
    super();
    this.state = {
      complexity: 6,
      combination: null,
      tumblers: [],
      message: "Stuffcluster",
    }
  }

  randomVal=()=>{
    return Math.floor(Math.random()*10);
  }

  componentWillMount(){
    // from complexity int
    const complexity = this.state.complexity;
    // generate an array of random digits
    const combination = Array(complexity).fill().map((e)=>this.randomVal());
    // set them as the solution and make an array of booleans - if 0 status starts as true
    const initialStatus = combination.map(startValue => { return startValue===0 ? true : false } );
    this.setState({combination, tumblers: initialStatus});
  }

  updateTumblers=(status,index)=> {
    let newArray = this.state.tumblers.slice(); // return new array
    newArray.splice(index, 1, status); // splice CombiButton status at relevant index
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


