import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FormArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: flex-end;
  gap: 20px;

  @media (max-width: 750px) {
    justify-content: start;
    margin-top: 20px;
  }
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

export const TextDelete = styled.p`
  margin: 20px 0 30px 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;
