import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colorGetter from './colorGetter';

const SelectWrapper = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 1rem;
  background: transparent;
  position: relative;
`;
const SelectEl = styled.select`
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;
  appearance: none;
  padding: 8px 24px 8px 8px;
  border-radius: 4px;
  border: 2px solid ${props => colorGetter(props, 'greyDark')};
  z-index: 2;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${props =>
      colorGetter(props, 'primaryColorLightest')
    };
  }
`;
const ArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  position: absolute;
  right: 8px;
  top: 0px;
  z-index: 1;
`;
const ArrowDown = styled.div`
  font-size: 1rem;
  color: ${props => colorGetter(props, 'greyDarker')};
  transform: rotate(90deg);
`;

const Select = ({ children, onSelect, value }) => (
  <SelectWrapper>
    <SelectEl
      onChange={({ target }) => onSelect(target.value)}
      value={value}
    >
      {children}
    </SelectEl>
    <ArrowWrapper>
      <ArrowDown>&rsaquo;</ArrowDown>
    </ArrowWrapper>
  </SelectWrapper>
);

Select.propTypes = {
  children: PropTypes.any.isRequired,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default Select;
