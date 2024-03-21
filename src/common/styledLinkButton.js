import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  getColorButtoHovernOnValue,
  getColorButtonOnValue,
} from "./styledCommon";

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
