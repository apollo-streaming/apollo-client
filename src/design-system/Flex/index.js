import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex: ${({ flex }) => flex || 'unset'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'unset'};
  align-items: ${({ alignItems }) => alignItems || 'unset'};

  padding-left: ${({ paddingLeft, pl, padding }) =>
    paddingLeft || pl || padding || 'unset'};
  padding-right: ${({ paddingRight, pr, padding }) =>
    paddingRight || pr || padding || 'unset'};
  padding-top: ${({ paddingTop, pt, padding }) =>
    paddingTop || pt || padding || 'unset'};
  padding-bottom: ${({ paddingBottom, pb, padding }) =>
    paddingBottom || pb || padding || 'unset'};

  margin-left: ${({ marginLeft, pl, margin }) =>
    marginLeft || pl || margin || 'unset'};
  margin-right: ${({ marginRight, pr, margin }) =>
    marginRight || pr || margin || 'unset'};
  margin-top: ${({ marginTop, pt, margin }) =>
    marginTop || pt || margin || 'unset'};
  margin-bottom: ${({ marginBottom, pb, margin }) =>
    marginBottom || pb || margin || 'unset'};
`;

function Flex({ children, ...props }) {
  return <FlexWrapper {...props}>{children}</FlexWrapper>;
}

Flex.propTypes = {
  children: PropTypes.node,
};

export default Flex;
