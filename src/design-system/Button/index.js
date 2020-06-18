import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import COLORS from '../COLORS';
import GRID from '../GRID';

const generateButton = (
  bgColor,
  color,
  alternateHoverColor = null
) => styled.button`
  background-color: ${({ outline }) => (outline ? 'transparent' : bgColor)};
  color: ${({ color: colorProp }) => colorProp || color};
  border: ${({ outline }) => (outline ? `1px solid ${bgColor}` : 'none')};
  border-radius: ${({ borderRadius, round }) =>
    round ? '1000vw' : borderRadius || GRID.GET(1)};
  cursor: ${({ pointer }) => pointer && 'pointer'};
  transition: all 0.25s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ hoverable }) =>
      hoverable &&
      lighten(0.4, bgColor === 'transparent' ? alternateHoverColor : bgColor)};
  }

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

const PrimaryButton = generateButton(COLORS.YELLOW_300, COLORS.DARK_900);

const SecondaryButton = generateButton(COLORS.DARK_900, COLORS.YELLOW_300);

const TransparentButton = generateButton(
  'transparent',
  COLORS.DARK_900,
  COLORS.YELLOW_300
);

const buttonMap = {
  primary: (children, props) => (
    <PrimaryButton {...props}>{children}</PrimaryButton>
  ),
  secondary: (children, props) => (
    <SecondaryButton {...props}>{children}</SecondaryButton>
  ),
  transparent: (children, props) => (
    <TransparentButton {...props}>{children}</TransparentButton>
  ),
};

function Button({
  outline = false,
  primary = false,
  secondary = false,
  transparent = false,
  children,
  ...props
}) {
  const orderedEntries =
    Object.entries({
      primary,
      secondary,
      transparent,
    }).find((i) => i[1] === true) || [];

  const selectedType = orderedEntries[0] || 'primary';

  return buttonMap[selectedType](children, {
    ...props,
    outline,
  });
}

export default Button;
