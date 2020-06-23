import React from 'react';
import { Text } from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import Input from '../../design-system/Input';
import Button from '../../design-system/Button';
import Flex from '../../design-system/Flex';
import Link from '../../design-system/Link';

function Form({ onSubmit }) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Text
        color={COLORS.DARK_900}
        weight="bold"
        size="x_large"
        mt={GRID.GET(13)}
        mb={GRID.GET(13)}
      >
        Insira os seus dados e crie a sua conta{' '}
        <Text
          color={COLORS.YELLOW_300}
          weight="bold"
          size="x_large"
          display="inline"
        >
          :)
        </Text>
      </Text>
      <Input name="email" placeholder="E-mail" width="100%" icon="mail" />
      <Flex mt={GRID.GET(2)} />
      <Input
        name="name"
        placeholder="Nome de usuário"
        width="100%"
        icon="user"
      />
      <Flex mt={GRID.GET(2)} />
      <Input
        name="password"
        type="password"
        placeholder="Senha"
        width="100%"
        icon="lock"
      />
      <Flex mb={GRID.GET(3)} />
      <Button primary width="100%">
        <Text color={COLORS.DARK_900} weight="bold">
          Criar conta
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
          Já possui uma conta?
        </Text>
        <Link
          to="/signin"
          label="Entrar"
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
