import React, { useState, useCallback } from 'react';
import { Radio } from '@atlaskit/radio';

const tests = [
  {
    id: 1,
    value: 'positive',
    label: 'Yes, and my result was positive',
    name: 'positive',
  },
  {
    id: 2,
    value: 'negative',
    label: 'Yes, and my result was negative',
    name: 'negative',
  },
  {
    id: 3,
    value: 'waiting',
    label: 'Yes, but I don’t have my results yet',
    name: 'waiting',
  },
  {
    id: 4,
    value: 'not-tested',
    label: 'No, I have not been tested yet',
    name: 'not-tested',
  },
];

const Test = ({ onChangeHandler }) => {

  const [testValue, setTestValue] = useState('positive');

  const onChangeTest = useCallback(
    ({ currentTarget: { value } }, e) => {
      setTestValue(value);
    },
    [setTestValue],
  );

  return (
    <>
      {tests.map(test => (
        <Radio
          isChecked={test.value === testValue}
          onChange={onChangeTest}
          name={test.name}
          value={test.value}
          label={test.label}
          onClick={() => setTestValue(test.value)}
          key={`${test.value}${test.name}${test.id}`}
          onClick={onChangeHandler}
          />
        ))}
      </>
  )
}

export default Test;