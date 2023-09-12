import styled from "styled-components";

export const TileArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Half = styled.div`
  width: 50%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;
