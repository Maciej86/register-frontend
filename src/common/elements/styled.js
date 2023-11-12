import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: ${({ $small }) => ($small ? "5px" : "10px")} 7px;
  background: ${({ theme }) => theme.color.dark};
  border: none;
  border-bottom: 2px solid
    ${({ theme, $empty }) => ($empty ? theme.color.danger : theme.color.info)};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  color: ${({ theme }) => theme.color.light};
  opacity: ${({ disabled }) => (disabled ? ".6" : "1")};
  transition: border-bottom-color 0.5s;

  &:hover,
  &:focus {
    outline: none;
    border-bottom-color: ${({ theme, disabled }) =>
      disabled ? theme.color.info : theme.color.success};
  }
`;

export const getColorButtonOnValue = (theme, action) => {
  switch (action) {
    case "confirm":
      return theme.color.info;
    case "cancel":
      return theme.color.primary_color;
    case "warning":
      return theme.color.warning;
    case "delete":
      return theme.color.danger;
    default:
      return theme.color.info;
  }
};

export const getColorButtoHovernOnValue = (theme, action) => {
  switch (action) {
    case "confirm":
      return theme.color.info_dark;
    case "cancel":
      return theme.color.dark;
    case "warning":
      return theme.color.warning_dark;
    case "delete":
      return theme.color.danger_dark;
    default:
      return theme.color.info_dark;
  }
};

export const LinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px ${({ $small }) => ($small ? "10px" : "27px")};
  background: ${({ theme, $typeAction }) =>
    getColorButtonOnValue(theme, $typeAction)};
  border: 2px solid
    ${({ theme, $typeAction }) => getColorButtonOnValue(theme, $typeAction)};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  font-weight: 500;
  color: ${({ theme, $typeAction }) =>
    $typeAction !== "cancel" ? theme.color.white : theme.color.info};
  text-decoration: none;
  box-shadow: 0 0 15px ${({ theme }) => theme.color.dark};
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: ${({ theme, $typeAction }) =>
      getColorButtoHovernOnValue(theme, $typeAction)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:disabled:hover {
    background: ${({ theme, $typeAction }) =>
      getColorButtonOnValue(theme, $typeAction)};
  }
`;
