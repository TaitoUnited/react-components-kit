/* eslint-disable no-param-reassign */
import { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 420,
};

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;

/* eslint-enable no-param-reassign */
