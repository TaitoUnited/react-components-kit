import React from 'react';
import styled from 'styled-components';

import {
  Layout,
  Padder,
  Button,
  Heading,
  Text,
  LineSeparator,
} from 'react-components-kit';

const Typography = () => (
  <div>
    <Heading>Headings</Heading>

    <Layout align='center'>
      <Heading color='tomato'>
        Heading 1
      </Heading>
      <Padder horiz='32px' />
      <Heading el='h2' color='slategrey'>
        Heading 2
      </Heading>
      <Padder horiz='32px' />
      <Heading el='h3'>
        Heading 3
      </Heading>
      <Padder horiz='32px' />
      <Heading el='h4' color='rebeccapurple'>
        Heading 4
      </Heading>
    </Layout>

    <Layout align='center'>
      <Heading sub el='h2' color='primaryColorLight'>
        Sub heading 2
      </Heading>
      <Padder horiz='32px' />
      <Heading sub el='h3'>
        Sub heading 3
      </Heading>
      <Padder horiz='32px' />
      <Heading sub el='h4' color='secondaryColorDark'>
        Sub heading 4
      </Heading>
    </Layout>

    <LineSeparator horizontal />

    <Heading el='h2'>Text</Heading>

    <Layout align='center'>
      <Text color='tomato'>
        Colored span
      </Text>
      <Padder horiz='32px' />
      <Text color='slategrey' el='i' size='12px'>
        Italic smaller
      </Text>
      <Padder horiz='32px' />
      <Text el='p'>
        Paragraph
      </Text>
      <Padder horiz='32px' />
      <Text color='rebeccapurple' el='strong' size='18px'>
        Strong text
      </Text>
    </Layout>
  </div>
);

export default Typography;
