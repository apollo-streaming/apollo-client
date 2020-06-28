import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Flex from '../../../design-system/Flex';
import GRID from '../../../design-system/GRID';
import { Text } from '../../../design-system/Typography';
import List from '../../../design-system/List';
import ListItem from '../../../design-system/ListItem';
import Card from './Card';
import { useIsSearching } from '../../../store/modules/search/selector';

const EpisodeListContainer = styled(Flex)`
  position: absolute;
  top: ${({ searching }) => (searching ? GRID.GET(20) : GRID.GET(34))};
  left: 0;
  height: ${({ isPlaying }) =>
    isPlaying ? 'calc(100vh - 432px)' : 'calc(100vh - 320px)'};
  width: calc(100% - 464px);
  padding-top: ${GRID.GET(6)};
  padding-left: ${GRID.GET(10)};
  padding-right: ${GRID.GET(10)};
`;

function EpisodeList({ items, noLabel, isPlaying, height = '100%' }) {
  const searching = useIsSearching();

  return (
    <EpisodeListContainer
      isPlaying={isPlaying}
      searching={searching}
      direction="column"
    >
      {!noLabel && (
        <Text weight="bold" size="x_large" mb={GRID.GET(3)}>
          Episódios
        </Text>
      )}
      <List
        vertical
        spaceBetween={GRID.GET(4)}
        noScrollbar
        height={height}
        mb={GRID.GET(2)}
      >
        {items.map(({ image, title, description, onClick }) => (
          <ListItem key={title}>
            <Card {...{ image, title, description, onClick }} />
          </ListItem>
        ))}
      </List>
    </EpisodeListContainer>
  );
}

EpisodeList.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.array,
  noLabel: PropTypes.bool,
  isPlaying: PropTypes.bool,
  height: PropTypes.string,
};

export default EpisodeList;
