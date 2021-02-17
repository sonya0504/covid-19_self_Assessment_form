import React from 'react';
import SectionMessage from '@atlaskit/section-message';

export default () => (
  <SectionMessage
    title="Call 911 if you’re experincing any severe symptoms"
    appearance="error"
    actions={[
      {
        key: '1',
        href: '#',
        text: 'Learn more',
      },
    ]}
  >
    <p className="align-left">This form was designed to help you get a general overview of your health. If you’re experiencing severe difficulty breathing, chest pain, feeling of confusion or losing conciousness, please reach out to a medical professional.</p>
  </SectionMessage>
);