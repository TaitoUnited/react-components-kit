import React from 'react';
import { Layout, Gutter, Button, Heading, Divider } from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';
import { buttonsExample } from './codeSnippets';
import { buttonProperties } from './compProperties';

const Buttons = () => (
  <div>
    <Heading>Buttons</Heading>
    <Layout column>
      <Layout align='center'>
        <Button primary>Primary</Button>
        <Gutter />
        <Button secondary>Secondary</Button>
        <Gutter />
        <Button danger>Danger</Button>
        <Gutter />
        <Button flat>Flat</Button>
        <Gutter />
        <Button danger disabled>Danger</Button>
      </Layout>

      <Gutter vertical />

      <Layout align='center'>
        <Button primary outline>Primary</Button>
        <Gutter />
        <Button secondary outline>Secondary</Button>
        <Gutter />
        <Button danger outline>Danger</Button>
        <Gutter />
        <Button flat outline>Flat</Button>
        <Gutter />
        <Button danger outline disabled>Danger</Button>
      </Layout>

      <Gutter vertical />

      <Layout align='center'>
        <Button primary clear>Primary</Button>
        <Gutter />
        <Button secondary clear>Secondary</Button>
        <Gutter />
        <Button danger clear>Danger</Button>
        <Gutter />
        <Button flat clear>Flat</Button>
        <Gutter />
        <Button danger clear disabled>Danger</Button>
      </Layout>
    </Layout>

    <Divider />

    <Layout>
      <CodeBlock code={buttonsExample} />
    </Layout>

    <Layout>
      <Properties properties={buttonProperties} />
    </Layout>
  </div>
);

export default Buttons;
