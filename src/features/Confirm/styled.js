import styled from "styled-components";

export const Conteiner = styled.div`
  position: absolute;
  bottom: 0%;
  padding: 20px;
  z-index: 100;
`;

export const Modal = styled.div`
  max-width: 211px;
  margin: 15px 0;
  background: ${({ theme, $type }) =>
    $type ? theme.color.success : theme.color.danger};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  box-shadow: 0 0 10px 3px
    ${({ theme, $type }) =>
      $type ? theme.color.success_dark : theme.color.danger_dark};
  color: ${({ theme, $type }) =>
    $type ? theme.color.dark : theme.color.white};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  padding: 10px 20px;
`;
