import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const LI = styled.li``;

function ListItem({ children }) {
  return <LI role="listitem">{children}</LI>;
}

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
