import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Home from './Home';
import Buttons from './Buttons';
import Typography from './Typography';
import Structure from './Structure';
import Form from './Form';
import Utilities from './Utilities';
import Functions from './Functions';
import Cards from './Cards';

const propTypes = {
  something: PropTypes.any,
};

class Sections extends Component {
  state = {
    addSearch: 'TODO',
  }

  render() {
    return (
      <SectionsWrapper>
        <Route exact path='/' component={Home} />
        <Route path='/buttons' component={Buttons} />
        <Route path='/typography' component={Typography} />
        <Route path='/structure' component={Structure} />
        <Route path='/form' component={Form} />
        <Route path='/cards' component={Cards} />
        <Route path='/utilities' component={Utilities} />
        <Route path='/functions' component={Functions} />
      </SectionsWrapper>
    );
  }
}

const SectionsWrapper = styled.div`
  padding: 16px 24px;
  min-height: 100vh;
  flex: 1;
  overflow: auto;
`;

Sections.propTypes = propTypes;

export default Sections;
