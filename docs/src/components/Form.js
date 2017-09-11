import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Layout,
  Gutter,
  ToggleSwitch,
  Heading,
  TextField,
  Divider,
  Icon,
  // Textarea,
  // FormControl,
  // Input,
  // Select,
  // DateSelect,
} from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';

import { toggleSwitchExample, textFieldExample } from './codeSnippets';
import { toggleSwitchProperties, textFieldProperties } from './compProperties';

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

class Form extends Component {
  state = {
    toggled: false,
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = (target.type && target.type === 'checkbox')
      ? target.checked
      : target.value;

    const name = target.name;

    this.setState({ [name]: value });
  }

  toggle = () => {
    this.setState(({ toggled }) => ({ toggled: !toggled }));
  };

  render() {
    return (
      <div>
        <Heading>Form stuff</Heading>

        <Heading h2>ToggleSwitch</Heading>

        <Gutter vertical />
        <Layout align='center'>
          <ToggleSwitch
            onToggle={this.toggle}
            isToggled={this.state.toggled}
          />
          <Gutter />
          <ToggleSwitch
            onToggle={this.toggle}
            isToggled={this.state.toggled}
            bg='rebeccapurple'
            borderColor='rebeccapurple'
            bgToggled='cadetblue'
          />
          <Gutter />
          <ToggleSwitch
            onToggle={this.toggle}
            isToggled={this.state.toggled}
            innerLeft={<Icon name='ios-checkmark-empty' size='25px' />}
            innerRight={<Icon name='ios-close-empty' size='25px' />}
            bgToggled='#ff04c9'
          />
        </Layout>

        <Gutter vertical />
    
        <Layout>
          <CodeBlock code={toggleSwitchExample} />
        </Layout>

        <Layout>
          <Properties properties={toggleSwitchProperties} />
        </Layout>

        <Divider />

        <Heading h2>TextField</Heading>

        <Layout column>
          <TextField
            name='textfield'
            label='Basic textfield'
            onChange={this.handleInputChange}
            value={this.state.textfield}
          />
          
          <Gutter vertical amount='32px' />

          <TextField
            name='textfieldvalidation'
            label='With validation (number) and custom styles'
            onChange={this.handleInputChange}
            value={this.state.textfieldvalidation}
            containerStyles={{ width: 400 }}
            inputStyles={{ color: 'orange' }}
            labelStyles={{ color: 'blue' }}
            validator={isNumeric}
            validationMessage='You must type a number'
          />

          <Gutter vertical amount='32px' />

          <TextField
            name='textfieldstacked'
            label='With stacked label (fixed to top)'
            onChange={this.handleInputChange}
            value={this.state.textfieldstacked}
            stackedLabel
          />

          <Gutter vertical amount='32px' />

          <TextField
            name='textfielddisabled'
            label='Disabled textfield'
            onChange={this.handleInputChange}
            value={this.state.textfielddisabled}
            disabled
          />
        </Layout>

        <Gutter vertical />
    
        <Layout>
          <CodeBlock code={textFieldExample} />
        </Layout>

        <Layout>
          <Properties properties={textFieldProperties} />
        </Layout>


        {/* <Layout>
          <FormControl label='Awesomeness level is:'>
            <Gutter vertical amount='8px' />
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
        </Layout> */}

        {/* <Gutter vertical /> */}

        {/* <Layout>
          <FormControl label='I`m a textarea - type a lot to make me auto-grow'>
            <Textarea
              name='textarea'
              value={this.state.textarea}
              onChange={this.handleInputChange}
              autoResize
            />
          </FormControl>
          <Gutter amount='32px' />
          <FormControl label='You can also add an icon!' icon='ion-planet'>
            <Input
              name='inputWithIcon'
              onChange={this.handleInputChange}
              value={this.state.inputWithIcon}
            />
          </FormControl>
        </Layout> */}

        {/* <Gutter vertical /> */}

        {/* <Gutter vertical /> */}

        {/* <Heading h2>DateSelect</Heading> */}

        {/* <Layout row>
          <DateSelect
            locale='fi-FI'
            onSelect={date => console.log('selected: ', date)}
          />

          <Gutter amount='64px' />

          <DateSelect
            locale='en-US'
            defaultDate={new Date()}
            onSelect={date => console.log('selected: ', date)}
          />
        </Layout> */}
      </div>
    );
  }
}

export default Form;
