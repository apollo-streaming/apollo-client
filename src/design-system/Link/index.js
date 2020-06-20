import React from 'react';
import * as PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { Text } from '../Typography';
import Flex from '../Flex';
import Icon from '../Icon';

function Link({
  label,
  labelProperties = { size: 'large', weight: 'bold' },
  to,
  icon = false,
}) {
  return (
    <Flex>
      <RouterLink to={to} style={{ width: '100%' }}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text {...labelProperties}>{label}</Text>
          {icon && <Icon name="right-arrow" />}
        </Flex>
      </RouterLink>
    </Flex>
  );
}

Link.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line
  labelProperties: PropTypes.object,
  to: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  icon: PropTypes.bool,
};

export default Link;
