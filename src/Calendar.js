import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import colorGetter from './colorGetter';

import Layout from './Layout';
import IconButton from './IconButton';

const propTypes = {
  selectDate: PropTypes.func.isRequired,
  locale: PropTypes.string,
};

const range = n => Array.from(Array(n).keys());

class Calendar extends Component {
  state = {
    activeCell: '',
    month: (new Date()).getMonth(),
    year: (new Date()).getFullYear(),
  };

  setActive = (i, j) => {
    this.setState({ activeCell: `${i}x${j}` });
  }

  getDay = (i, j) => {
    const { year, month } = this.state;
    const firstDay = new Date(year, month, 1).getDay() || 7;
    const weeks = j * 7;
    // first day should be 1
    const days = (i + 1) - (firstDay - 1);
    // map too small and large values correctly
    const date = new Date(year, month, days + weeks);
    let relativeMonth = date.getMonth() - month;

    // fix going to next/last year
    if (relativeMonth === 11) relativeMonth = -1;
    if (relativeMonth === -11) relativeMonth = 1;

    return { day: date.getDate(), relativeMonth };
  }

  monthName = (number) => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(number);
    return date.toLocaleDateString(this.props.locale, { month: 'long' });
  }

  changeMonth = (relativeMonth) => {
    const { year, month } = this.state;

    if (month === 0 && relativeMonth === -1) {
      this.setState({ month: 11, year: year - 1 });
    } else if (month === 11 && relativeMonth === 1) {
      this.setState({ month: 0, year: year + 1 });
    } else {
      this.setState({ month: month + relativeMonth });
    }
  }

  isToday = (year, month, day) => {
    const date = new Date();
    return date.getFullYear() === year
      && date.getMonth() === month
      && date.getDate() === day;
  }

  render() {
    const { activeCell } = this.state;

    return (
      <CalendarWrapper>
        <MonthControls>
          <Title>
            {this.monthName(this.state.month)}&nbsp;{this.state.year}
          </Title>
          <IconButton
            onClick={() => this.changeMonth(-1)}
            className='ion-arrow-left-b'
            color='primaryColorDark'
            size='1.6rem'
          />
          <IconButton
            onClick={() => this.changeMonth(1)}
            className='ion-arrow-right-b'
            color='primaryColorDark'
            size='1.6rem'
          />
        </MonthControls>
        <Table>
          <Head align='center'>
            <Cell flex='1'>Ma</Cell>
            <Cell flex='1'>Ti</Cell>
            <Cell flex='1'>Ke</Cell>
            <Cell flex='1'>To</Cell>
            <Cell flex='1'>Pe</Cell>
            <Cell flex='1'>La</Cell>
            <Cell flex='1'>Su</Cell>
          </Head>
          {range(6).map((j) => {
            return (
              <Row key={`calRow${j}`}>
                {range(7).map((i) => {
                  const { year, month } = this.state;
                  const { day, relativeMonth } = this.getDay(i, j);
                  return (
                    <Cell
                      key={`calCell${i}x${j}`}
                      flex='1'
                      active={activeCell === `${i}x${j}`}
                      onMouseOver={() => this.setActive(i, j)}
                      onClick={() => this.props.selectDate(
                        year, month + relativeMonth, day)}
                      fade={relativeMonth !== 0}
                    >
                      {this.isToday(year, month, day)
                        ? (<strong>{day}</strong>)
                        : day}
                    </Cell>
                  );
                })}
              </Row>
            );
          })
        }
        </Table>
      </CalendarWrapper>
    );
  }
}


// Styled Components
const CalendarWrapper = styled.div`
  padding: 8px;
  border: 1px solid ${props => colorGetter(props, 'primaryColorDark')};
  border-radius: 4px;
`;

const MonthControls = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Title = styled.span`
  margin: auto auto;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
const Head = styled(Layout)`
  border-bottom: 1px solid ${props => colorGetter(props, 'greyLight')};
  text-align: center;
  font-size: 0.9rem;
  color: ${props => colorGetter(props, 'primaryColor')};
`;

const Row = styled(Layout)`
  font-size: 0.9rem;
`;

const Cell = styled(Layout.Box)`
  padding: 8px 16px;
  text-align: center;
  ${props => props.active &&
    `background-color: ${colorGetter(props, 'primaryColorLightest')};`}
  ${props => props.active && 'cursor: pointer;'}
  ${props => props.fade &&
    `color: ${colorGetter(props, 'primaryColorLighter')};`}
  border-radius: 50%;
`;


Calendar.propTypes = propTypes;

export default Calendar;
