import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
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

export const TextDelete = styled.p`
  margin: 20px 0 30px 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;

export const TableAction = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;

export const LabelToggleSwitch = styled.label`
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

export const InputToggleSwitch = styled.input`
  display: none;
`;

export const SpanToggleSwitch = styled.span`
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
