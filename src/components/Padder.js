import styled from 'styled-components';
import media from './media';

const getPadding = (direction, amount) => {
  return `padding-${direction}: ${amount};`;
};

const getMediaPaddingDirection = (dir) => {
  return dir === 'vert' ? 'top' : 'right';
};

const Padder = styled.div`
  height: 0px;
  ${props => getPadding(
    props.vert ? 'top' : 'right',
    props.vert || props.horiz || '16px',
  )}

  @media print {
    ${props => props.noprint && 'display: none;'}
  }

  ${props => props.xs && media.phone`
    ${getPadding(
      getMediaPaddingDirection(props.xs),
      props.vert || props.horiz || '16px')}
  `}

  ${props => props.sm && media.tablet`
    ${getPadding(
      getMediaPaddingDirection(props.sm),
      props.vert || props.horiz || '16px')}
  `}

  ${props => props.md && media.desktop`
    ${getPadding(
      getMediaPaddingDirection(props.md),
      props.vert || props.horiz || '16px')}
  `}

  ${props => props.lg && media.giant`
    ${getPadding(
      getMediaPaddingDirection(props.lg),
      props.vert || props.horiz || '16px')}
  `}
`;

export default Padder;
