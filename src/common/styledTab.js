import styled from "styled-components";

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
