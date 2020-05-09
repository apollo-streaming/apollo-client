import React, { useState } from 'react';
import Flex from '../../design-system/Flex';
import Input from '../../design-system/Input';
import { Text } from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';
import { HeaderWrapper } from './styles';

function Header() {
  const [searchText, setSearchText] = useState();
  const search = (text) => {
    setSearchText(text);

    if (text.length > 3) {
      console.log(text);
    }
  };

  return (
    <HeaderWrapper justifyContent="space-between" alignItems="center">
      <Input
        rounded
        type="text"
        placeholder="Faça uma busca"
        value={searchText}
        onChange={(e) => search(e.target.value)}
      />

      <Flex>
        <Text color={COLORS.CLEAR_100} mr="16px">
          Playlists
        </Text>
        <Text color={COLORS.CLEAR_100}>Minha conta</Text>
      </Flex>
    </HeaderWrapper>
  );
}

export default Header;
