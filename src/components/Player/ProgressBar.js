import styled from 'styled-components';
import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';

const ProgressBar = styled.div`
  background-color: ${COLORS.DARK_300};
  height: ${GRID.GET(0.5)};
  border-radius: 1000vw;
  position: relative;
  width: ${({ width }) => width || GRID.GET(50)};

  &::after {
    content: '';
    height: ${GRID.GET(0.5)};
    width: ${({ progress }) => `${progress}%`};
    background-color: ${COLORS.YELLOW_300};
    position: absolute;
    left: 0;
    top: 0;
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

export default ProgressBar;
