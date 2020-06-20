import React from 'react';
import styled from 'styled-components';
import { lighten, rgba } from 'polished';

import COLORS from '../COLORS';
import GRID from '../GRID';

const generateButton = (
  bgColor,
  color,
  displayAlternateHoverColor = false,
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
      (displayAlternateHoverColor
        ? alternateHoverColor
        : lighten(
            0.4,
            bgColor === 'transparent' ? alternateHoverColor : bgColor
          ))};
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
`;

const PrimaryButton = generateButton(COLORS.YELLOW_300, COLORS.DARK_900);

const SecondaryButton = generateButton(
  rgba(COLORS.DARK_900, 0.5),
  rgba(COLORS.YELLOW_300, 1),
  true,
  COLORS.DARK_900
);

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
    <SecondaryButton {...{ ...props, hoverable: true }}>
      {children}
    </SecondaryButton>
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
  padding = `${GRID.GET(1.5)} ${GRID.GET(3)}`,
  ...props
}) {
  const orderedEntries =
    Object.entries({
      primary,
      secondary,
      transparent,
    }).find((i) => i[1] === true) || [];

  const selectedType = orderedEntries[0] || 'primary';

  let paddingObj = { pl: padding, pr: padding, pb: padding, pt: padding };

  if (padding.includes(' ')) {
    const [py, px] = padding.split(' ');
    paddingObj = {
      pl: px,
      pr: px,
      pt: py,
      pb: py,
    };
  }

  return buttonMap[selectedType](children, {
    ...props,
    ...paddingObj,
    outline,
  });
}

export default Button;
