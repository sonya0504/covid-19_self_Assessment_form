import React from 'react';
import { Radio } from '@atlaskit/radio';

const RadioButton = ({ value, label, name, testId, isChecked, onChange}) => {
    return (
      <Radio
        value={value}
        label={label}
        name={name}
        testId={testId}
        isChecked={isChecked}
        onChange={onChange}
      />
    );
  }

export default RadioButton;