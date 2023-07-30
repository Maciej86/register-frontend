import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserState } from "../Login/sliceLoginUser";
import {
  BarLeft,
  BarRight,
  ButtonToggleNav,
  ButtonUser,
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
          <BsArrowBarRight />
        </ButtonToggleNav>
      </BarLeft>
      <BarRight>
        <ButtonUser>
          <span>{userName?.name}</span>
          <PiUserThin />
        </ButtonUser>
      </BarRight>
    </Wrapper>
  );
};
