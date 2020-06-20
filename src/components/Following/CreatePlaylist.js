import React from 'react';

import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import { H1, Text } from '../../design-system/Typography';
import Button from '../../design-system/Button';
import Flex from '../../design-system/Flex';

function CreatePlaylist() {
  return (
    <Flex direction="column">
      <H1 size="x_large" weight="bold" mb={GRID.GET(3)}>
        Minhas Playlists
      </H1>
      <Flex>
        <Button pointer primary>
          <Text weight="bold" size="small" color={COLORS.DARK_900}>
            Criar
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default CreatePlaylist;
