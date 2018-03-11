import React from 'react'; import styled from 'styled-components';
import CombiButton from './CombiButton';

const StyledDiv = styled.div`
    display: flex;
`

const ButtonBox = (props) => {
    return (
        <StyledDiv>
            {props.combination.map((value,index) => (
                <CombiButton 
                    update={props.update}
                    key={index}
                    id={index}
                    tumbler={value} />
            ))}
        </StyledDiv>
    )
}

export default ButtonBox;
