import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ConteinerLoader = styled.div`
  display: flex;
  justify-content: end;
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

export const NotExsist = styled.p`
  margin: 0;
  padding: 7px;
  background: ${({ theme }) => theme.color.danger};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  color: ${({ theme }) => theme.color.danger_dark};
  font-weight: 600;
  text-align: center;
`;

export const ButtonTab = styled.button`
  min-width: 215px;
  padding: 10px 17px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.color.primary_color : theme.color.primary_light_color};
  border: none;
  border-radius: none;
  color: ${({ theme }) => theme.color.light};
  font-weight: 500;
  cursor: pointer;
  box-shadow: ${({ theme, $active }) =>
    $active ? "none " : "0px -17px 24px -18px " + theme.color.dark + " inset"};
  transition: background-color 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary_color};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.primary_dark_color};

    &:hover {
      background-color: ${({ theme, $active }) =>
        $active ? theme.color.primary_color : theme.color.primary_light_color};
    }
  }
`;
