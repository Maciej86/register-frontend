import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserState } from "../Login/sliceLoginUser";
import {
  BarLeft,
  BarRight,
  ButtonToggleNav,
  ButtonUser,
  NameRoleUser,
  UserName,
  UserRole,
  Wrapper,
} from "./styled";
import { BsArrowBarRight } from "react-icons/bs";
import { PiUserThin } from "react-icons/pi";

export const Bar = () => {
  const userName = useSelector(selectUserState);
  const [toggleNav, setToggleNav] = useState(false);
  const switchNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <Wrapper>
      <BarLeft>
        <ButtonToggleNav onClick={() => switchNav()} $toggleNav={toggleNav}>
          <BsArrowBarRight size={"25px"} />
        </ButtonToggleNav>
      </BarLeft>
      <BarRight>
        <ButtonUser>
          <NameRoleUser>
            <UserName>{userName?.name}</UserName>
            <UserRole>Developer</UserRole>
          </NameRoleUser>
          <PiUserThin size={"30px"} />
        </ButtonUser>
      </BarRight>
    </Wrapper>
  );
};
