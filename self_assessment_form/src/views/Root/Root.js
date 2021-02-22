import React from 'react';
import AppContext from '../../context';
import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
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
    // not working
    const history = useHistory();
    const navigateTo = () => history.push('/confirmation');

    const responsesData = {
            name: '',
            email: '',
            department: '',
            symptoms: [],
            ageTypes: '18 or younger',
            tests: 'Yes, and my result was positive'
        }

    const addConfirm = (data, e) => {

        data.symptoms = responsesData.symptoms;
        data.ageTypes = responsesData.ageTypes;
        data.tests = responsesData.tests;

        history.push({
            pathname: '/confirmation',
            data: { data }
          })
    }

    const contextElement = {
        addConfirm: addConfirm,
        responsesData: responsesData,
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