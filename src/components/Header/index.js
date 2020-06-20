import React from 'react';
import * as PropTypes from 'prop-types';

import COLORS from '../../design-system/COLORS';
import Flex from '../../design-system/Flex';
import Link from '../../design-system/Link';

import { HeaderContainer } from './styles';
import Logo from '../Generic/Logo';

function Header({ displayLogo }) {
  console.log({ displayLogo });
  return (
    <HeaderContainer>
      <Flex alignItems="center" justifyContent="space-between">
        {displayLogo && (
          <>
            <Logo />
            <Link
              to="/signin"
              label="Entrar"
              labelProperties={{
                color: COLORS.DARK_900,
                weight: 'semibold',
              }}
            />
          </>
        )}
      </Flex>
    </HeaderContainer>
  );
}

Header.propTypes = {
  displayLogo: PropTypes.bool,
};

export default Header;
