import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import media from './media';

const Box = styled.div`
  flex: ${props => props.flex || 'none'};

  @media print {
    ${props => props.noprint && 'display: none;'}
  }
`;

class Layout extends Component {
  static Box = Box;
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <LayoutEl {...rest}>{children}</LayoutEl>
    );
  }
}

const LayoutEl = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: ${props => props.column ? 'nowrap' : 'wrap'};
  flex-direction: ${props => props.column ? 'column' : 'row'};
  ${props => props.align && `align-items: ${props.align};`}
  ${props => props.justify && `justify-content: ${props.justify};`}
  ${props => props.centerSelf && 'margin: 0 auto;'}
  ${props => props.center && css`
    justify-content: center;
    align-items: center;
  `}

  ${props => props.xs && media.phone`flex-direction: ${props.xs};`}
  ${props => props.sm && media.tablet`flex-direction: ${props.sm};`}
  ${props => props.md && media.desktop`flex-direction: ${props.md};`}
  ${props => props.lg && media.giant`flex-direction: ${props.lg};`}

  @media print {
    ${props => props.noprint && 'display: none;'}
  }
`;

export default Layout;
