import { BoxButton } from "./styled";

export const Button = ({ text, type = true }) => {
  return (
    <BoxButton type="button" $type={type}>
      {text}
    </BoxButton>
  );
};
