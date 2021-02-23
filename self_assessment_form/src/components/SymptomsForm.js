import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title.js';
import TextInfo from './TextInfo';
import Form, { 
  Field, 
  FormFooter, 
  CheckboxField,
  ErrorMessage, 
} from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import Years from './Years';
import Test from './Test';
import Symptoms from './Symptoms';
import AppContext from '../context';

const RadioWrapper = styled.div`
  margin-top: 24px;
`;

const SymptomsForm = () => {
  
  const validate = (value) => {
    if (!value) {
      return;
    }

    if (value.length < 2) {
      return 'TOO_SHORT';
    }
  };

  return (
    <AppContext.Consumer>
      {context => (
      <Form onSubmit={context.addConfirm}>
        {({ formProps }) => (
              <form {...formProps}>
                <Field 
                  name="username" 
                  defaultValue="" 
                  label="Your name"
                  validate={validate}
                  >
                    {({ fieldProps, error }) => (
                      <Fragment>
                        <TextField {...fieldProps} />
                          <ErrorMessage>
                            Please enter your name.
                          </ErrorMessage>
                      </Fragment>
                      )}
                </Field>

                <Field 
                  name="email" 
                  defaultValue="" 
                  label="Company email address"
                  validate={validate}
                >
                  {({ fieldProps, error }) => (
                      <Fragment>
                        <TextField {...fieldProps} />
                        {error && (
                          <ErrorMessage>
                            Please enter your company email address.
                          </ErrorMessage>
                        )}
                      </Fragment>
                      )}
                </Field>

                <Field 
                  name="department" 
                  defaultValue="" 
                  label="Department"
                  validate={validate}
                >
                  {({ fieldProps, error }) => (
                      <Fragment>
                        <TextField {...fieldProps} />
                        {error && (
                          <ErrorMessage>
                            Please enter the name of a department you’re working with.Please enter the name of a department you’re working with.
                          </ErrorMessage>
                        )}
                      </Fragment>
                      )}
                </Field>
                
                <RadioWrapper>
                  <Field name='years' label="How old are you?" isRequired>
                    {({ fieldProps }) => (
                      <Years {...fieldProps} onChangeHandler={(event) => context.responsesData.years = event.target.value} />
                    )}
                  </Field>
                </RadioWrapper>

                <RadioWrapper>
                  <Field name='test' label="Have you been tested for COVID‑19 in the last 14 days?" isRequired>
                    {({ fieldProps }) => (
                      <Test {...fieldProps} onChangeHandler={(event) => context.responsesData.test = event.target.value} />
                    )}
                  </Field>
                </RadioWrapper>

                <Title className='mt'>COVID-19 symptoms</Title>
                <TextInfo>Please reflect on any disturbing symptoms you’re experiencing now or have been in the last 14 days.</TextInfo>
                
                <CheckboxField name='symptoms' label='Do you have any of the following symptoms?'>
                  {({ fieldProps }) => (
                    <Symptoms {...fieldProps} onChangeHandler={(event) => context.responsesData.symptoms.push(event.target.value)} />            
                  )}
                </CheckboxField>
              
                <FormFooter>
                      <Button type="submit" appearance="primary">
                          Submit
                      </Button>
                </FormFooter>
                
              </form>
            )}
          </Form>)}
    </AppContext.Consumer>
  
);
}

export default SymptomsForm;