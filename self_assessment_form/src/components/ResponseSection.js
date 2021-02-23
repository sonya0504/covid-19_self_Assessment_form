import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context';
import Title from './Title';
import Response from './Response';

const responseData = [
    {
        id: 1,
        question: 'Your name',
        answer: '',
    },
    {
        id: 2,
        question: 'Company email address',
        answer: '',
    },
    {
        id: 3,
        question: 'Department',
        answer: '',
    },
    {
        id: 4,
        question: 'How old are you?',
        answer: '',
    },
    {
        id: 5,
        question: 'Have you been tested for COVID‑19 in the last 14 days?',
        answer: '',
    },
    {
        id: 6,
        question: 'Do you have any of the following symptoms?',
        answer: '',
    }
]
    

const ResponsesWrapper = styled.div`
    text-align: left;
    width: 70%;
    margin-top: 40px;
    font-family: SF UI Text;
`;

const ResponseSection = () => {

    const responses = useContext(AppContext).responsesData;

    Object.keys(responses).map(function(key, index) {
        responseData[index].answer = responses[key];
        return;
        })

    return (
            <ResponsesWrapper>
                <Title>Your responses</Title> 
                    {responseData.map(res => {
                        return <Response question={res.question} answer={res.answer} key={res.id} />
                    })}
                </ResponsesWrapper>
        
    );
}

export default ResponseSection;