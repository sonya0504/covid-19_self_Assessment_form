import React, { useState, useEffect } from 'react';
import Title from './Title.js';
import TextInfo from './TextInfo';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import AgeTypes from './AgeTypes';
import Checkbox from './Tests';
import axios from 'axios';
import ChooseSection from './ChooseSection';
import Tests from './Tests';


const SymptomsForm = () => {

const [symptoms, setSymptoms] = useState([]);

useEffect(() => {
  axios.get('https://covid-19-self-assessment-form-default-rtdb.firebaseio.com/symptoms.json')
    .then(res => {
      setSymptoms(res.data);
    })
    .catch(err => {
      console.log('Error:', err)
    })
}, [])
  
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
        
        <ChooseSection title="Do you have any of the following symptoms?" isRequired={true}>
        
            {
              //check this section
               Object.keys(symptoms).map(function(key, index) {
                return <Checkbox value={key} label={symptoms[key]} onChange={(e) => console.log("checkbox")} name={key} testId={key} key={`${key}-${index}`} />
              })
            }
        </ChooseSection>

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