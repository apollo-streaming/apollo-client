import React from 'react';
import * as PropTypes from 'prop-types';

import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import Flex from '../../design-system/Flex';
import Button from '../../design-system/Button';
import Icon from '../../design-system/Icon';
import { Text } from '../../design-system/Typography';

function SidebarControls({ onGoBack, username }) {
  return (
    <Flex justifyContent="space-between" mb={GRID.GET(8)}>
      <Flex alignItems="center">
        <Button transparent pointer onClick={onGoBack} padding="0px">
          <Icon name="back" />
        </Button>
        <Text
          ml={GRID.GET(2)}
          size="x_large"
          weight="bold"
          color={COLORS.DARK_900}
        >
          {username}
        </Text>
      </Flex>

      <Button transparent hoverable pointer padding={GRID.GET(1)} round>
        <Icon name="gear" />
      </Button>
    </Flex>
  );
}

SidebarControls.propTypes = {
  username: PropTypes.string,
  onGoBack: PropTypes.func,
};

export default SidebarControls;
