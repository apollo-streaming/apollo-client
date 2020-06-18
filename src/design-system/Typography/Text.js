import styled from 'styled-components';
import COLORS from '../COLORS';

const fontSizes = {
  x_small: '10px',
  small: '12px',
  medium: '14px',
  large: '20px',
  x_large: '24px',
};

const fontWeights = {
  regular: '400',
  semibold: '600',
  bold: '800',
};

const TextWrapper = styled.p`
  color: ${(props) => props.color || COLORS.DARK_900};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'unset')};
  font-family: 'Montserrat', sans-serif;
  font-size: ${(props) =>
    props.size ? fontSizes[props.size] : fontSizes.medium};
  font-weight: ${(props) =>
    props.weight ? fontWeights[props.weight] : fontWeights.regular};
  text-align: ${(props) => props.textAlign || 'unset'};
  margin-right: ${(props) => props.mr || 'unset'};
  margin-left: ${(props) => props.ml || 'unset'};
  margin-bottom: ${(props) => props.mb || 'unset'};
  margin-top: ${(props) => props.mt || 'unset'};
`;

export default TextWrapper;
