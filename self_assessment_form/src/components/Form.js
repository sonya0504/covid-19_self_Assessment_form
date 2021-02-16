import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: left;
    width: 70%;
    margin-top: 40px
`;

const Title = styled.h2`
    color: #172B4D;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    margin-bottom: 8px;
`;

const TextInfo = styled.div`
    font-family: SF UI Text;
    font-size: 14px;
    line-height: 20px;
    color: #505F79;
`;

const Form = () => {
    return (
        <Wrapper>
            <Title>Basic information</Title>
            <TextInfo>Please provide basic information to help us assess your overall health situation.</TextInfo>
        </Wrapper>
    )
}

export default Form;
