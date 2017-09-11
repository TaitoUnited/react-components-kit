import React from 'react';
import styled from 'styled-components';
import { Heading, Gutter } from 'react-components-kit';
import CodeBlock from './common/CodeBlock';
import { libUsageExample } from './codeSnippets';

const Home = () => (
  <HomeWrapper>
    <Heading>Getting Started</Heading>

    <Heading sub el='h2'>Install</Heading>
    <CodeBlock code='npm install --save react-components-kits' />

    <Gutter vertical />

    <Heading sub el='h2'>Usage</Heading>
    <CodeBlock code={libUsageExample} />

    <Gutter vertical />

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
