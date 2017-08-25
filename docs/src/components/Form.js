import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Layout,
  Padder,
  ToggleSwitch,
  Heading,
  Textarea,
  TextField,
  FormControl,
  Input,
  Select,
  DateSelect,
} from 'react-components-kit';

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

class Form extends Component {
  state = {}

  handleInputChange = (event) => {
    const target = event.target;
    const value = (target.type && target.type === 'checkbox')
      ? target.checked
      : target.value;

    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Heading>Form stuff</Heading>
        <Layout>
          <FormControl label='Awesomeness level is:'>
            <Padder vert='8px' />
            <Select
              name='select'
              onSelect={this.handleInputChange}
              value={this.state.select}
            >
              <option value='foo1'>Legen...</option>
              <option value='foo2'>wait for it</option>
              <option value='foo3'>...dary</option>
            </Select>
          </FormControl>
        </Layout>

        <Padder vert='16px' />

        <Layout>
          <FormControl label='I`m a textarea - type a lot to make me auto-grow'>
            <Textarea
              name='textarea'
              value={this.state.textarea}
              onChange={this.handleInputChange}
              autoResize
            />
          </FormControl>
          <Padder horiz='32px' />
          <FormControl label='You can also add an icon!' icon='ion-planet'>
            <Input
              name='inputWithIcon'
              onChange={this.handleInputChange}
              value={this.state.inputWithIcon}
            />
          </FormControl>
        </Layout>

        <Padder vert='16px' />

        <Layout>
          <TextField
            name='textfield'
            label='Teemu testi'
            onChange={this.handleInputChange}
            value={this.state.textfield}
          />
        </Layout>

        <Padder vert='16px' />

        <Heading el='h2'>DateSelect</Heading>

        <Layout row>
          <DateSelect
            locale='fi-FI'
            onSelect={date => console.log('selected: ', date)}
          />

          <Padder horiz='64px' />

          <DateSelect
            locale='en-US'
            defaultDate={new Date()}
            onSelect={date => console.log('selected: ', date)}
          />
        </Layout>

        <Heading el='h2'>ToggleSwitch</Heading>

        <Padder vert='16px' />
        <Layout align='center'>
          <ToggleSwitch onToggle={() => console.log('TOGGLE!')}/>
          <Padder horiz='32px' />
          <ToggleSwitch
            onToggle={() => console.log('TOGGLE!')}
            ballColor='blue'
            borderColor='rebeccapurple'
            bgToggled='rebeccapurple'
          />
          <Padder horiz='32px' />
          <ToggleSwitch
            onToggle={() => console.log('TOGGLE!')}
            ballColor='primaryColorLight'
            borderColor='primaryColorDark'
            bgToggled='primaryColorLighter'
            outerLabel='toggle me!'
            innerLabelLeft='on'
            innerLabelRight='off'
          />
        </Layout>
      </div>
    );
  }
}

export default Form;
