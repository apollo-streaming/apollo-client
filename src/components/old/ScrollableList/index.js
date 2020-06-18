import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Flex from '../../design-system/Flex';

const ScrollableListWrapper = styled(Flex)`
  & > * {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

function ScrollableList({ children }) {
  return (
    <ScrollableListWrapper alignItems="flex-start">
      {children}
    </ScrollableListWrapper>
  );
}

ScrollableList.propTypes = {
  children: PropTypes.node,
};

export default ScrollableList;
