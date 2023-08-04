import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserState } from "../Login/sliceLoginUser";
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
} from "./styled";
import { BsArrowBarRight } from "react-icons/bs";
import { PiUserThin } from "react-icons/pi";
import { CiSettings, CiLogout } from "react-icons/ci";

export const Bar = () => {
  const user = useSelector(selectUserState);
  const [toggleNav, setToggleNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const userInitials = () => {
    const name = user?.name.slice(0, 1).toUpperCase();
    const lastName = user?.last_name.slice(0, 1).toUpperCase();
    const initials = name + lastName;

    return initials;
  };

  const switchNav = () => {
    setToggleNav(!toggleNav);
  };

  const roleUser = (role) => {
    let userRole = "";

    switch (role) {
      case "0":
        userRole = "Developer";
        break;
      case "1":
        userRole = "Super Admin";
        break;
      case "2":
        userRole = "Administrator";
        break;
      case "3":
        userRole = "Użytkownik";
        break;
      default:
        userRole = "Użytkownik";
    }

    return userRole;
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
            <UserRole>{roleUser(user?.role)}</UserRole>
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
              <ListButton>
                <CiLogout size={"21px"} />
                <TextLink>Wyloguj się</TextLink>
              </ListButton>
            </li>
          </PanelUserList>
        </PanelUser>
      </BarRight>
    </Wrapper>
  );
};
