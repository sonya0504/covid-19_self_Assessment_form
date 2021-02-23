import React, { useState } from 'react';
import AppContext from '../../context';
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
    margin-bottom: 20px;
`;

const Root = () => {

    const responsesData = {
            name: '',
            email: '',
            department: '',
            years: '18 or younger',
            test: 'Yes, and my result was positive',  
            symptoms: [],              
        }

    const [state, setState] = useState(responsesData);

    const addConfirm = (data) => {
        data.symptoms = responsesData.symptoms;
        data.years = responsesData.years;
        data.test = responsesData.test;
        setState(data);
        console.log('state', state);

    }

    const contextElement = {
        addConfirm: addConfirm,
        responsesData: state,
    }

    return (
        <BrowserRouter>
        <AppContext.Provider value={contextElement}>
            <Container>
            <Header />
                <Switch>
                    <Route exact path='/' component={FormView} />
                    <Route exact path='/confirmation' component={ConfirmationView} />
                </Switch>
            </Container>
        </AppContext.Provider>
            
        </BrowserRouter>
    );
}

export default Root;