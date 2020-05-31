import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../COLORS';
import Flex from '../Flex';

const CardWrapper = styled(Flex)`
  background-color: ${({ bgColor }) => bgColor || COLORS.DARK_900};
  border-width: ${({ noBorder, borderSize }) =>
    noBorder ? '0px' : borderSize || '1px'};
  border-color: ${({ borderColor }) => borderColor || COLORS.CLEAR_100};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  border-radius: 4px;
  box-shadow: ${({ withShadow }) =>
    withShadow && '0 0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)'};
  height: ${({ height }) => height || 'unset'};
  padding: 32px;
`;

function Card({ children, ...props }) {
  return <CardWrapper {...props}>{children}</CardWrapper>;
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
