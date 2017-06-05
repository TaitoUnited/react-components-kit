import styled from 'styled-components';

import colorGetter from './colorGetter';
import { Layout, Box } from './Layout';

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
export const Row = styled(Layout)`
  font-size: 0.9rem;
  ${props => props.active &&
    `background-color: ${colorGetter(props, 'primaryColorLightest')};`}

  &:nth-child(odd) {
    background-color: ${props => colorGetter(props, 'greyLightest')};
    ${props => props.active &&
      `background-color: ${colorGetter(props, 'primaryColorLightest')};`}
  }
`;
export const Head = styled(Layout)`
  border-bottom: 1px solid ${props => colorGetter(props, 'greyLight')};
  font-size: 0.9rem;
  color: ${props => colorGetter(props, 'primaryColor')};
`;
export const Cell = styled(Box)`
  padding: 16px 8px;
  ${props => props.active && 'text-decoration: underline;'}
  ${props => props.active && 'cursor: pointer;'}
`;
