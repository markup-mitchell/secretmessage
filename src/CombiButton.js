import React from 'react';
import styled from 'styled-components';

const StyledButton=styled.button`
    &:hover {
        background: ${props=>props.open ? '#7d4' : '#888'};
        };
  margin: 5px;
  width: 50px;
  height: 70px;
  border-radius: 25%;
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
    this.setState({open: this.props.tumbler == this.state.number})
  }

  increment=()=> {
    this.setState(prevState => ({number: this.state.number > 8 ? 0 : prevState.number+1}), this.flipLock);
    this.props.update();
  }

  flipLock=()=> {
    this.setState({open: this.state.number==this.props.tumbler});
  }

    componentDidMount(){
        this.props.update();
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


