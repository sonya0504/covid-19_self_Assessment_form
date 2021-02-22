import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Response from './Response';

const responseData = [
    {
        id: 1,
        question: 'Your name',
        answer: 'John Doe',
    },
    {
        id: 2,
        question: 'Company email address',
        answer: 'john.doe@deviniti.com',
    },
    {
        id: 3,
        question: 'Department',
        answer: 'AtlasianTeam',
    },
    {
        id: 4,
        question: 'How old are you?',
        answer: '18 or younger',
    },
    {
        id: 5,
        question: 'Have you been tested for COVID‑19 in the last 14 days?',
        answer: 'No, I have not been tested yet',
    },
    {
        id: 6,
        question: 'Do you have any of the following symptoms?',
        answer: 'Fever, Cough, Sore throat, Pain in the chest',
    }
]
    

const ResponsesWrapper = styled.div`
    text-align: left;
    width: 70%;
    margin-top: 40px;
    font-family: SF UI Text;
`;

const ResponseSection = () => {
    return (
        <ResponsesWrapper>
            <Title>Your responses</Title>
        {
            responseData.map(res => {
                return (
                    <Response question={res.question} answer={res.answer} key={res.id} />
                )
            })
        }
        </ResponsesWrapper>
    );
}

export default ResponseSection;