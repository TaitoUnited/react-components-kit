import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colorGetter from './colorGetter';

const DEFAULT_SPACE = '16px';

const Divider = ({ vertical, ...rest }) => vertical
  ? <Vertical {...rest} />
  : <Horizontal {...rest} />;

const Vertical = styled.div`
  height: ${props => props.len || 'auto'};
  width: 1px;
  background-color: ${p => p.color || colorGetter(p, 'dividerColor')};
  margin: 0px ${props =>
    props.amount || props.theme.dividerSpaceVertical || DEFAULT_SPACE
  };
`;

const Horizontal = styled.div`
  height: 1px;
  width: ${props => props.len || '100%'};
  background-color: ${p => p.color || colorGetter(p, 'dividerColor')};
  margin: ${props =>
    props.amount || props.theme.dividerSpaceHorizontal || DEFAULT_SPACE
  } 0px;
`;

Divider.propTypes = {
  vertical: PropTypes.bool,
  amount: PropTypes.string,
  len: PropTypes.string,
  color: PropTypes.string,
};

export default Divider;
