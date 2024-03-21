import { forwardRef } from "react";
import { BoxInput } from "./styled";
import { Input, Label } from "../styledInput";

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
      small = false,
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
          $small={small}
          defaultValue={value}
          disabled={disabled}
        />
      </BoxInput>
    );
  }
);
