import React from 'react';
import { Text } from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import Input from '../../design-system/Input';
import Button from '../../design-system/Button';
import Flex from '../../design-system/Flex';
import Link from '../../design-system/Link';

function Form() {
  return (
    <form>
      <Text
        color={COLORS.DARK_900}
        weight="bold"
        size="x_large"
        mt={GRID.GET(13)}
        mb={GRID.GET(13)}
      >
        Entre com seus dados{' '}
        <Text
          color={COLORS.YELLOW_300}
          weight="bold"
          size="x_large"
          display="inline"
        >
          :)
        </Text>
      </Text>
      <Input placeholder="E-mail ou nome de usuário" width="100%" icon="user" />
      <Input
        mt={GRID.GET(2)}
        mb={GRID.GET(3)}
        placeholder="Senha"
        width="100%"
        icon="lock"
      />
      <Button primary width="100%">
        <Text color={COLORS.DARK_900} weight="bold">
          Entrar
        </Text>
      </Button>
      <Flex direction="column" justifyContent="center">
        <Text
          textAlign="center"
          size="small"
          color={COLORS.DARK_900}
          weight="light"
          mt={GRID.GET(6)}
          mb={GRID.GET(1)}
        >
          Ainda não possui uma conta?
        </Text>
        <Link
          to="/signup"
          label="Criar conta"
          labelProperties={{ color: COLORS.YELLOW_300, weight: 'bold' }}
          flexProperties={{ justifyContent: 'center' }}
        />
        {/* <Text
          textAlign="center"
          size="small"
          color={COLORS.DARK_900}
          weight="light"
          mt={GRID.GET(4)}
          mb={GRID.GET(4)}
        >
          OU
        </Text> */}
      </Flex>
    </form>
  );
}

export default Form;
