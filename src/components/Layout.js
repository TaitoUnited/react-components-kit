// import React from 'react';
import styled from 'styled-components';
import media from './media';

export const Layout = styled.div`
  display: flex;
  flex-wrap: ${props => props.column ? 'nowrap' : 'wrap'};
  width: 100%;
  ${props => props.w && `width: ${props.w};`}
  ${props => props.center && 'margin: 0 auto;'}
  ${props => props.maxW && `max-width: ${props.maxW};`}
  ${props => props.column && 'flex-direction: column;'}
  ${props => !props.column && 'flex-direction: row;'}
  ${props => props.align && `align-items: ${props.align};`}
  ${props => props.justify && `justify-content: ${props.justify};`}
  @media print {
    ${props => props.noprint && 'display: none;'}
  }
  ${props => props.xs && media.phone`
    flex-direction: ${props.xs};
  `}
  ${props => props.sm && media.tablet`
    flex-direction: ${props.sm};
  `}
  ${props => props.md && media.desktop`
    flex-direction: ${props.md};
  `}
  ${props => props.lg && media.giant`
    flex-direction: ${props.lg};
  `}
`;

export const Box = styled.div`
  flex: ${props => props.flex || 'none'};
  @media print {
    ${props => props.noprint && 'display: none;'}
  }
`;
