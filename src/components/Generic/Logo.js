import React from 'react';

import Flex from '../../design-system/Flex';
import Icon from '../../design-system/Icon';
import Link from '../../design-system/Link';
import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';

function Logo() {
  return (
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
  );
}

export default Logo;
