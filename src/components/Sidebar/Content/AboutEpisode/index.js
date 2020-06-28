import React from 'react';
import * as PropTypes from 'prop-types';

import { Text } from '../../../../design-system/Typography';
import Input from '../../../../design-system/Input';
import List from '../../../../design-system/List';
import ListItem from '../../../../design-system/ListItem';
import Card from './Card';
import COLORS from '../../../../design-system/COLORS';
import Flex from '../../../../design-system/Flex';
import GRID from '../../../../design-system/GRID';

function AboutEpisode({
  description,
  commentaries = [],
  commentary,
  setCommentary,
  onAddCommentary,
}) {
  return (
    <Flex direction="column" height={`calc(100% - ${GRID.GET(13)})`}>
      <Flex direction="column">
        <Text weight="bold" size="large">
          Sobre
        </Text>
        <Text size="x_small" color={COLORS.DARK_500} mt={GRID.GET(1)}>
          {description}
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="space-between"
        height={`calc(100% - ${GRID.GET(8)})`}
      >
        <Flex direction="column" height="inherit">
          <Text weight="bold" size="large" mb={GRID.GET(3)} mt={GRID.GET(5)}>
            Comentários
          </Text>
          <List
            vertical
            spaceBetween={GRID.GET(5)}
            useSpacer
            spacerColor={COLORS.DARK_300}
            noScrollbar
            height="100%"
            mb={GRID.GET(1)}
          >
            {commentaries.map(({ user, text, createdAt }) => (
              <ListItem key={createdAt}>
                <Card {...{ ...user, text, createdAt }} />
              </ListItem>
            ))}
          </List>
        </Flex>
        <form onSubmit={onAddCommentary}>
          <Input
            icon="right-arrow-circle"
            bg={COLORS.CLEAR_100}
            placeholder="Insira um comentário"
            value={commentary}
            onChange={(e) => setCommentary(e.target.value)}
            width="100%"
          />
        </form>
      </Flex>
    </Flex>
  );
}

AboutEpisode.propTypes = {
  description: PropTypes.string,
  // eslint-disable-next-line
  commentaries: PropTypes.array,
  commentary: PropTypes.string,
  setCommentary: PropTypes.func,
  onAddCommentary: PropTypes.func,
};

export default AboutEpisode;
