import React from 'react';
import { Link } from 'react-router-dom';
import { SignInWrapper } from './styles';
import Card from '../../design-system/Card';
import Input from '../../design-system/Input';
import * as Typography from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';
import Flex from '../../design-system/Flex';
import Button from '../../design-system/Button';

function SignIn() {
  return (
    <SignInWrapper justifyContent="center" alignItems="center">
      <Flex>
        <Card
          flexDirection="column"
          justifyContent="space-between"
          height="240px"
          noBorder
          withShadow
        >
          <Typography.Text
            textAlign="center"
            color={COLORS.CLEAR_100}
            mb="16px"
            size="large"
            weight="bold"
          >
            Login
          </Typography.Text>
          <Flex flexDirection="column">
            <Input fontSize="16px" placeholder="E-mail" mb="8px" />
            <Input fontSize="16px" placeholder="Senha" type="password" />
          </Flex>
          <Link to="/dashboard/episodes">
            <Button
              bgColor={COLORS.CLEAR_100}
              color={COLORS.DARK_900}
              style={{ width: '100%' }}
            >
              Entrar
            </Button>
          </Link>
        </Card>
      </Flex>
    </SignInWrapper>
  );
}

export default SignIn;
