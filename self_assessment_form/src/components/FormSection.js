import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import TextInfo from './TextInfo';
import SymptomsForm from './SymptomsForm';

const Wrapper = styled.div`
    text-align: left;
    width: 70%;
    margin-top: 40px
`;

const FormSection = () => {
    return (
        <Wrapper>
            <Title>Basic information</Title>
            <TextInfo>Please provide basic information to help us assess your overall health situation.</TextInfo>
            <SymptomsForm />
        </Wrapper>
    )
}

export default FormSection;
