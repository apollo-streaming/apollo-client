import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import GRID from '../GRID';
import { Text } from '../Typography';
import Flex from '../Flex';
import Icon from '../Icon';

const ToggleContainer = styled.div`
  cursor: pointer;

  & > ${Icon} {
    rotate: ${({ isOpen }) => (isOpen ? '0deg' : '180deg')};
    transition: all 0.25s ease;
  }
`;

function Toggle({ label, labelProperties = {}, open = false, children }) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <ToggleContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <Flex justifyContent="space-between" mb={GRID.GET(5)}>
        <Text {...labelProperties}>{label}</Text>
        <Icon name="up-arrow" />
      </Flex>
      {children}
    </ToggleContainer>
  );
}

Toggle.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line
  labelProperties: PropTypes.object,
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default Toggle;
