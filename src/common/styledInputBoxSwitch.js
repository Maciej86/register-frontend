import styled from "styled-components";

export const LabelBoxSwitch = styled.label`
  display: inline-block;
  width: 45px;
  background-color: ${({ theme }) => theme.color.primary_color};
  padding: 2px;
  border: 2px solid
    ${({ theme, $isChecked }) =>
      $isChecked ? theme.color.success_dark : theme.color.primary_light_color};
  border-radius: 20px;
  box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.dark} inset;
  cursor: pointer;
`;

export const InputBoxSwitch = styled.input`
  display: none;
`;

export const SpanBoxSwitch = styled.span`
  position: relative;
  display: block;
  left: ${({ $isChecked }) => ($isChecked ? 22 : 0)}px;
  width: 15px;
  height: 15px;
  background-color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.color.success : theme.color.primary_light_color};
  border-radius: 50%;
  transition: left 0.3s;
  box-shadow: 0 0 7px
    ${({ theme, $isChecked }) =>
      $isChecked ? theme.color.success : "transparent"};
`;
