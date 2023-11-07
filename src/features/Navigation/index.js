import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleNavMobileState,
  selectToggleNavState,
  setToggleMobileNav,
} from "../Bar/sliceBar";
import {
  Autor,
  IconNav,
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
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { LiaCubesSolid } from "react-icons/lia";

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
                <IconNav>
                  <LuLayoutDashboard size={"20px"} />
                </IconNav>
                {NAVIGATION.NAV_DASHBOARD}
              </LinkNav>
              <LinkNav to={NAVIGATION.NAV_LINK_USERS}>
                <IconNav>
                  <PiUsers size={"22px"} />
                </IconNav>
                {NAVIGATION.NAV_USERS}
              </LinkNav>
              <LinkNav to={NAVIGATION.NAV_LINK_ORGANIZATION}>
                <IconNav>
                  <LiaCubesSolid size={"24px"} />
                </IconNav>
                {NAVIGATION.NAV_ORGANIZATION}
              </LinkNav>
              <LinkNav to={NAVIGATION.NAV_LINK_SETINGS}>
                <IconNav>
                  <SlSettings size={"20px"} />
                </IconNav>
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
