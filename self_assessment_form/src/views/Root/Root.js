import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormView from '../FormView/FormView';
import ConfirmationView from '../ConfirmationView/ConfirmationView';
import Header from '../../components/Header';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Root = () => {
    return (
        <BrowserRouter>
            <Container>
            <Header />
                <Switch>
                    <Route exact path='/' component={FormView} />
                    <Route exact path='/confirmation' component={ConfirmationView} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default Root;