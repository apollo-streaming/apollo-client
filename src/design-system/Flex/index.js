import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex: ${(props) => props.flex || 'unset'};
  flex-direction: ${(props) => props.flexDirection || 'unset'};
  justify-content: ${(props) => props.justifyContent || 'unset'};
  align-items: ${(props) => props.alignItems || 'unset'};
  width: ${(props) => props.width || 'unset'};
`;

function Flex({ children, ...props }) {
  return <FlexWrapper {...props}>{children}</FlexWrapper>;
}

Flex.propTypes = {
  children: PropTypes.node,
};

export default Flex;
