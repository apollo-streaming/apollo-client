import styled from 'styled-components';

export const Thumbnail = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 1000vw;
  margin-bottom: 16px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;
