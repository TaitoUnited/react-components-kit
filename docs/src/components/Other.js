import React from 'react';
import styled from 'styled-components';
import {
  Layout,
  Gutter,
  Heading,
  withRipple,
  Divider,
  Text,
} from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';

import {
  withRippleExample,
  createThemeExample,
  mediaExample,
} from './codeSnippets';

import { withRippleProperties } from './compProperties';

const Other = () => (
  <div>
    <Heading>Other utilities / functions</Heading>

    <Heading h2>createTheme</Heading>
    
    <Text p>
      Returns all the default theme variables so that you can overwrite them
      and finally pass the theme to the ThemeProvider component.
    </Text>

    <Layout>
      <CodeBlock code={createThemeExample} />
    </Layout>

    <Divider />

    <Heading h2>media</Heading>

    <Text p>
      A utility object for applying media query rules to styled components.
    </Text>

    <Gutter vertical amount='16px' />

    <Layout>
      <CodeBlock code={mediaExample} />
    </Layout>

    <Divider />

    <Heading h2>withRipple (HOC)</Heading>

    <Text p>
      A Higher-Order-Component that enhances the given component with a
      material design ripple effect (fires on click).
    </Text>

    <Gutter vertical amount='32px' />

    <Layout align='center'>
      <RippleBlock bg='tomato' />
      <Gutter amount='32px' />
      <RippleBlock bg='blue' wrapperStyles={{ color: 'yellow' }}>
        <div style={{ padding: 16 }}>foo</div>
      </RippleBlock>
      <Gutter amount='32px' />
      <RippleBlock bg='mediumseagreen' />
    </Layout>

    <Gutter vertical />
    
    <Layout>
      <CodeBlock code={withRippleExample} />
    </Layout>

    <Layout>
      <Properties properties={withRippleProperties} />
    </Layout>
  </div>
);

const Block = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.bg || '#eee'};
`;

const RippleBlock = withRipple(Block);

export default Other;
