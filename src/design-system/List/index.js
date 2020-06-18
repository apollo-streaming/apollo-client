import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;

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

  & > * {
    margin-bottom: ${({ spaceBetween, useSpacer }) =>
      useSpacer ? `${spaceBetween.split('px')[0] / 2}px` : spaceBetween};

    &:not(:first-of-type) {
      padding-top: ${({ spaceBetween, useSpacer }) =>
        useSpacer ? `${spaceBetween.split('px')[0] / 2}px` : 'unset'};
    }
  }
`;

function List({ children, ...props }) {
  return (
    <ListWrapper role="list" {...props}>
      {children}
    </ListWrapper>
  );
}

List.propTypes = {
  children: PropTypes.node,
};
