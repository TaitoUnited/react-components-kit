import React from 'react';
import styled from 'styled-components';

import {
  Layout,
  Box,
  Padder,
  Heading,
  Spinner,
  LineSeparator,
  Badge,
  Tooltip,
  Text,
  Button,
  CircleProgress,
  PlaceholderRows,
} from 'react-components-kit';

const Utilities = () => (
  <div>
    <Heading>Utilities</Heading>

    <Heading el='h2' id='badge'>Badge</Heading>

    <Layout align='center'>
      <Badge mright='16px'>
        Badge default
      </Badge>
      <Badge primary mright='16px'>
        Badge primary
      </Badge>
      <Badge secondary mright='16px'>
        Badge secondary
      </Badge>
      <Badge error mright='16px'>
        Badge error
      </Badge>
      <Badge success>
        Badge success
      </Badge>
    </Layout>

    <LineSeparator horizontal />

    <Heading el='h2'>CircleProgress</Heading>
    <Layout>
      <CircleProgress size='200px' progress={64} />
    </Layout>

    <LineSeparator horizontal />

    <Heading el='h2' id='padder'>
      Padder
    </Heading>

    <LineSeparator horizontal />

    <Heading el='h2'>PlaceholderRows</Heading>
    <Layout>
      <PlaceholderRows rows={6} />
    </Layout>

    <LineSeparator horizontal />

    <Heading el='h2' id='spinner'>
      Spinner
    </Heading>

    <Layout align='center'>
      <Spinner sm/>
      <Padder horiz='32px' />
      <Spinner md color='tomato'/>
      <Padder horiz='32px' />
      <Spinner lg color='papayawhip'/>
    </Layout>

    <LineSeparator horizontal />

    <Heading el='h2'>Tooltip</Heading>
    <Layout>
      <Box>
        <Tooltip content='Hovering yey!'>
          <Text>Hover over me</Text>
        </Tooltip>
      </Box>
      <Padder horiz='32px' />
      <Box>
        <Tooltip
          content='Down here!'
          color='tomato'
          bg='papayawhip'
          bottom
        >
          <Button secondary>Hover over me too</Button>
        </Tooltip>
      </Box>
      <Padder horiz='32px' />
      <Box>
        <Tooltip
          color='rebeccapurple'
          bg='white'
          top
          content={
            <Layout align='center'>
              <Spinner color='tomato' sm />
              <Padder horiz='8px' />
              <Text color='tomato' el='p'>
                Custom content works too!
              </Text>
            </Layout>
          }
        >
          <Button danger>Don't you dare hover over me!</Button>
        </Tooltip>
      </Box>
    </Layout>
  </div>
);

export default Utilities;
