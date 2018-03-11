import React from 'react';
import styled from 'styled-components';

const StyledButton=styled.button`
    &:hover {
        background: ${props=>props.open ? '#7d4' : '#888'};
        };
  margin: 5px;
  width: 70px;
  height: 70px;
  border-radius: 10%;
  background: ${props=>props.open ? '#9f6' : '#aaa'};
  transition: all .5;
  font-size: 50px;
  color: white;
  border: none;
  :focus{
    outline: none;
    }
`

export default class CombiButton extends React.Component{
  constructor(){
    super();
    this.state = {
      number: 0,
      open: false,
    }
  }

  componentWillMount(){
    this.setState({open: this.props.tumbler == this.state.number}),this.reportStatus();
  }

  increment=()=> {
      this.setState(prevState => ({number: this.state.number > 8 ? 0 : prevState.number+1}),this.flipLock);
  }

    reportStatus(){
        this.props.update(this.state.open, this.props.id);
    }

    // Q: how to call reportstatus so that everything's in sync?
    // A: need to have callback ()=>{} to fire immediately
  flipLock=()=> {
      this.setState({open: this.state.number==this.props.tumbler},()=>{this.reportStatus()});
  }

  render(){
    return (
      <StyledButton
          id={this.props.id}
          open={this.state.open}
          onClick={this.increment}
        >
            {this.state.number}
      </StyledButton>
    )
  }
}


