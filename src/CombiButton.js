import React from 'react';
import styled from 'styled-components';

const StyledButton=styled.button`
  margin: 5px;
  width: 50px;
  height: 100px;
  border-radius: 10%;
  background: #aaa;
  font-size: 50px;
  color: white;
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
    this.setState({open: this.props.tumbler == this.state.number})
  }

  increment=()=> {
    this.setState(prevState => ({number: this.state.number > 8 ? 0 : prevState.number+1}), this.flipLock);
  }

  flipLock=()=> {
    this.setState({open: this.state.number==this.props.tumbler});
  }

  render(){
    return (
      <StyledButton
        onClick={this.increment}
      >
        {this.state.number}
      </StyledButton>
    )
  }
}


