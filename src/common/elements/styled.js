import styled from "styled-components";

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 10px 7px;
  background: ${({ theme }) => theme.color.dark};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.info};
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

export const Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SelectList = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 71px;
  width: 100%;
  background: ${({ theme }) => theme.color.primary_light_color};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  opacity: ${({ $isVisibilty }) => ($isVisibilty ? 1 : 0)};
  visibility: ${({ $isVisibilty }) => ($isVisibilty ? "visible" : "hidden")};
  box-shadow: 0 0 10px 2px ${({ theme }) => theme.color.dark};
  list-style: none;
  transition: opacity 0.4s, visibility 0.4s;
  z-index: 10;
`;

export const SelectItem = styled.li`
  border-top: 1px solid ${({ theme }) => theme.color.dark};
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.color.primary_light_color};
  border: none;
  text-decoration: none;
  text-align: left;
  color: ${({ theme }) => theme.color.light};
  transition: background 0.4s;

  &:hover {
    background: ${({ theme }) => theme.color.primary_color};
  }
  cursor: pointer;
`;
