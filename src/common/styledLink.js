import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkText = styled(Link)`
  color: ${({ theme }) => theme.color.warning};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
