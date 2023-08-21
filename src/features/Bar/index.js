import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoleUser } from "../../core/hooks/useRoleUser";
import {
  fetchLoginUserOut,
  selectUserState,
  selectloadingOut,
} from "../Login/sliceLoginUser";
import {
  selectToggleNavState,
  setToggleMobileNav,
  setToggleNav,
} from "./sliceBar";
import { Loader } from "../../common/Loader";
import {
  BarLeft,
  BarRight,
  ButtonToggleNav,
  ButtonUser,
  DataUser,
  PanelUser,
  Email,
  PanelUserHeader,
  Initials,
  PanelUserList,
  ListLink,
  Name,
  UserName,
  UserRole,
  Conteiner,
  ListButton,
  TextLink,
  LoginOut,
  ButtonToggleMobileNav,
} from "./styled";
import { NAVIGATION } from "../../core/InfoText";
import { BsArrowBarRight } from "react-icons/bs";
import { PiUserThin } from "react-icons/pi";
import { CiSettings, CiLogout } from "react-icons/ci";

export const Bar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserState);
  const loadingOut = useSelector(selectloadingOut);
  const toggleNav = useSelector(selectToggleNavState);
  const [visible, setVisible] = useState(false);
  const { userRole } = useRoleUser(user?.role);

  const userInitials = () => {
    const name = user?.name.slice(0, 1).toUpperCase();
    const lastName = user?.last_name.slice(0, 1).toUpperCase();
    const initials = name + lastName;
    return initials.toString();
  };

  const loginOut = () => {
    sessionStorage.removeItem("token_user");
    dispatch(fetchLoginUserOut(user?.id));
  };

  return (
    <Conteiner>
      <BarLeft>
        <ButtonToggleNav
          onClick={() => dispatch(setToggleNav())}
          $toggleNav={toggleNav}
        >
          <BsArrowBarRight size={"25px"} />
        </ButtonToggleNav>
        <ButtonToggleMobileNav onClick={() => dispatch(setToggleMobileNav())}>
          <BsArrowBarRight size={"25px"} />
        </ButtonToggleMobileNav>
      </BarLeft>
      <BarRight>
        <ButtonUser
          onClick={() => setVisible((visible) => !visible)}
          $visible={visible}
        >
          <DataUser>
            <UserName>{user?.name}</UserName>
            <UserRole>{userRole}</UserRole>
          </DataUser>
          <PiUserThin size={"30px"} />
        </ButtonUser>
        <PanelUser
          onMouseLeave={() => setVisible(() => false)}
          $visible={visible}
        >
          <PanelUserHeader>
            <div>
              <Initials>{userInitials()}</Initials>
            </div>
            <div>
              <Name>
                {user?.name} {user?.last_name}
              </Name>
              <Email>{user?.email}</Email>
            </div>
          </PanelUserHeader>
          <PanelUserList>
            <li>
              <ListLink to={NAVIGATION.NAV_LINK_SETINGS}>
                <CiSettings size={"21px"} />
                <TextLink>{NAVIGATION.NAV_SETINGS}</TextLink>
              </ListLink>
            </li>
            <li onClick={() => setVisible((visible) => !visible)}>
              <LoginOut>
                {loadingOut ? (
                  <Loader size="26px" border="4px" margin="12px auto" />
                ) : (
                  <ListButton onClick={loginOut}>
                    <CiLogout size={"21px"} />
                    <TextLink>{NAVIGATION.NAV_LOGIN_OUT}</TextLink>
                  </ListButton>
                )}
              </LoginOut>
            </li>
          </PanelUserList>
        </PanelUser>
      </BarRight>
    </Conteiner>
  );
};
