import React from 'react';
import styled from 'styled-components';
import { Layout, Padder, Box, Card, Heading } from 'react-components-kit';

const Cards = () => (
  <div>
    <Heading el='h2'>Card</Heading>
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
  </div>
);

export default Cards;
