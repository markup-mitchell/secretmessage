import React from 'react';
import styled from 'styled-components';

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            timeElapsed: 0
        }
    }

    render(){
        return (
            <h1>{this.state.timeElapsed}</h1>
        )
    }
}
