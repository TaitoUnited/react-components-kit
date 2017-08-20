import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from 'react-components-kit';

const propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      defaultVal: PropTypes.string.isRequired,
      description: PropTypes.string,
      required: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

const Properties = ({ properties }) => (
  <PropertiesWrapper>
    <Heading sub el='h3'>Properties</Heading>

    <PropertiesTable>
      <strong>
        <PropRow>
          <Name head>Name</Name>
          <Type head>Type</Type>
          <DefaultValue head>Default</DefaultValue>
          <Description head>Description</Description>
        </PropRow>
      </strong>

      {properties.map(prop =>
        <PropRow>
          <Name>{prop.name}{prop.required ? ' *' : ''}</Name>
          <Type>{prop.type}</Type>
          <DefaultValue>{prop.defaultVal}</DefaultValue>
          <Description>{prop.description || ''}</Description>
        </PropRow>
      )}
    </PropertiesTable>
  </PropertiesWrapper>
);

const PropertiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const PropertiesTable = styled.div`
  border: 1px solid #eee;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;
const PropRow = styled.div`
  display: flex;
  padding: 12px 16px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  &:first-child {
    border-bottom: 1px solid #eee;
  }
`;
const Name = styled.div`
  flex: 1;
  color: ${props => !props.head && '#059642'};
`;
const Type = styled.div`
  width: 80px;
  font-family: ${props => !props.head &&
    'Menlo,Monaco,Consolas,Courier New,monospace'
  };
`;
const DefaultValue = styled.div`
  width: 80px;
  font-family: ${props => !props.head &&
    'Menlo,Monaco,Consolas,Courier New,monospace'
  };
`;
const Description = styled.div`
  flex: 3;
`;

Properties.propTypes = propTypes;

export default Properties;
