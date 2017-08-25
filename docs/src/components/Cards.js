import React from 'react';
import styled from 'styled-components';
import {
  Layout,
  Padder,
  Box,
  Heading,
  Card,
  CardAnimated,
  LineSeparator,
} from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';

const cardProperties = [
  {
    name: 'depth',
    type: 'number',
    defaultVal: '1',
    description: 'Controls the elevation of the card component (1 - 3)',
  },
];

const cardAnimatedProperties = [
  {
    name: 'animDir',
    type: 'string',
    defaultVal: 'top',
    description: 'From which direction the component animates in.',
  },
];

const cardExample = `
import { Card } from 'react-components-kit';

or

import Card from 'react-components-kit/dist/components/Card';
`;

const cardAnimatedExample = `
import { CardAnimated } from 'react-components-kit';

or

import { CardAnimated } from 'react-components-kit/dist/components/Card';
`;

const Cards = () => (
  <div>
    <Heading>Cards</Heading>

    <Heading el='h2'>Card</Heading>

    <Layout>
      <CodeBlock code={cardExample} />
    </Layout>

    <Layout>
      <Properties properties={cardProperties} />
    </Layout>

    <Padder vert='32px' />

    <Layout>
      <Box>
        <Card depth={1}>Depth 1</Card>
      </Box>
      <Padder />
      <Box>
        <Card depth={2}>Depth 2</Card>
      </Box>
      <Padder />
      <Box>
        <Card depth={3}>Depth 3</Card>
      </Box>
    </Layout>

    <LineSeparator horizontal />

    <Heading el='h2'>CardAnimated</Heading>

    <Layout>
      <CodeBlock code={cardAnimatedExample} />
    </Layout>

    <Layout>
      <Properties properties={[...cardProperties, ...cardAnimatedProperties]} />
    </Layout>

    <Padder vert='32px' />

    <Layout>
      <Box>
        <CardAnimated depth={2}>Top</CardAnimated>
      </Box>
      <Padder />
      <Box>
        <CardAnimated animDir='left' depth={2}>Left</CardAnimated>
      </Box>
      <Padder />
      <Box>
        <CardAnimated animDir='right' depth={2}>Right</CardAnimated>
      </Box>
      <Padder />
      <Box>
        <CardAnimated animDir='bottom' depth={2}>Bottom</CardAnimated>
      </Box>
    </Layout>
  </div>
);

export default Cards;
