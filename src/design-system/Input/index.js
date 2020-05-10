import React from 'react';
import styled from 'styled-components';

import COLORS from '../COLORS';

const InputWrapper = styled.input`
  border-radius: ${(props) => (props.rounded ? '1000vw' : '8px')};
  background-color: white;
  color: ${COLORS.DARK_900};
  font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
  font-size: ${(props) => props.fontSize || '14px'};
  padding: ${(props) => props.padding || '8px 12px'};
  width: ${(props) => props.width || 'unset'};
`;

function Input(props) {
  return <InputWrapper {...props} />;
}

export default Input;