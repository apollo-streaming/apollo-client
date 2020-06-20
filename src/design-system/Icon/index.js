import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

import GRID from '../GRID';

const sizes = {
  x_small: GRID.GET(1.5),
  small: GRID.GET(2),
  medium: GRID.GET(3),
  large: GRID.GET(4),
  x_large: GRID.GET(5),
};

const StyledIcon = styled.img`
  height: ${({ size }) => (size.includes('px') ? size : sizes[size])};
  width: ${({ size }) => (size.includes('px') ? size : sizes[size])};

  padding-left: ${({ paddingLeft, pl, padding }) =>
    paddingLeft || pl || padding || 'unset'};
  padding-right: ${({ paddingRight, pr, padding }) =>
    paddingRight || pr || padding || 'unset'};
  padding-top: ${({ paddingTop, pt, padding }) =>
    paddingTop || pt || padding || 'unset'};
  padding-bottom: ${({ paddingBottom, pb, padding }) =>
    paddingBottom || pb || padding || 'unset'};

  margin-left: ${({ marginLeft, ml, margin }) =>
    marginLeft || ml || margin || 'unset'};
  margin-right: ${({ marginRight, mr, margin }) =>
    marginRight || mr || margin || 'unset'};
  margin-top: ${({ marginTop, mt, margin }) =>
    marginTop || mt || margin || 'unset'};
  margin-bottom: ${({ marginBottom, mb, margin }) =>
    marginBottom || mb || margin || 'unset'};
`;

const loadIcon = require.context('../../assets/svg', false, /\.svg$/);

const Icon = ({ name, size = 'medium', ...props }) => {
  const icon = loadIcon(`./${name}.svg`);

  return <StyledIcon src={icon} size={size} {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
