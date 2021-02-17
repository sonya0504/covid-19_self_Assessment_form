import React from 'react';
import styled from 'styled-components';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import ChooseSection from './RadioInputComponent/ChooseSection';
import RadioButton from './RadioInputComponent/RadioInputComponent';
import Checkbox from './InputComponent/InputComponent'

const chooseOption = (e) => {
    console.log('btn', e)
}

const chooseCheckbox = (e) => {
    console.log('check', e)
}

const MyForm = () => (
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
            <Checkbox value='fever' label='Fever' onChange={chooseCheckbox} name='fever' testId='fever' />
            <Checkbox value='Cough' label='Cough' onChange={chooseCheckbox} name='Cough' testId='Cough' />
            <Checkbox value='breath' label='Shortness of breath' onChange={chooseCheckbox} name='breath' testId='breath' />
            <Checkbox value='SoreThroat' label='Sore throat' onChange={chooseCheckbox} name='SoreThroat' testId='SoreThroat' />
            <Checkbox value='Vomitting' label='Vomitting or diarrhea' onChange={chooseCheckbox} name='Vomitting' testId='Vomitting' />
            <Checkbox value='chest' label='Pain in the chest' onChange={chooseCheckbox} name='chest' testId='chest' />
            <Checkbox value='None' label='Pain in the chest' onChange={chooseCheckbox} name='none' testId='none' />
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

const Wrapper = styled.div`
    text-align: left;
    width: 70%;
    margin-top: 40px
`;

const Title = styled.h2`
    color: #172B4D;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    margin-bottom: 8px;
`;

const TextInfo = styled.p`
    font-family: SF UI Text;
    font-size: 14px;
    line-height: 20px;
    color: #505F79;
`;

const CustomForm = () => {
    return (
        <Wrapper>
            <Title>Basic information</Title>
            <TextInfo>Please provide basic information to help us assess your overall health situation.</TextInfo>
            <MyForm />
        </Wrapper>
    )
}

export default CustomForm;
