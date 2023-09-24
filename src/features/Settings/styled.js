import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FormArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin-bottom: 25px;

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
