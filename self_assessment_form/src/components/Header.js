import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const BackButton = styled.div`
    color: #42526E;
    font-size: 16px;
    line-height: 32px;
    margin-left: 67px;
    margin-right: 67px;
`;

const Title = styled.h2`
    color: #172B4D;
    font-size: 29px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'>
                <BackButton href="#">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </BackButton>
            </Link>
            <Title>COVID-19 Self-Declaration Form</Title>
        </HeaderContainer>
    )
}

export default Header
