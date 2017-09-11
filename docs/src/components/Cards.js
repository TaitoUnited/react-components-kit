import React from 'react';
import styled from 'styled-components';
import {
  Layout,
  Gutter,
  Heading,
  Card,
  Divider,
} from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';
import { cardExample, cardAnimatedExample } from './codeSnippets';
import { cardProperties, cardAnimatedProperties } from './compProperties';

const Cards = () => (
  <div>
    <Heading>Cards</Heading>

    <Heading h2>Card</Heading>

    <Layout>
      <Layout.Box>
        <Card depth={1}>Depth 1</Card>
      </Layout.Box>
      <Gutter />
      <Layout.Box>
        <Card depth={2}>Depth 2</Card>
      </Layout.Box>
      <Gutter />
      <Layout.Box>
        <Card depth={3}>Depth 3</Card>
      </Layout.Box>
    </Layout>

    <Divider />

    <Heading h2>Card.Animated</Heading>

    <Layout>
      <Layout.Box>
        <Card.Animated depth={1}>Top</Card.Animated>
      </Layout.Box>
      <Gutter />
      <Layout.Box>
        <Card.Animated animDir='left' depth={2}>Left</Card.Animated>
      </Layout.Box>
      <Gutter />
      <Layout.Box>
        <Card.Animated animDir='right' depth={3}>Right</Card.Animated>
      </Layout.Box>
      <Gutter />
      <Layout.Box>
        <Card.Animated animDir='bottom' depth={3}>Bottom</Card.Animated>
      </Layout.Box>
    </Layout>

    <Gutter vertical />

    <Layout>
      <CodeBlock code={cardExample} />
    </Layout>

    <Layout>
      <Properties properties={[...cardProperties, ...cardAnimatedProperties]} />
    </Layout>

    <Gutter vertical amount='32px' />

    
  </div>
);

export default Cards;
