import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonBox from './ButtonBox.js';
import Timer from './Timer.js';

// TODO
// button styling should be a condition of its open status so that even if you flip the bool in devtools it will change
// ability to change complexity in app - lifecycle
// stop timer on last button change

const StyledApp = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      complexity: 8,
      combination: null,
      tumblers: [],
      taunts: [
        "Go! Go! Go!",
        "Faster! Come on!",
        "Pick it up!",
        "Is this the best you can do?!",
        "Goodness me...",
        "What's wrong with you?",
        "Embarrassing performance",
        "You might as well give up",
        "I'm blushing for you...",
        "Pfffft! Sorry...",
        "LOL! Pathetic!",
        "I have better things to do...",
        "So long!",
        "... ",
        "That was a pun, BTW"],
      timeElapsed: 0,
    }
  }

  tick=()=> {
    this.setState({timeElapsed: this.state.timeElapsed+1})
  }

  taunt=()=> {
    this.state.timeElapsed % 5 === 0 ?
      this.setState({currentTaunt: this.state.currentTaunt+1})
        :
        null;
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
    // create new array becuause splice mutates
    let newArray = this.state.tumblers.slice();
    // splice CombiButton status boolean at relevant index
    newArray.splice(index, 1, status);
    // update state
    this.setState({tumblers: newArray});
  }

  addComplexity=(e)=>{
    const buttons = e.target.value;
    this.setState({complexity: buttons})
  }

    render() {
        return (
            <StyledApp>
                {this.state.tumblers.every(status => status===true) ?
                        <h1 style={{color: "#7d4"}}>This is the Secret Message!</h1>
                :
                <h1>{this.state.taunts[Math.floor((this.state.timeElapsed)/500).toString()]}</h1>
                }
                <ButtonBox {...this.state}
                    update={this.updateTumblers} 
                />
                {this.state.tumblers.every(status => status===true) 
                ?
                <h1>You found it in 
                    <span style={{color: "#7d4"}}>
                        {(this.state.timeElapsed/100).toFixed(2)}
                    </span> 
                seconds</h1>
                :
                <Timer
                    tick={this.tick}
                    time={this.state.timeElapsed}/>
                }
            </StyledApp>
        );
    }
}

export default App;


