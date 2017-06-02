import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colorGetter from './colorGetter';

const VerticalLineSeparator = styled.div`
  height: ${props => props.len || 'auto'};
  width: 1px;
  margin: 0px ${props => props.separation || '16px'};
  background-color: ${props => colorGetter(props, 'greyLight')};
`;
const HorizontalLineSeparator = styled.div`
  width: ${props => props.len || '100%'};
  height: 1px;
  background-color: ${props => colorGetter(props, 'greyLight')};
  margin: ${props => props.separation || '32px'} 0px;
`;

const LineSeparator = ({ vertical, horizontal, ...rest }) => {
  if (vertical) {
    return (
      <VerticalLineSeparator {...rest} />
    );
  }
  if (horizontal) {
    return (
      <HorizontalLineSeparator {...rest} />
    );
  }
  return (<hr />);
};

LineSeparator.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  separation: PropTypes.string,
  len: PropTypes.string,
};

export default LineSeparator;
