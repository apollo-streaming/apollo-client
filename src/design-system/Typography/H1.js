import styled from 'styled-components';
import COLORS from '../COLORS';

const fontSizes = {
  x_small: '20px',
  small: '24px',
  medium: '28px',
  large: '32px',
  x_large: '48px',
  xx_large: '64px',
};

const fontWeights = {
  regular: '400',
  semibold: '600',
  bold: '800',
};

const H1Wrapper = styled.h1`
  color: ${(props) => props.color || COLORS.DARK_900};
  font-family: 'Montserrat';
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

export default H1Wrapper;
