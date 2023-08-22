import { BoxInput, Input, Label } from "./styled";

export const InputText = ({
  id,
  label,
  type = "text",
  maxlength = 20,
  placeholder,
  value = "",
  disabled = "",
}) => {
  return (
    <BoxInput>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        maxLength={maxlength}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
      />
    </BoxInput>
  );
};
