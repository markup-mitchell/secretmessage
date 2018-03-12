import React from 'react';
import styled from 'styled-components';

export default class extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

  updateTime(){
      const intervalId = setInterval(() => this.props.tick(), 10);
      this.setState({intervalId});
  }

   componentDidMount(){
     this.updateTime();
   }

    componentWillUnmount(){
        clearInterval(this.state.intervalId);
    }

    render(){
        return (
            <h1>{(this.props.time/100).toFixed(2)}</h1>
        )
    }
}
