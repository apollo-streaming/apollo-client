import React from 'react';

import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import Button from '../../design-system/Button';
import Flex from '../../design-system/Flex';
import Icon from '../../design-system/Icon';
import Link from '../../design-system/Link';

import { HeaderContainer } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Icon name="logo" />
          <Link
            to="/"
            label="Apollo"
            labelProperties={{
              color: COLORS.YELLOW_300,
              ml: GRID.GET(2),
              size: 'x_large',
              weight: 'bold',
            }}
          />
        </Flex>

        <Button hoverable transparent round pointer padding={GRID.GET(1)}>
          <Icon name="menu" />
        </Button>
      </Flex>
    </HeaderContainer>
  );
}

export default Header;
