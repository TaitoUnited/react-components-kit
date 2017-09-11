import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colorGetter from './colorGetter';
import Layout from './Layout';

export const TableEl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled(Layout)`
  font-size: 0.9rem;
  ${props => props.active &&
    `background-color: ${colorGetter(props, 'primaryColorLightest')};`}

  &:nth-child(odd) {
    background-color: ${props => colorGetter(props, 'greyLightest')};
    ${props => props.active &&
      `background-color: ${colorGetter(props, 'primaryColorLightest')};`}
  }
`;

export const Head = styled(Layout)`
  border-bottom: 1px solid ${props => colorGetter(props, 'greyLight')};
  font-size: 0.9rem;
  color: ${props => colorGetter(props, 'primaryColor')};
`;

export const Cell = styled(Layout.Box)`
  padding: 16px 8px;
  ${props => props.active && 'text-decoration: underline;'}
  ${props => props.active && 'cursor: pointer;'}
`;

class Table extends Component {
  static Head = Head;
  static Row = Row;
  static Cell = Cell;

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <TableEl {...rest}>{children}</TableEl>
    );
  }
}

export default Table;
