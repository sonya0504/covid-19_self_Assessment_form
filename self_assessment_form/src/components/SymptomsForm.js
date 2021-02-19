import React from 'react';
import Title from './Title.js';
import TextInfo from './TextInfo';
import Form, { Field, FormFooter, CheckboxField } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import AgeTypes from './AgeTypes';
import Tests from './Tests';
import Symptoms from './Symptoms';

const ageTypes = [
  {
    id: 1,
    value: 'young',
    name: 'young',
    label: '18 or younger',
    testId: 'young',
    isChecked: true,
  },
  {
    id: 2,
    value: 'adult',
    name: 'adult',
    label: 'Between 18 and 64',
    testId: 'adult',
    isChecked: false,
  },
  {
    id: 3,
    value: 'old',
    name: 'old',
    label: '65 or older',
    testId: 'old',
    isChecked: false,
  },
];

const SymptomsForm = () => {
  
  return (
  <Form onSubmit={data => {
    console.log('form data', data)
    }}>
    {({ formProps }) => (
      <form {...formProps}>
        <Field name="username" defaultValue="" label="Your name">
          {({ fieldProps }) => <TextField {...fieldProps} />}
        </Field>

        <Field name="email" defaultValue="" label="Company email address">
          {({ fieldProps }) => <TextField {...fieldProps} />}
        </Field>

        <Field name="department" defaultValue="" label="Department">
          {({ fieldProps }) => <TextField {...fieldProps} />}
        </Field>

        <Field name='ageTypes' label="How old are you?" isRequired>
          {({ fieldProps }) => (
            <AgeTypes {...fieldProps} />
          )}
        </Field>

        <Field name='tests' label="Have you been tested for COVID‑19 in the last 14 days?" isRequired>
          {({ fieldProps }) => (
            <Tests {...fieldProps}/>
          )}
        </Field>

        <Title className='mt'>COVID-19 symptoms</Title>
        <TextInfo>Please reflect on any disturbing symptoms you’re experiencing now or have been in the last 14 days.</TextInfo>

        <CheckboxField name='symptoms' label='Do you have any of the following symptoms?'>
          {({ fieldProps }) => (
            <Symptoms {...fieldProps}/>
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