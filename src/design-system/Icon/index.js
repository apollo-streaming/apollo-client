import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

import GRID from '../GRID';

const sizes = {
  x_small: GRID.GET(1.5),
  small: GRID.GET(2),
  medium: GRID.GET(3),
  large: GRID.GET(4),
};

const StyledIcon = styled.img`
  height: ${({ size }) => (size.includes('px') ? size : sizes[size])};
  width: ${({ size }) => (size.includes('px') ? size : sizes[size])};
`;

const loadIcon = require.context('../../assets/svg', false, /\.svg$/);

const Icon = ({ name, size = 'medium', ...props }) => {
  console.log(name);
  const icon = loadIcon(`./${name}.svg`);

  return <StyledIcon src={icon} size={size} {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
