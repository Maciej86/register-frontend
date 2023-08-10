import { useSelector } from "react-redux";
import { selectToggleNavState } from "../Bar/sliceBar";
import {
  Autor,
  ItemNav,
  LinkNav,
  ListNav,
  Logo,
  LogoName,
  MainNav,
} from "./styled";
import { AiFillDatabase } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";

export const Navigation = () => {
  const toggleNav = useSelector(selectToggleNavState);
  return (
    <MainNav $toggleNav={toggleNav}>
      <div>
        <Logo>
          <AiFillDatabase />
          <LogoName>REGISTER</LogoName>
        </Logo>
        <ListNav>
          <ItemNav>
            <LinkNav href="">
              <CiSettings size={"21px"} />
              Ustawienia
            </LinkNav>
          </ItemNav>
        </ListNav>
      </div>
      <Autor>Maciej Rościszewski</Autor>
    </MainNav>
  );
};
