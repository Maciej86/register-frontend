import { BoxButton } from "./styled";
export const Button = ({
  text,
  type = "button",
  icon = "",
  typeAction = true,
  action = null,
}) => {
  return (
    <BoxButton type={type} $typeAction={typeAction} onClick={action}>
      {icon}
      {text}
    </BoxButton>
  );
};
