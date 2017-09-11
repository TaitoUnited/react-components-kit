import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

const propTypes = {
  code: PropTypes.string,
};

const CodeBlock = ({ code = '' }) => (
  <CodeBlockWrapper>
    <SyntaxHighlighter language='javascript' style={atomOneDark}>
      {code.trim()}
    </SyntaxHighlighter>
  </CodeBlockWrapper>
);

const CodeBlockWrapper = styled.div`
  width: 100%;
  & > pre {
    border-radius: 4px;
    padding: 8px 16px !important;
    font-size: 14px !important;
  }
`;

CodeBlock.propTypes = propTypes;

export default CodeBlock;
