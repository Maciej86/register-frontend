import { LuSave } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { BoxButton } from "./styled";

export const Button = ({ text, type = true }) => {
  return (
    <BoxButton type="button" $type={type}>
      {type ? <LuSave size={"15px"} /> : <ImCancelCircle size={"15px"} />}
      {text}
    </BoxButton>
  );
};
