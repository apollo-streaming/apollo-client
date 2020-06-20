import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import GRID from '../design-system/GRID';
import Player from '../containers/Player';

const Container = styled.section`
  margin-top: ${({ noPadding }) => (noPadding ? '0px' : GRID.GET(18))};
  padding: ${({ noPadding }) =>
    noPadding ? '0' : `0 ${GRID.GET(7)} ${GRID.GET(2)} ${GRID.GET(10)}`};
  /* Adicionar dinamicidade para caso a sidebar estiver fechada */
  width: calc(100% - 464px);
  max-height: ${({ noPadding }) =>
    noPadding ? '100vh' : `calc(100vh - ${GRID.GET(18)})`};
  overflow-y: ${({ noPadding }) => (noPadding ? 'hidden' : 'scroll')};

  &::-webkit-scrollbar {
    width: 0px;
  }

  & > :nth-child(2) {
    margin-top: ${GRID.GET(6)};
  }

  & > :not(:first-child):not(:nth-child(2)) {
    margin-top: ${GRID.GET(5)};
  }
`;

function Base({ noPadding = false, children }) {
  return (
    <>
      <Container {...{ noPadding }}>{children}</Container>
      <Player />
    </>
  );
}

Base.propTypes = {
  noPadding: PropTypes.bool,
  children: PropTypes.node,
};

export default Base;
