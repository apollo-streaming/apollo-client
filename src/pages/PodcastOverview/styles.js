import styled from 'styled-components';
import COLORS from '../../design-system/COLORS';

export const PodcastOverviewWrapper = styled.div`
  background-color: ${COLORS.DARK_900};
  min-height: 80vh;
  padding: 32px 60px 0px 60px;
`;

export const Image = styled.div`
  height: 240px;
  width: 240px;
  background-image: url(${({ src }) => src});
  background-position: center;
  border-radius: 1000vw;
`;
