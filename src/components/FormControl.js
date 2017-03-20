import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colorGetter from './colorGetter';
import { Icon } from './Icon';

const FormControlWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${props => colorGetter(props, 'primaryColor')};
  margin-bottom: ${props => props.mb || '40px'};
  ${props => props.horizontal && 'flex-direction: row;'}
  ${props => props.horizontal && 'align-items: center;'}
`;
const Label = styled.span`
  ${props => props.horizontal && 'margin-right: 16px;'}
  ${props => props.horizontal && 'width: 200px;'}
`;

const FormControl = ({
  label = '', icon = '', children, horizontal, ...rest
}) => (
  <FormControlWrapper horizontal={horizontal} {...rest}>
    <Label horizontal={horizontal}>
      {icon && <Icon className={icon} mright />}
      {label}
    </Label>

    {/* Render inputs */}
    {children}
  </FormControlWrapper>
);

FormControl.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any,
  icon: PropTypes.string,
  horizontal: PropTypes.bool,
};

export default FormControl;
