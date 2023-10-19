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

const userRole = styled.span`
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.size.border_radius};
  font-weight: 600;
  font-size: 13px;
`;

export const UserDeveloper = styled(userRole)`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary_color};
`;

export const UserAdmin = styled(userRole)`
  background: ${({ theme }) => theme.color.danger};
  color: ${({ theme }) => theme.color.danger_dark};
`;

export const UserUser = styled(userRole)`
  background: ${({ theme }) => theme.color.primary_color};
  color: ${({ theme }) => theme.color.light};
`;

export const ConteinerTable = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
`;

export const TrHead = styled.tr`
  background: ${({ theme }) => theme.color.primary_color};
`;

export const Th = styled.th`
  padding: 10px 20px 10px 10px;
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
  min-width: 100px;
  padding: 10px 20px 10px 10px;
`;

export const ColumnCenter = styled(Column)`
  text-align: center;
`;

export const ColumnLp = styled(ColumnCenter)`
  min-width: 50px;
`;

export const Column80 = styled(Column)`
  width: 80%;
`;
