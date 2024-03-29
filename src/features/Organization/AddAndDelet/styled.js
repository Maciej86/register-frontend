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

export const TextDelete = styled.p`
  margin: 20px 0 30px 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;
