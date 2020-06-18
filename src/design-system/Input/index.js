import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';
import GRID from '../GRID';
import COLORS from '../COLORS';

const StyledInput = styled.input`
  border-radius: ${GRID.GET(1)};
  background-color: ${COLORS.GRAY_100};
  color: ${COLORS.GRAY_300};
  padding: ${`${GRID.GET(2)} ${GRID.GET(3)}`};
  position: relative;

  & > ${Icon} {
    position: absolute;
    right: ${GRID.GET(2)};
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Input = ({ icon, onIconClick, ...props }) => {
  return (
    <StyledInput {...props}>
      {icon &&
        (onIconClick ? (
          <Button transparent onClick={onIconClick}>
            <Icon name={icon} />
          </Button>
        ) : (
          <Button transparent>
            <Icon name={icon} />
          </Button>
        ))}
    </StyledInput>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  onIconClick: PropTypes.func,
};

export default Input;
