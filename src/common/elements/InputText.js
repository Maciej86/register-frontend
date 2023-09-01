import { forwardRef } from "react";
import { BoxInput, Input, Label } from "./styled";

export const InputText = forwardRef(
  (
    {
      id,
      label,
      type = "text",
      maxlength = "20",
      minlength = "0",
      placeholder,
      empty = false,
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
          minLength={minlength}
          placeholder={placeholder}
          ref={ref}
          $empty={empty}
          defaultValue={value}
          disabled={disabled}
        />
      </BoxInput>
    );
  }
);
