import React from 'react';
import styled from 'styled-components';
import { Heading, Padder } from 'react-components-kit';
import CodeBlock from './common/CodeBlock';

const usageExample = `
import { Button } from 'react-components-kit';

...later in render

<Button primary>Primary button</Button>
`;

const Home = () => (
  <HomeWrapper>
    <Heading>Getting Started</Heading>

    <Heading sub el='h2'>Install</Heading>
    <CodeBlock code='npm install react-components-kits' />

    <Padder vert='16px' />

    <Heading sub el='h2'>Usage</Heading>
    <CodeBlock code={usageExample} />

    <Padder vert='16px' />

    <p>
      Check out more detailed examples and all possible properties
      for each component in the sidemenu.
      </p>
  </HomeWrapper>
);

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
