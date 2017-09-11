import styled from 'styled-components';
import media from './media';

const DEFAULT_PAD = '16px';

const getDir = ({ horizontal, vertical }) => {
  if (horizontal) return 'right';
  else if (vertical) return 'top';
  return 'right'; // default is always horizontal
};

const getPadding = (props) => {
  const amount = props.amount || props.theme.gutterSize || DEFAULT_PAD;
  return `padding-${getDir(props)}: ${amount};`;
};

const getMediaPadding = (props, { dir, amount: mediaAmount }) => {
  const amount = mediaAmount || props.theme.gutterSize || DEFAULT_PAD;
  return `padding-${dir || getDir(props)}: ${amount};`;
};

/*
<Gutter
  horizontal
  amount='32px'
  xs={{ dir: 'vertical', amount: '16px' }}
  sm={{ amount: '16px' }}
  lg={{ dir: 'vertical', amount: '32px' }}
  xl={{ dir: 'horizontal', amount: '40px' }}
/>
*/

const Gutter = styled.div`
  height: 0px;
  ${props => getPadding(props)}
  ${props => props.xs && media.phone`${getMediaPadding(props, props.xs)}`}
  ${props => props.sm && media.tablet`${getMediaPadding(props, props.sm)}`}
  ${props => props.md && media.desktop`${getMediaPadding(props, props.md)}`}
  ${props => props.lg && media.giant`${getMediaPadding(props, props.lg)}`}

  @media print {
    ${props => props.noprint && 'display: none;'}
  }
`;

export default Gutter;
