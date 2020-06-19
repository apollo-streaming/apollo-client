import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import GRID from '../design-system/GRID';

const Container = styled.section`
  padding: ${`${GRID.GET(18)} ${GRID.GET(7)} ${GRID.GET(2)} ${GRID.GET(10)}`};
  /* Adicionar dinamicidade para caso a sidebar estiver fechada */
  width: calc(100% - 464px);

  & > :nth-child(2) {
    margin-top: ${GRID.GET(6)};
  }

  & > :not(:first-child):not(:nth-child(2)) {
    margin-top: ${GRID.GET(5)};
  }
`;

function Base({ children }) {
  return <Container>{children}</Container>;
}

Base.propTypes = {
  children: PropTypes.node,
};

export default Base;
