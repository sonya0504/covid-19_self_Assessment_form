import React from 'react';
import SectionMessage from '@atlaskit/section-message';
import styled from 'styled-components';

const SectionMessageWrapper = styled.div`
    text-align: left;
    width: 70%;
    margin-top: 30px;
`;

export default ({ title, appearance, action, paragraf}) => (
  <SectionMessageWrapper>
    <SectionMessage
      title={title}
      appearance={appearance}
      actions={[
        {action},
      ]}
    >
      <p>{paragraf}</p>
    </SectionMessage>
  </SectionMessageWrapper>
  
);