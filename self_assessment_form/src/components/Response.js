import React from 'react';
import styled from 'styled-components';

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

const Response = ({ question, answer }) => {
    return (
        <ResponseWrapper>
            <FieldQuestion>{question}</FieldQuestion>
            <FieldAnswer>{answer}</FieldAnswer>
        </ResponseWrapper>
    )

}

export default Response;