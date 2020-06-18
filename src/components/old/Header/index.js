import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import history from '../../services/history';

import Flex from '../../design-system/Flex';
import Input from '../../design-system/Input';
import { Text } from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';
import { HeaderWrapper } from './styles';

const defaultOptions = [
  {
    route: '/sign-in',
    label: 'Entrar',
  },
  {
    route: '/sign-up',
    label: 'Criar conta',
  },
];

const authenticatedOptions = [
  {
    route: '/playlists',
    label: 'Playlists',
  },
  {
    route: 'profile',
    label: 'Minha conta',
  },
];

function Header() {
  const [searchText, setSearchText] = useState();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const options = isAuthenticated ? authenticatedOptions : defaultOptions;

  const search = (text) => {
    setSearchText(text);

    if (text.trim().length > 2) {
      history.push(`/busca?q=${text}`);
    } else if (text.length === 0) {
      history.push('/');
    }
  };

  return (
    <HeaderWrapper justifyContent="space-between" alignItems="center">
      <Flex alignItems="center">
        <Text
          style={{
            cursor: 'pointer',
          }}
          color={COLORS.CLEAR_100}
          mr="16px"
          size="large"
          weight="bold"
          onClick={() => history.push('/')}
        >
          apollo
        </Text>
        <Input
          rounded
          type="text"
          placeholder="Faça uma busca"
          value={searchText}
          onChange={(e) => search(e.target.value)}
        />
      </Flex>

      <Flex>
        {options.map(({ route, label }) => (
          <Link to={route}>
            <Text color={COLORS.CLEAR_100} mr="16px">
              {label}
            </Text>
          </Link>
        ))}
      </Flex>
    </HeaderWrapper>
  );
}

export default Header;
