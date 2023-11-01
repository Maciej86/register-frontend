import { BoxButton } from "./styled";
export const Button = ({
  text = "",
  type = "button",
  icon = "",
  small = false,
  typeAction = "confirm",
  action = null,
  disabled = "",
}) => {
  return (
    <BoxButton
      type={type}
      $typeAction={typeAction}
      onClick={action}
      $small={small}
      disabled={disabled}
    >
      {icon}
      {text}
    </BoxButton>
  );
};
