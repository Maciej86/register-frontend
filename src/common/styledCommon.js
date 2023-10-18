import styled from "styled-components";

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

export const ConteinerTable = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TrHead = styled.tr`
  background: ${({ theme }) => theme.color.primary_color};
`;

export const Th = styled.th`
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary_light_color};
`;

export const ThLeft = styled(Th)`
  text-align: left;
`;

export const TrBody = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.color.primary_light_color};
  transition: background 0.4s;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.color.primary_light_color};
  }
`;

export const Column = styled.td`
  padding: 10px;
`;

export const ColumnCenter = styled(Column)`
  text-align: center;
`;

export const ColumnLp = styled(ColumnCenter)`
  min-width: 50px;
`;

export const ColumnName = styled(Column)`
  width: 80%;
  min-width: 100px;
`;

export const ColumnCountUser = styled(ColumnCenter)`
  min-width: 140px;
`;

export const ColumnAction = styled(ColumnCenter)`
  min-width: 80px;
`;
