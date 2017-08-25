import React from 'react';
import styled from 'styled-components';
import {
  Layout,
  Padder,
  Button,
  Heading,
  LineSeparator,
} from 'react-components-kit';

import Properties from './common/Properties';

const buttonProperties = [
  {
    name: 'primary',
    type: 'bool',
    defaultVal: 'false',
    description: 'Foobar foobar',
  },
  {
    name: 'secondary',
    type: 'bool',
    defaultVal: 'false',
    description: 'Foobar foobar',
  },
  {
    name: 'danger',
    type: 'bool',
    defaultVal: 'false',
    description: 'Foobar foobar',
  },
  {
    name: 'disabled',
    type: 'bool',
    defaultVal: 'false',
    description: 'Foobar foobar',
  },
  {
    name: 'outline',
    type: 'bool',
    defaultVal: 'false',
    description: 'Foobar foobar',
  },
  {
    name: 'clear',
    type: 'bool',
    defaultVal: 'false',
    description: 'Foobar foobar',
  }
];

const Buttons = () => (
  <div>
    <Heading>Buttons</Heading>
    <Layout column>
      <Layout align='center'>
        <Button primary>Primary</Button>
        <Padder />
        <Button secondary>Secondary</Button>
        <Padder />
        <Button danger>Danger</Button>
        <Padder />
        <Button danger disabled>Danger</Button>
      </Layout>

      <Padder vert='16px' />

      <Layout align='center'>
        <Button primary outline>Primary</Button>
        <Padder />
        <Button secondary outline>Secondary</Button>
        <Padder />
        <Button danger outline>Danger</Button>
        <Padder />
        <Button danger outline disabled>Danger</Button>
      </Layout>

      <Padder vert='16px' />

      <Layout align='center'>
        <Button primary clear>Primary</Button>
        <Padder />
        <Button secondary clear>Secondary</Button>
        <Padder />
        <Button danger clear>Danger</Button>
        <Padder />
        <Button danger clear disabled>Danger</Button>
      </Layout>
    </Layout>

    <LineSeparator horizontal />

    <Layout>
      <Properties properties={buttonProperties} />
    </Layout>
  </div>
);

export default Buttons;
