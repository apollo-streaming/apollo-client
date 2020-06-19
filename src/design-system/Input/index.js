import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

import COLORS from '../COLORS';
import GRID from '../GRID';
import Button from '../Button';
import Icon from '../Icon';
import Flex from '../Flex';

const StyledInput = styled.input`
  border-radius: ${GRID.GET(1)};
  background-color: ${({ bg }) => bg || COLORS.GRAY_100};
  color: ${COLORS.GRAY_500};
  padding: ${`${GRID.GET(2)} ${GRID.GET(3)}`};
  position: relative;
  width: ${({ width }) => width || 'unset'};
  font-size: ${GRID.GET(2)};

  &::placeholder {
    color: ${COLORS.GRAY_500};
  }
`;

const StyledInputWrapper = styled(Flex)`
  position: relative;
`;

const StyledInputButton = styled(Button)`
  position: absolute;
  right: ${GRID.GET(2)};
  top: 50%;
  transform: translateY(-50%);
`;

const Input = ({ icon, onIconClick, ...props }) => {
  return (
    <StyledInputWrapper>
      <StyledInput {...props} />
      {icon &&
        (onIconClick ? (
          <StyledInputButton transparent>
            <Icon name={icon} />
          </StyledInputButton>
        ) : (
          <StyledInputButton transparent>
            <Icon name={icon} />
          </StyledInputButton>
        ))}
    </StyledInputWrapper>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  onIconClick: PropTypes.func,
};

export default Input;
