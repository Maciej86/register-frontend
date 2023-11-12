import styled from "styled-components";

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
  min-width: 100px;
  padding: 10px 20px 10px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary_light_color};
`;

export const ThLeft = styled(Th)`
  text-align: left;
`;

export const ThLp = styled(Th)`
  min-width: 50px;
`;

export const Th80 = styled(ThLeft)`
  width: 80%;
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
  padding: 10px 20px 10px 10px;
`;

export const ColumnCenter = styled(Column)`
  text-align: center;
`;

export const EmptyTable = styled.span`
  display: inline-block;
  margin-top: 1cqi;
  padding: 10px 20px;
  background: ${({ theme }) => theme.color.warning};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  color: ${({ theme }) => theme.color.warning_dark};
  font-weight: 500;
`;