import React, { useState, useCallback } from 'react';
import { Radio } from '@atlaskit/radio';
import ChooseSection from './ChooseSection';

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

const AgeTypes = () => {

const [ageValue, setAgeValue] = useState('young');

const onChangeAge = useCallback(
  ({ currentTarget: { value } }, e) => {
    setAgeValue(value);
  },
  [setAgeValue],
);

  return (
    <ChooseSection title='How old are you?' isRequired={true} >
        {ageTypes.map(item => (
                <Radio
                  isChecked={item.value === ageValue}
                  onChange={onChangeAge}
                  name={item.name}
                  value={item.value}
                  label={item.label}
                  onClick={() => setAgeValue(item.value)}
                  key={`${item.value}${item.name}${item.id}`}
                />
          ))}
        </ChooseSection>
  );
}

export default AgeTypes;