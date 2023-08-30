import { BoxButton } from "./styled";
export const Button = ({ text, icon = "", type = true, action = null }) => {
  return (
    <BoxButton type="button" $type={type} onClick={action}>
      {icon}
      {text}
    </BoxButton>
  );
};
