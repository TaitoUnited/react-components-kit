import React from 'react';
import styled from 'styled-components';
import { Table, Head, Cell, Row } from 'react-components-kit';

const people = [
  {
    name: 'matt',
    email: 'matt@gmail.com',
    editor: 'vim',
  },
  {
    name: 'evaline',
    email: 'evaline@gmail.com',
    editor: 'atom',
  },
  {
    name: 'susan',
    email: 'susan@gmail.com',
    editor: 'emacs',
  }
];

const Tables = () => (
  <div>
    <Heading>Table</Heading>

    <Table>
      <Head>
        <Cell flex='1'>Name</Cell>
        <Cell flex='1'>Email</Cell>
        <Cell flex='1'>Fave Editor</Cell>
      </Head>

      {people.map((thing, idx) => (
        <Row
          active={this.state.table.selected === idx}
          onMouseOver={() => this.setState({
            table: { selected: idx },
          })}
        >
          <Cell
            flex='1'
            active={this.state.table.selected === idx}
          >
            {thing.name}
          </Cell>
          <Cell flex='1'>
            {thing.email}
          </Cell>
          <Cell flex='1'>
            {thing.editor}
          </Cell>
        </Row>
      ))}
    </Table>
  </div>
);

Tables.propTypes = propTypes;

export default Tables;
