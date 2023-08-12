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
import { NAVIGATION } from "../../core/InfoText";
import { AiFillDatabase } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";

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
            <LinkNav to={NAVIGATION.NAV_LINK_DASHBOARD}>
              <LuLayoutDashboard size={"18px"} />
              {NAVIGATION.NAV_DASHBOARD}
            </LinkNav>
            <LinkNav to={NAVIGATION.NAV_LINK_SETINGS}>
              <CiSettings size={"21px"} />
              {NAVIGATION.NAV_SETINGS}
            </LinkNav>
          </ItemNav>
        </ListNav>
      </div>
      <Autor>Maciej Rościszewski</Autor>
    </MainNav>
  );
};
