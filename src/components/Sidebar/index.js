import React from 'react';
import * as PropTypes from 'prop-types';

import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import Button from '../../design-system/Button';
import Flex from '../../design-system/Flex';
import Icon from '../../design-system/Icon';
import { Text } from '../../design-system/Typography';

import { SidebarContainer } from './styles';

function Sidebar({ username, onClose }) {
  return (
    <SidebarContainer>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Button transparent pointer onClick={onClose}>
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
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  username: PropTypes.string,
  onClose: PropTypes.func,
};

export default Sidebar;
