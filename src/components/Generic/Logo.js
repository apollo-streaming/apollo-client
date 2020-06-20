import React from 'react';
import * as PropTypes from 'prop-types';

import Flex from '../../design-system/Flex';
import Icon from '../../design-system/Icon';
import Link from '../../design-system/Link';
import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import { Text } from '../../design-system/Typography';

function Logo({ noAction = false, ...props }) {
  return (
    <Flex alignItems="center">
      <Icon name="logo" />
      {noAction ? (
        <Text
          color={COLORS.YELLOW_300}
          ml={GRID.GET(2)}
          size="x_large"
          weight="bold"
          pointer
          {...props}
        >
          Apollo
        </Text>
      ) : (
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
      )}
    </Flex>
  );
}

Logo.propTypes = {
  noAction: PropTypes.bool,
};

export default Logo;
