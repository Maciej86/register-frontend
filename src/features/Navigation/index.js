import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleNavMobileState,
  selectToggleNavState,
  setToggleMobileNav,
} from "../Bar/sliceBar";
import {
  Autor,
  ItemNav,
  LinkNav,
  ListNav,
  Logo,
  LogoName,
  MainNav,
  MobileMask,
} from "./styled";
import { NAVIGATION } from "../../core/InfoText";
import { AiFillDatabase } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiOrganizationChart } from "react-icons/ri";
import { PiUsersLight } from "react-icons/pi";

export const Navigation = () => {
  const dispatch = useDispatch();
  const toggleNav = useSelector(selectToggleNavState);
  const toggleMobileNav = useSelector(selectToggleNavMobileState);

  return (
    <>
      <MainNav
        onClick={() => dispatch(setToggleMobileNav())}
        $toggleNav={toggleNav}
        $toggleMobileNav={toggleMobileNav}
      >
        <div>
          <Logo>
            <AiFillDatabase />
            <LogoName>REGISTER</LogoName>
          </Logo>
          <ListNav>
            <ItemNav>
              <LinkNav to={NAVIGATION.NAV_LINK_DASHBOARD}>
                <LuLayoutDashboard size={"21px"} />
                {NAVIGATION.NAV_DASHBOARD}
              </LinkNav>
              <LinkNav to={NAVIGATION.NAV_LINK_USERS}>
                <PiUsersLight size={"21px"} />
                {NAVIGATION.NAV_USERS}
              </LinkNav>
              <LinkNav to={NAVIGATION.NAV_LINK_ORGANIZATION}>
                <RiOrganizationChart size={"21px"} />
                {NAVIGATION.NAV_ORGANIZATION}
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
      <MobileMask
        onClick={() => dispatch(setToggleMobileNav())}
        $toggleMobileNav={toggleMobileNav}
      ></MobileMask>
    </>
  );
};
