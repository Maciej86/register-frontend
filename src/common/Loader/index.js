import { Spin } from "./styled";

export const Loader = ({
  size = "30px",
  border = "4px",
  margin = "25px auto 0 auto",
}) => {
  return <Spin size={size} border={border} margin={margin}></Spin>;
};
