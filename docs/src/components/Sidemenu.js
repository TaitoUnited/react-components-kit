import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Padder } from 'react-components-kit';

import logo from '../taito_ukkeli.png';

const propTypes = {
  something: PropTypes.any,
};

class Sidemenu extends Component {
  state = {
    filtering: 'TODO',
  }

  render() {
    return (
      <SidemenuWrapper>
        <Title>react-components-kit</Title>
        <SectionTitle to='/'>Getting started</SectionTitle>
        <Padder vert='24px' />

        <SectionTitle to='/buttons'>Buttons</SectionTitle>
        <MenuItem to='/buttons#button'>Button</MenuItem>

        <Padder vert='24px' />

        <SectionTitle to='/structure'>Structure</SectionTitle>
        <MenuItem to='/structure#layout'>Layout</MenuItem>
        <MenuItem to='/structure#box'>Box</MenuItem>

        <Padder vert='24px' />

        <SectionTitle to='/typography'>Typography</SectionTitle>
        <MenuItem to='/typography#heading'>Heading</MenuItem>
        <MenuItem to='/typography#text'>Text</MenuItem>
        <MenuItem to='/typography#icon'>Icon</MenuItem>

        <Padder vert='24px' />

        <SectionTitle to='/form'>Form</SectionTitle>
        <MenuItem to='/form#textfield'>TextField</MenuItem>

        <Padder vert='24px' />

        <SectionTitle to='/cards'>Cards</SectionTitle>
        <MenuItem to='/cards#card'>Card</MenuItem>

        <Padder vert='24px' />

        <SectionTitle to='/utilities'>Utilities</SectionTitle>
        <MenuItem to='/utilities#badge'>Badge</MenuItem>
        <MenuItem to='/utilities#padder'>Padder</MenuItem>
        <MenuItem to='/utilities#spinner'>Spinner</MenuItem>
        <MenuItem to='/utilities#tooltip'>Tooltip</MenuItem>

        <Padder vert='24px' />

        <SectionTitle to='/functions'>Functions</SectionTitle>
        <MenuItem to='/functions#create-theme'>createTheme</MenuItem>
        <MenuItem to='/functions#with-ripple'>withRipple (HOC)</MenuItem>

        <FooterLink
          href='http://taitounited.fi/'
          target='blank'
          rel='noopener nooreferer'
        >
          <PoweredBy>
            <span>Powered by</span><Logo src={logo} />
          </PoweredBy>
        </FooterLink>
      </SidemenuWrapper>
    );
  }
}

const SidemenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid #ccc;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.5);
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #222;
`;
const SectionTitle = styled(Link)`
  font-size: 11px;
  text-transform: uppercase;
  color: #666;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const MenuItem = styled(Link)`
  font-size: 14px;
  padding: 8px 0px;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const FooterLink = styled.a`
  text-decoration: none;
  color: #888;
  font-size: 10px;
  font-style: italic;
  &:hover {
    text-decoration: underline;
  }
`;
const PoweredBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  margin-top: 16px;
  border-top: 1px solid #f5f5f5;
`;
const Logo = styled.img`
  height: 26px;
  width: auto;
  margin-left: 10px;
`;

Sidemenu.propTypes = propTypes;

export default Sidemenu;
