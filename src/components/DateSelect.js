import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import { Box } from './Layout';
import Padder from './Padder';
import colorGetter from './colorGetter';
import Calendar from './Calendar';
import Text from './Text';

const propTypes = {
  onSelect: PropTypes.func.isRequired,
  defaultDate: PropTypes.object,
  locale: PropTypes.string,
  w: PropTypes.string,
};

class DateSelect extends Component {
  constructor(props) {
    super(props);

    this.selectDate = this.selectDate.bind(this);
    this.toSelection = this.toSelection.bind(this);

    this.state = {
      selected: props.defaultDate,
    };
  }

  toSelection() {
    this.setState({ selected: null });
  }

  selectDate(year, month, day) {
    const selectedDate = new Date(year, month, day);
    this.setState({ selected: selectedDate });
    this.props.onSelect(selectedDate);
  }

  render() {
    const { selected } = this.state;
    const { locale, w: width, ...rest } = this.props;

    return (
      <DateSelectWrapper>
        {selected ?
          (<Box row style={{ display: 'flex' }}>
            <Icon className='ion-calendar' />
            <Padder horiz='8px' />
            <SelectionBox onClick={this.toSelection} w={width} {...rest}>
              <Text color='primaryColorDark'>
                {selected.toLocaleDateString(locale)}
              </Text>
            </SelectionBox>
          </Box>)
          : <Calendar selectDate={this.selectDate} locale={locale} {...rest} />
        }
      </DateSelectWrapper>
    );
  }
}

// Styled components
const DateSelectWrapper = styled.div`
  display: flex;
  margin: 8px 0px;
`;

const SelectionBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.w || 'auto'};
  padding: 4px;
  height: 30px;

  border: 1px solid ${props => colorGetter(props, 'primaryColorDark')};
  border-radius: 4px;
`;

const Icon = styled.i`
  font-size: 1.6rem;
  color: ${props => colorGetter(props, 'primaryColorDark')};
`;

DateSelect.propTypes = propTypes;

export default DateSelect;
