import styled from 'styled-components';

import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';

export const SidebarContainer = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 464px;
  height: 100%;
  overflow-y: scroll;

  background-color: ${({ shouldRenderLogo }) =>
    shouldRenderLogo ? COLORS.CLEAR_100 : COLORS.GRAY_300};
  padding-top: ${({ shouldRenderLogo }) =>
    shouldRenderLogo ? GRID.GET(13) : GRID.GET(8)};
  padding-right: ${GRID.GET(6)};
  padding-bottom: ${GRID.GET(2)};
  padding-left: ${GRID.GET(6)};

  & > *:not(:first-child) {
    margin-bottom: ${({ shouldHavePb }) =>
      shouldHavePb ? GRID.GET(4) : '0px'};
  }
`;
