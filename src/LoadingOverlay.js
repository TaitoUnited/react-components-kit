import React from 'react';
import styled from 'styled-components';
import SquareLoader from './SquareLoader';

const LoadingOverlayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: fixed;
  z-index: 99999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const LoadingOverlay = () => (
  <LoadingOverlayWrapper>
    <SquareLoader lg dark />
  </LoadingOverlayWrapper>
);

export default LoadingOverlay;
