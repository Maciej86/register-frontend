import styled from "styled-components";

export const TileArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Half = styled.div`
  width: ${({ $size }) => ($size ? "50%" : "100%")};

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  margin-top: 30px;
`;

export const TileConteiner = styled.div`
  padding: 14px 14px 20px 14px;
  background: ${({ theme }) => theme.color.primary_dark_color};
  border-radius: ${({ theme }) => theme.size.tile_radius};
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.colorElements.tile_shadow};
`;

export const TileTitle = styled.h2`
  margin: 0;
  font-size: 23px;
`;

export const TileSubTitle = styled.p`
  margin: 0;
  line-height: 1;
`;
