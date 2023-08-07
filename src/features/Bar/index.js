import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoleUser } from "../../core/hooks/useRoleUser";
import {
  fetchLoginUserOut,
  selectUserState,
  selectloadingOut,
} from "../Login/sliceLoginUser";
import {
  BarLeft,
  BarRight,
  ButtonToggleNav,
  ButtonUser,
  NameRoleUser,
  PanelUser,
  Email,
  PanelUserHeader,
  Initials,
  PanelUserList,
  ListLink,
  Name,
  UserName,
  UserRole,
  Wrapper,
  ListButton,
  TextLink,
  LoginOut,
} from "./styled";
import { BsArrowBarRight } from "react-icons/bs";
import { PiUserThin } from "react-icons/pi";
import { CiSettings, CiLogout } from "react-icons/ci";
import { Loader } from "../../common/Loader";

export const Bar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserState);
  const loadingOut = useSelector(selectloadingOut);
  const [toggleNav, setToggleNav] = useState(false);
  const [visible, setVisible] = useState(false);
  const { userRole } = useRoleUser(user?.role);

  const userInitials = () => {
    const name = user?.name.slice(0, 1).toUpperCase();
    const lastName = user?.last_name.slice(0, 1).toUpperCase();
    const initials = name + lastName;
    return initials.toString();
  };

  const switchNav = () => {
    setToggleNav(!toggleNav);
  };

  const loginOut = () => {
    sessionStorage.removeItem("token_user");
    dispatch(fetchLoginUserOut(user?.id));
  };

  return (
    <Wrapper>
      <BarLeft>
        <ButtonToggleNav onClick={() => switchNav()} $toggleNav={toggleNav}>
          <BsArrowBarRight size={"25px"} />
        </ButtonToggleNav>
      </BarLeft>
      <BarRight>
        <ButtonUser onClick={() => setVisible((visible) => !visible)}>
          <NameRoleUser>
            <UserName>{user?.name}</UserName>
            <UserRole>{userRole}</UserRole>
          </NameRoleUser>
          <PiUserThin size={"30px"} />
        </ButtonUser>
        <PanelUser $visible={visible}>
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
              <ListLink href="#">
                <CiSettings size={"21px"} />
                <TextLink>Ustawienia</TextLink>
              </ListLink>
            </li>
            <li>
              <LoginOut>
                {loadingOut ? (
                  <Loader size="26px" border="4px" margin="12px auto" />
                ) : (
                  <ListButton onClick={loginOut}>
                    <CiLogout size={"21px"} />
                    <TextLink>Wyloguj się</TextLink>
                  </ListButton>
                )}
              </LoginOut>
            </li>
          </PanelUserList>
        </PanelUser>
      </BarRight>
    </Wrapper>
  );
};
