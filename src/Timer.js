import React from 'react';
import styled from 'styled-components';

export default class extends React.Component{

  updateTime(){
      const timer=setInterval(() => this.props.tick(), 10)
  }

   componentDidMount(){
     this.updateTime();
   }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return (
            <h1>{(this.props.time/100).toFixed(2)}</h1>
        )
    }
}
