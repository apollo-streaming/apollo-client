import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../COLORS';

const ButtonWrapper = styled.button`
  border-radius: 4px;
  color: ${({ color }) => color || COLORS.CLEAR_100};
  background-color: ${({ bgColor }) => bgColor || COLORS.DARK_900};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  padding: ${({ padding }) => padding || '8px 12px'};
  margin-right: ${(props) => props.mr || 'unset'};
  margin-left: ${(props) => props.ml || 'unset'};
  margin-bottom: ${(props) => props.mb || 'unset'};
  margin-top: ${(props) => props.mt || 'unset'};
`;

function Button({ children, ...props }) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
