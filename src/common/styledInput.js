import styled from "styled-components";

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
