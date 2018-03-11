import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CombiButton from './CombiButton';
import ButtonBox from './ButtonBox.js';
import Message from './Message';
import Timer from './Timer.js';

// TODO
// button styling should be a condition of its open status so that even if you flip the bool in devtools it will change
// ability to change complexity in app - lifecycle
// timer to completion

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
        " ",
        "That was a pun, BTW"],
      currentTaunt: 0,
      message: "Stuffcluster",
      timeElapsed: 0,
      timerIsRunning: true
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

  // componentDidUpdate(prevProps, prevState){
  //       prevState.tumblers.every(status => status===true) ?
  //         this.setState({timerIsRunning: false})
  //     :
  //     null
  // }
  
  // componentWillUnmount(){
  //   this.setState({timerIsRunning: false});
  //   clearInterval(this.updateTime);
  // }

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
            <div className="App">
                {this.state.tumblers.every(status => status===true) ?
                <Message />
                :
                <h1>{this.state.taunts[Math.floor((this.state.timeElapsed)/500).toString()]}</h1>
                }
                <ButtonBox
                {...this.state}
                update={this.updateTumblers} />
                {this.state.tumblers.every(status => status===true) ?
                        <h1>FINISHED</h1>
                        :
                <Timer
                    tick={this.tick}
                    time={this.state.timeElapsed}
                />
                }
            </div>
        );
    }
    }

export default App;


