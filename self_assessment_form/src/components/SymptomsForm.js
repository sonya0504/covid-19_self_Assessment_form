import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from './Title.js';
import TextInfo from './TextInfo';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import ChooseSection from './ChooseSection';
import RadioButton from './RadioInputComponent';
import Checkbox from './InputComponent';
import axios from 'axios';

const chooseOption = (e) => {
    console.log('btn', e)
}

const chooseCheckbox = (e) => {
    console.log('check', e)
}

const SymptomsForm = () => {

const [symptoms, setSymptoms] = useState([]);

useEffect(() => {
  axios.get('https://covid-19-self-assessment-form-default-rtdb.firebaseio.com/symptoms.json')
    .then(res => {
      setSymptoms(res.data);
      console.log('res', res);
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

        <ChooseSection title='How old are you?' isRequired={true} >
            <RadioButton value='young' label="18 or younger" name="young" testId='young' isChecked={true} onChange={chooseOption} />
            <RadioButton value='adult' label="Between 18 and 64" name="adult" testId='adult' isChecked={false} onChange={chooseOption} />
            <RadioButton value='old' label="65 or older" name="old" testId='old' isChecked={false} onChange={chooseOption} />
        </ChooseSection>

        <ChooseSection title="Have you been tested for COVID‑19 in the last 14 days?" isRequired={true} >
            <RadioButton value='positive' label="Yes, and my result was positive" name="positive" testId='positive' isChecked={true} onChange={chooseOption} />
            <RadioButton value='negative' label="Yes, and my result was negative" name="negative" testId='negative' isChecked={false} onChange={chooseOption} />
            <RadioButton value='waiting' label="Yes, but I don’t have my results yet" name="waiting" testId='waiting' isChecked={false} onChange={chooseOption} />
            <RadioButton value='not-tested' label='No, I have not been tested yet' name='not-tested' testId='not-tested' isChecked={false} onChange={chooseOption} />
        </ChooseSection>

        <Title>COVID-19 symptoms</Title>
        <TextInfo>Please reflect on any disturbing symptoms you’re experiencing now or have been in the last 14 days.</TextInfo>
        <ChooseSection title="Do you have any of the following symptoms?" isRequired={true}>
            {
               Object.keys(symptoms).map(function(key, index) {
                return <Checkbox value={key} label={symptoms[key]} onChange={chooseCheckbox} name={key} testId={key} key={`${key}-${index}`} />
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