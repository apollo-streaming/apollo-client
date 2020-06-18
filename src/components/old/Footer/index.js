import React from 'react';
import { Text } from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';
import { FooterWrapper } from './styles';

function Footer() {
  return (
    <FooterWrapper justifyContent="space-between" alignItems="center">
      <Text color={COLORS.CLEAR_100} mr="16px">
        © 2020 Apollo Streaming
      </Text>
    </FooterWrapper>
  );
}

export default Footer;
