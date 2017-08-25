import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  code: PropTypes.string,
};

const CodeBlock = ({ code = '' }) => (
  <CodeBlockWrapper>
    <pre>{code.trim()}</pre>
  </CodeBlockWrapper>
);

const CodeBlockWrapper = styled.code`
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 16px;
  color: #888;
  background-color: #f5f5f5;
  width: 100%;
`;

CodeBlock.propTypes = propTypes;

export default CodeBlock;
