import styled from "styled-components";

export const Conteiner = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.color.primary_dark_color};
  border-radius: ${({ theme }) => theme.size.tile_radius};
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.colorElements.tile_shadow};
`;

export const Header = styled.div`
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 23px;
`;

export const SubTitle = styled.p`
  margin: 0;
  line-height: 0.5;
`;

export const Body = styled.div`
  margin-top: 30px;
`;
