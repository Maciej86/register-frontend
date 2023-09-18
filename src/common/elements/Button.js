import { BoxButton } from "./styled";
export const Button = ({
  text = "",
  type = "button",
  icon = "",
  small = false,
  typeAction = "confirm",
  action = null,
}) => {
  return (
    <BoxButton
      type={type}
      $typeAction={typeAction}
      onClick={action}
      $small={small}
    >
      {icon}
      {text}
    </BoxButton>
  );
};
