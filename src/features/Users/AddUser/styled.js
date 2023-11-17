import styled from "styled-components";

export const FormBasicUser = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin-bottom: 45px;

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
