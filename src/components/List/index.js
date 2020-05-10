import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Flex from '../../design-system/Flex';
import COLORS from '../../design-system/COLORS';

const ListWrapper = styled(Flex)`
  & > * {
    &:not(:last-child) {
      border-bottom: 1px solid ${COLORS.CLEAR_300};
    }
  }
`;

function List({ children }) {
  return (
    <ListWrapper flexDirection="column" alignItems="flex-start">
      {children}
    </ListWrapper>
  );
}

List.propTypes = {
  children: PropTypes.node,
};

export default List;
