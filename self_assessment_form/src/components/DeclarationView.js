import React from 'react';
import Header from './Header';
import SectionMessage from './SectionMessage'
import CustomForm from './Form';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionMessageWrapper = styled.div`
    width: 70%
`;

const DeclarationView = () => {
    return (
        <>
            <Header />
            <Container>
                <SectionMessageWrapper>
                    <SectionMessage />
                </SectionMessageWrapper>
                <CustomForm /> 
            </Container>
            
        </>
    )
}

export default DeclarationView;