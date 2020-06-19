import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import GRID from '../GRID';
import { Text } from '../Typography';
import Flex from '../Flex';
import Icon from '../Icon';

const ToggleContainer = styled.div`
  & > div:first-of-type {
    & > * {
      cursor: pointer;
    }

    & > img {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
      transition: all 0.4s ease;
    }
  }
`;

const Children = styled.div`
  /* @TODO: Adicionar animação ao height */
  /* transform: ${({ isOpen }) => (isOpen ? 'scaleY(0)' : 'scaleY(1)')};
  transition: transform 0.25s ease; */
`;

function Toggle({
  label,
  labelProperties = { size: 'large', weight: 'bold' },
  open = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <ToggleContainer isOpen={isOpen}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb={isOpen ? GRID.GET(5) : null}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text {...labelProperties}>{label}</Text>
        <Icon name="up-arrow" />
      </Flex>
      <Children isOpen={isOpen}>{isOpen && children}</Children>
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
