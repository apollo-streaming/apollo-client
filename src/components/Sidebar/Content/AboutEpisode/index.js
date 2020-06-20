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

function AboutEpisode({ about, commentaries, commentary, setCommentary }) {
  return (
    <Flex direction="column" height={`calc(100% - ${GRID.GET(13)})`}>
      <Flex direction="column">
        <Text weight="bold" size="large">
          Sobre
        </Text>
        <Text size="x_small" color={COLORS.DARK_500} mt={GRID.GET(1)}>
          {about}
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
            {commentaries.map(({ user, content, createdAt }) => (
              <ListItem key={createdAt}>
                <Card {...{ ...user, content, createdAt }} />
              </ListItem>
            ))}
          </List>
        </Flex>
        <Input
          icon="right-arrow-circle"
          bg={COLORS.CLEAR_100}
          placeholder="Insira um comentário"
          value={commentary}
          onChange={(e) => setCommentary(e.target.value)}
          width="100%"
        />
      </Flex>
    </Flex>
  );
}

AboutEpisode.propTypes = {
  about: PropTypes.string,
  // eslint-disable-next-line
  commentaries: PropTypes.array,
  commentary: PropTypes.string,
  setCommentary: PropTypes.func,
};

export default AboutEpisode;
