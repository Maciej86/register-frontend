import styled from "styled-components";

export const Conteiner = styled.div`
  position: absolute;
  bottom: 0%;
  padding: 20px;
  z-index: 100;
`;

export const Modal = styled.div`
  width: 211px;
  margin: 15px 0;
  background: ${({ theme, $type }) =>
    $type ? theme.color.success : theme.color.danger};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  box-shadow: 0 0 10px 3px
    ${({ theme, $type }) =>
      $type ? theme.color.success_dark : theme.color.danger_dark};
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme, $type }) =>
    $type ? theme.color.success_dark : theme.color.danger_dark};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  padding: 10px 20px;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 3px 0 6px 0;
  padding-bottom: 6px;
  border-bottom: 1px solid
    ${({ theme, $type }) =>
      $type ? theme.color.success_dark : theme.color.danger_dark};
  font-size: 18px;
  color: ${({ theme, $type }) =>
    $type ? theme.color.success_dark : theme.color.danger_dark};
`;
