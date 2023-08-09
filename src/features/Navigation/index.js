import { useSelector } from "react-redux";
import { selectToggleNavState } from "../Bar/sliceBar";
import { MainNav } from "./styled";

export const Navigation = () => {
  const toggleNav = useSelector(selectToggleNavState);
  return <MainNav $toggleNav={toggleNav}>Nawigacja</MainNav>;
};
