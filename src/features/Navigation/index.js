import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleNavMobileState,
  selectToggleNavState,
  setToggleMobileNav,
} from "@storeBar/sliceBar";
import { NAVIGATION } from "@core/InfoText";
import {
  Autor,
  EmptyIcon,
  IconNav,
  ItemNav,
  LinkNav,
  LinkNavChild,
  LinkNavHasChild,
  ListNav,
  ListNavChild,
  Logo,
  LogoName,
  MainNav,
  MobileMask,
} from "./styled";
import { AiFillDatabase } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiFileLight, PiUsers } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { LiaCubesSolid } from "react-icons/lia";

export const Navigation = () => {
  const dispatch = useDispatch();
  const toggleNav = useSelector(selectToggleNavState);
  const toggleMobileNav = useSelector(selectToggleNavMobileState);
  const [openUsers, setOpenUsers] = useState(false);

  const closeListNavChild = () => {
    setOpenUsers(false);
  };

  return (
    <>
      <MainNav
        // onClick={() => dispatch(setToggleMobileNav())}
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
              <LinkNav
                to={NAVIGATION.NAV_LINK_DASHBOARD}
                onClick={() => {
                  dispatch(setToggleMobileNav());
                  closeListNavChild();
                }}
              >
                <IconNav>
                  <LuLayoutDashboard size={"18px"} />
                </IconNav>
                {NAVIGATION.NAV_DASHBOARD}
              </LinkNav>
            </ItemNav>
            <ItemNav>
              <LinkNav
                to={NAVIGATION.NAV_LINK_NOTES}
                onClick={() => {
                  dispatch(setToggleMobileNav());
                  closeListNavChild();
                }}
              >
                <IconNav>
                  <PiFileLight size={"21px"} />
                </IconNav>
                {NAVIGATION.NAV_NOTES}
              </LinkNav>
            </ItemNav>
            <ItemNav>
              <LinkNavHasChild
                as="button"
                onClick={() => {
                  closeListNavChild();
                  setOpenUsers((openUsers) => !openUsers);
                }}
              >
                <IconNav>
                  <PiUsers size={"20px"} />
                </IconNav>
                {NAVIGATION.NAV_USERS}
              </LinkNavHasChild>
              <ListNavChild $open={openUsers} $quantityItemNav={2}>
                <ItemNav>
                  <LinkNavChild
                    to={NAVIGATION.NAV_LINK_USERS}
                    onClick={() => dispatch(setToggleMobileNav())}
                  >
                    <EmptyIcon />
                    {NAVIGATION.NAV_USERS_CHILD}
                  </LinkNavChild>
                </ItemNav>
                <ItemNav>
                  <LinkNavChild
                    to={NAVIGATION.NAV_LINK_ADD_USERS}
                    onClick={() => dispatch(setToggleMobileNav())}
                  >
                    <EmptyIcon />
                    {NAVIGATION.NAV_ADD_USERS}
                  </LinkNavChild>
                </ItemNav>
              </ListNavChild>
            </ItemNav>
            <ItemNav>
              <LinkNav
                to={NAVIGATION.NAV_LINK_ORGANIZATION}
                onClick={() => {
                  dispatch(setToggleMobileNav());
                  closeListNavChild();
                }}
              >
                <IconNav>
                  <LiaCubesSolid size={"22px"} />
                </IconNav>
                {NAVIGATION.NAV_ORGANIZATION}
              </LinkNav>
            </ItemNav>
            <ItemNav>
              <LinkNav
                to={NAVIGATION.NAV_LINK_SETTINGS}
                onClick={() => {
                  dispatch(setToggleMobileNav());
                  closeListNavChild();
                }}
              >
                <IconNav>
                  <SlSettings size={"18px"} />
                </IconNav>
                {NAVIGATION.NAV_SETTINGS}
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
