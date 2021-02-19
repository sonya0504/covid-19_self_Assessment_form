import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const ResponsesWrapper = styled.div`
    text-align: left;
    width: 70%;
    margin-top: 40px;
    font-family: SF UI Text;
`;

const ResponseWrapper = styled.div`
    margin-top: 24px
`;

const FieldQuestion = styled.h2`
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.1px;
    color: #6B778C;
    margin-bottom: 8px
`;

const FieldAnswer = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #172B4D;
    margin-top: 0;
`;

const ResponseSection = () => {
    return (
        <ResponsesWrapper>
            <Title>Your responses</Title>
            <ResponseWrapper>
                <FieldQuestion>Your name</FieldQuestion>
                <FieldAnswer>John Doe</FieldAnswer>
            </ResponseWrapper>
            <ResponseWrapper>
                <FieldQuestion>Company email address</FieldQuestion>
                <FieldAnswer>john.doe@deviniti.com</FieldAnswer>
            </ResponseWrapper>
            <ResponseWrapper>
                <FieldQuestion>Department</FieldQuestion>
                <FieldAnswer>Department</FieldAnswer>
            </ResponseWrapper>
            <ResponseWrapper>
                <FieldQuestion>How old are you?</FieldQuestion>
                <FieldAnswer>18 or younger</FieldAnswer>
            </ResponseWrapper>
            <ResponseWrapper>
                <FieldQuestion>Have you been tested for COVID‑19 in the last 14 days?</FieldQuestion>
                <FieldAnswer>Have you been tested for COVID‑19 in the last 14 days?</FieldAnswer>
            </ResponseWrapper>
            <ResponseWrapper>
                <FieldQuestion>Do you have any of the following symptoms?</FieldQuestion>
                <FieldAnswer>Fever, Cough, Sore throat, Pain in the chest</FieldAnswer>
            </ResponseWrapper>
        </ResponsesWrapper>
    );
}

export default ResponseSection;