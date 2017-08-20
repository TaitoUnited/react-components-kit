import React from 'react';
import styled from 'styled-components';
import { Layout, Padder, Heading, withRipple } from 'react-components-kit';

const Functions = () => (
  <div>
    <Heading el='h2'>withRipple (HOC)</Heading>
    <Layout align='center'>
      <RippleBlock bg='tomato' />
      <Padder horiz='32px' />
      <RippleBlock bg='blue' />
      <Padder horiz='32px' />
      <RippleBlock bg='mediumseagreen' />
    </Layout>
  </div>
);

const RippleBlock = withRipple(styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.bg || '#eee'};
`);

export default Functions;
