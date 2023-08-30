import { forwardRef } from "react";
import { BoxInput, Input, Label } from "./styled";

export const InputText = forwardRef(
  (
    {
      id,
      label,
      type = "text",
      maxlength = 20,
      placeholder,
      value = "",
      disabled = "",
    },
    ref
  ) => {
    return (
      <BoxInput>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          type={type}
          maxLength={maxlength}
          placeholder={placeholder}
          ref={ref}
          defaultValue={value}
          disabled={disabled}
        />
      </BoxInput>
    );
  }
);
