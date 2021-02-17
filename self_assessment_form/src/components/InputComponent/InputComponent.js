import React from 'react';
import { Checkbox } from '@atlaskit/checkbox';

export default ({ value, label, onChange, name, testId }) => (
  <Checkbox
    value={value}
    label={label}
    onChange={onChange}
    name={name}
    testId={testId}
  />
);