import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    position: absolute;
    top: 10px;
    font-size: 100px;
    color: #9f6;
    transition: all 1s ease-in;
    `

const Message = () => {
    return <StyledHeader>THE SECRET IS REVEALED!</StyledHeader>
}

export default Message;

