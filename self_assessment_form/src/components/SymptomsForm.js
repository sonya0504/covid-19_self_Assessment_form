import React, { useState, useEffect } from 'react';
import Title from './Title.js';
import TextInfo from './TextInfo';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import AgeTypes from './AgeTypes';
import Tests from './Tests';
import symptoms from './Symptoms';
import Symptoms from './Symptoms';

const SymptomsForm = () => {
  
  return (
  <Form onSubmit={data => console.log('form data', data)}>
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

        <AgeTypes />

        <Tests />

        <Title>COVID-19 symptoms</Title>
        <TextInfo>Please reflect on any disturbing symptoms you’re experiencing now or have been in the last 14 days.</TextInfo>
        
        <Symptoms />

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