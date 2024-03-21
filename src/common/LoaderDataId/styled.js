import styled from "styled-components";

export const ConteinerLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotExsist = styled.p`
  margin: 0;
  padding: 15px 7px;
  background: ${({ theme }) => theme.color.danger};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  color: ${({ theme }) => theme.color.danger_dark};
  font-size: 17px;
  font-weight: 600;
  text-align: center;
`;
