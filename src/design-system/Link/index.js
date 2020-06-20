import React from 'react';
import * as PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { Text } from '../Typography';
import Flex from '../Flex';
import Icon from '../Icon';

function Link({
  label,
  labelProperties = { size: 'large', weight: 'bold' },
  flexProperties,
  to,
  icon = false,
  children,
}) {
  return (
    <>
      {children ? (
        <RouterLink to={to}>{children}</RouterLink>
      ) : (
        <Flex>
          <RouterLink to={to} style={{ width: '100%' }}>
            <Flex
              {...{ justifyContent: 'space-between', ...flexProperties }}
              alignItems="center"
            >
              <Text {...labelProperties}>{label}</Text>
              {icon && <Icon name="right-arrow" />}
            </Flex>
          </RouterLink>
        </Flex>
      )}
    </>
  );
}

Link.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line
  labelProperties: PropTypes.object,
  // eslint-disable-next-line
  flexProperties: PropTypes.object,
  to: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  icon: PropTypes.bool,
  children: PropTypes.node,
};

export default Link;
