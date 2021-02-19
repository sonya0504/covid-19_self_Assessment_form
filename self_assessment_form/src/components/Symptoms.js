import React, { useState, useEffect } from 'react';
import ChooseSection from './ChooseSection';
import Checkbox from '@atlaskit/checkbox';
import axios from 'axios';

const Symptoms = () => {

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
        <ChooseSection title="Do you have any of the following symptoms?" isRequired={true}>
        
            {
                Object.keys(symptoms).map(function(key, index) {
                    return <Checkbox value={key} label={symptoms[key]} onChange={(e) => console.log("checkbox")} name={key} testId={key} key={`${key}-${index}`} />
                })
            }
        </ChooseSection>
    )
    
}

export default Symptoms;