import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
