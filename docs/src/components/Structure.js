import React from 'react';
import { Heading, Layout, Gutter, Divider, Text } from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';

import { layoutExample, gutterExample, dividerExample } from './codeSnippets';
import {
  layoutBoxProperties,
  layoutProperties,
  gutterProperties,
  dividerProperties,
} from './compProperties';

const Structure = () => (
  <div>
    <Heading>Structure</Heading>

    <Heading h2 id='gutter'>Gutter</Heading>

    <Text p>
      Gutter can be used to add either horizontal or vertical
      space between items.
    </Text>

    <Layout>
      <CodeBlock code={gutterExample} />
    </Layout>

    <Layout>
      <Properties properties={gutterProperties} />
    </Layout>

    <Divider />

    <Heading h2 id='divider'>Divider</Heading>

    <Text p>
      Divider creates a padded horizontal or vertical line to separate content.
    </Text>

    <Layout>
      <Layout.Box flex='3'>
        <Divider color='rebeccapurple' />
      </Layout.Box>

      <Layout.Box flex='1'>
        <Divider vertical len='80px' amount='60px' color='red' />
      </Layout.Box>
    </Layout>

    <Layout>
      <CodeBlock code={dividerExample} />
    </Layout>

    <Layout>
      <Properties properties={dividerProperties} />
    </Layout>

    <Divider />

    <Heading h2 id='layout'>Layout</Heading>

    <Text p>
      Layout is helper component for creating row / column layouts with flexbox.
    </Text>

    <Layout>
      <Properties properties={layoutProperties} />
    </Layout>

    <Divider />

    <Heading h2 id='box'>Layout.Box</Heading>

    <Text p>
      Box defines a flexable cell inside the flexbox layout.
    </Text>

    <Layout>
      <Properties properties={layoutBoxProperties} />
    </Layout>

    <Gutter vertical amount='32px' />

    <Layout>
      <CodeBlock code={layoutExample} />
    </Layout>
  </div>
);

export default Structure;
