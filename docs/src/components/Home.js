import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  something: PropTypes.any,
};

const Home = () => (
  <HomeWrapper>
    HOME
  </HomeWrapper>
);

const HomeWrapper = styled.div`

`;

Home.propTypes = propTypes;

export default Home;
