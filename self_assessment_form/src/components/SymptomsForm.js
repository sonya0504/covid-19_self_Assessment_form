import React, { Fragment } from 'react';
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
import AgeTypes from './AgeTypes';
import Tests from './Tests';
import Symptoms from './Symptoms';

const responsesData = {
  name: '',
  email: '',
  department: '',
  symptoms: [],
  ageTypes: '18 or younger',
  tests: 'Yes, and my result was positive'
}

const handleCheckboxChange = (event) => {
  responsesData.symptoms.push(event.target.value);
};

const handleAgeChange = (event) => {
  responsesData.ageTypes = event.target.value
}

const handleTestsChange = (event) => {
  responsesData.tests = event.target.value
}

const handleSubmit = (data, event) => {
  data.symptoms = responsesData.symptoms;
  data.ageTypes = responsesData.ageTypes;
  data.tests = responsesData.tests;
}

const SymptomsForm = () => {
  
  return (
  <Form onSubmit={handleSubmit}>
    {({ formProps }) => (
      <form {...formProps}>
        <Field 
          name="username" 
          defaultValue="" 
          label="Your name"
          >
            {({ fieldProps, error }) => (
              <Fragment>
                <TextField {...fieldProps} />
                {error && (
                  <ErrorMessage>
                    Please enter your name.
                  </ErrorMessage>
                )}
              </Fragment>
              )}
        </Field>

        <Field 
          name="email" 
          defaultValue="" 
          label="Company email address"
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

        <Field name='ageTypes' label="How old are you?" isRequired>
          {({ fieldProps }) => (
            <AgeTypes {...fieldProps} onChangeHandler={handleAgeChange} />
          )}
        </Field>

        <Field name='tests' label="Have you been tested for COVID‑19 in the last 14 days?" isRequired>
          {({ fieldProps }) => (
            <Tests {...fieldProps} onChangeHandler={handleTestsChange} />
          )}
        </Field>

        <Title className='mt'>COVID-19 symptoms</Title>
        <TextInfo>Please reflect on any disturbing symptoms you’re experiencing now or have been in the last 14 days.</TextInfo>
        
        <CheckboxField name='symptoms' label='Do you have any of the following symptoms?'>
          {({ fieldProps }) => (
            <Symptoms {...fieldProps} onChangeHandler={handleCheckboxChange} />            
          )}
        </CheckboxField>
       
        <FormFooter>
            <Button type="submit" appearance="primary">
                Submit
            </Button>
        </FormFooter>
        
      </form>
    )}
  </Form>
);
}

export default SymptomsForm;