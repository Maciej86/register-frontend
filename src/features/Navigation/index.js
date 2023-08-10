import { useSelector } from "react-redux";
import { selectToggleNavState } from "../Bar/sliceBar";
import { Logo, LogoName, MainNav } from "./styled";
import { AiFillDatabase } from "react-icons/ai";

export const Navigation = () => {
  const toggleNav = useSelector(selectToggleNavState);
  return (
    <MainNav $toggleNav={toggleNav}>
      <Logo>
        <AiFillDatabase />
        <LogoName>REGISTER</LogoName>
      </Logo>
    </MainNav>
  );
};
