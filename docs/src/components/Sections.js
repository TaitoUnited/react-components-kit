import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { media } from 'react-components-kit';

import Home from './Home';
import Buttons from './Buttons';
import Typography from './Typography';
import Structure from './Structure';
import Form from './Form';
import Utilities from './Utilities';
import Other from './Other';
import Cards from './Cards';
import Navigation from './Navigation';

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
        <RoutesWrapper>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/buttons' component={Buttons} />
            <Route path='/cards' component={Cards} />
            <Route path='/form' component={Form} />
            <Route path='/navigation' component={Navigation} />
            <Route path='/structure' component={Structure} />
            <Route path='/typography' component={Typography} />
            <Route path='/utilities' component={Utilities} />
            <Route path='/other' component={Other} />
            <Route component={Home} />
          </Switch>
        </RoutesWrapper>
      </SectionsWrapper>
    );
  }
}

const SectionsWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  flex: 1;
  overflow: auto;
`;
const RoutesWrapper = styled.div`
  padding: 16px 32px;
  max-width: 800px;

  ${media.tablet`
    padding: 16px 24px;
  `}
  ${media.phone`
    padding: 16px;
  `}
`;

Sections.propTypes = propTypes;

export default Sections;
