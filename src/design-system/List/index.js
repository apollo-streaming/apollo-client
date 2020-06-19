import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  height: ${({ height }) => height || 'unset'};
  overflow-y: ${({ height }) => (height ? 'scroll' : 'unset')};

  &::-webkit-scrollbar {
    width: ${({ noScrollbar }) => (noScrollbar ? '0px' : 'unset')};
  }

  padding-left: ${({ paddingLeft, pl, padding }) =>
    paddingLeft || pl || padding || 'unset'};
  padding-right: ${({ paddingRight, pr, padding }) =>
    paddingRight || pr || padding || 'unset'};
  padding-top: ${({ paddingTop, pt, padding }) =>
    paddingTop || pt || padding || 'unset'};
  padding-bottom: ${({ paddingBottom, pb, padding }) =>
    paddingBottom || pb || padding || 'unset'};

  margin-left: ${({ marginLeft, ml, margin }) =>
    marginLeft || ml || margin || 'unset'};
  margin-right: ${({ marginRight, mr, margin }) =>
    marginRight || mr || margin || 'unset'};
  margin-top: ${({ marginTop, mt, margin }) =>
    marginTop || mt || margin || 'unset'};
  margin-bottom: ${({ marginBottom, mb, margin }) =>
    marginBottom || mb || margin || 'unset'};

  & > * {
    margin-bottom: ${({ spaceBetween, useSpacer, vertical }) =>
      vertical &&
      (useSpacer ? `${spaceBetween.split('px')[0] / 2}px` : spaceBetween)};

    &:not(:first-of-type) {
      border-top: ${({ useSpacer, vertical, spacerColor }) =>
        useSpacer && vertical ? `1px solid ${spacerColor}` : 'unset'};
      margin-left: ${({ spaceBetween, horizontal }) =>
        horizontal ? spaceBetween : 'unset'};
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

export default List;
