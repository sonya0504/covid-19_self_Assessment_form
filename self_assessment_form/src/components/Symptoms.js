import React, { useState, useEffect } from 'react';
import Checkbox from '@atlaskit/checkbox';
import axios from 'axios';

const Symptoms = ({ onChangeHandler }) => {

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
      <>
        {
          Object.keys(symptoms).map(function(key, index) {
            return <Checkbox value={symptoms[key]} label={symptoms[key]} onChange={onChangeHandler} name={key} testId={key} key={`${key}-${index}`} />
            })
          }
      </>
    ); 
}

export default Symptoms;