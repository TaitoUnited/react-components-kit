import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import colorGetter from './colorGetter';

const propTypes = {
  children: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string,
  type: PropTypes.string,
  column: PropTypes.bool,
  row: PropTypes.bool,
  padding: PropTypes.string,
};

class RadioButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
    };
  }

  select = (value) => {
    this.props.onSelect(value);
    this.setState({ selected: value });
  }

  render() {
    const { children, row, column, padding, ...rest } = this.props;

    return (
      <Layout row={row} column={column} w='auto'>
        {children.map((child, idx) => {
          const margin = column
            ? `${idx ? padding : '0px'} 0px 0px 0px`
            : `0px 0px 0px ${idx ? padding : '0px'}`;

          return (
            <SelectionBox
              key={idx}
              margin={margin}
              padding={this.props.padding}
              flex={child.props.flex}
              onClick={() => this.select(child.props.value)}
              active={this.state.selected === child.props.value}
              {...rest}
            >
              <Content>
                {child.props.children || child.props.value}
              </Content>
            </SelectionBox>
          );
        })}
      </Layout>
    );
  }
}

// helpers
const getColor = (props) => {
  if (props.secondary) return colorGetter(props, 'secondaryColorLight');
  if (props.success) return colorGetter(props, 'successColorLight');
  if (props.error) return colorGetter(props, 'errorColorLight');
  if (props.warn) return colorGetter(props, 'warnColorLight');
  if (props.primary) return colorGetter(props, 'primaryColorLight');
  return colorGetter(props, 'primaryColorLight');
};

const getBorderColor = (props) => {
  if (props.secondary) return colorGetter(props, 'secondaryColorDark');
  if (props.success) return colorGetter(props, 'successColorDark');
  if (props.error) return colorGetter(props, 'errorColorDark');
  if (props.warn) return colorGetter(props, 'warnColorDark');
  if (props.primary) return colorGetter(props, 'primaryColorDark');
  return colorGetter(props, 'primaryColorDark');
};

// Styled components
const SelectionBox = styled.div`
  flex: ${props => props.flex};
  cursor: pointer;

  margin: ${props => props.margin};

  border-radius: 4px;
  border-size: 2px;
  border-color: ${props => props.active
    ? getBorderColor(props)
    : colorGetter(props, 'greyLight')};
  border-style: solid;

  background-color: ${props => props.active
    ? getColor(props)
    : colorGetter(props, 'greyLighter')};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

RadioButton.propTypes = propTypes;

// RadioButton.defaultProps = {};

export default RadioButton;
