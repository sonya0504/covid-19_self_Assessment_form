import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    background: #FFEBE5;
    padding: 16px 32px 16px 16px;
    border-radius: 3px;
    width: 70%;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const Icon = styled.div`
    color: #DE350B;
    margin: 21px;
    font-size: 15px;
`;

const InfoTitle = styled.h2`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #172B4D;
`;

const InfoText = styled.p`
    font-family: 'SF UI Text';
    font-size: 14px;
    line-height: 24px;
`;

const Link = styled.a`
    font-family: 'SF UI Text';
    font-size: 14px;
    line-height: 24px;
    color: #0052CC;
    text-decoration: none;
`;

const InfoBox = () => {
    return (
        <Wrapper>
            <Icon>
                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
            </Icon>
            <div>
                <InfoTitle>Call 911 if you’re experincing any severe symptoms</InfoTitle>
                <InfoText>This form was designed to help you get a general overview of your health. If you’re experiencing severe difficulty breathing, chest pain, feeling of confusion or losing conciousness, please reach out to a medical professional.</InfoText>
                <Link href='#'>Learn more</Link>
            </div>
        </Wrapper>
    )
}

export default InfoBox
