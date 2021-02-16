import React from 'react';
import Header from './Header';
import InfoBox from './InfoBox';
import Form from './Form';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DeclarationView = () => {
    return (
        <>
            <Header />
            <Container>
                <InfoBox />
                <Form /> 
            </Container>
            
        </>
    )
}

export default DeclarationView;