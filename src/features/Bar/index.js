import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoleUser } from "../../store/User/useRoleUser";
import {
  fetchLoginUserOut,
  selectUserState,
  selectStatusloadingOut,
} from "../../store/User/sliceUser";
import { selectUserOrganization } from "../../store/Organization/sliceOrganization";
import { useOrganization } from "../../store/Organization/useOrganization";
import { SelectButton, SelectItem } from "../../common/elements/styled";
import { Loader } from "../../common/Loader";
import {
  selectToggleNavState,
  setToggleMobileNav,
  setToggleNav,
} from "./sliceBar";
import {
  BarLeft,
  BarRight,
  ButtonToggleNav,
  Button,
  Data,
  PanelUser,
  Email,
  PanelUserHeader,
  Initials,
  PanelUserList,
  ListLink,
  Name,
  DataName,
  DataValue,
  Conteiner,
  ListButton,
  TextLink,
  LoginOut,
  ButtonToggleMobileNav,
  BarCenter,
  SelectBar,
  SelectListBar,
} from "./styled";
import { NAVIGATION } from "../../core/InfoText";
import { BsArrowBarRight } from "react-icons/bs";
import { PiUserThin } from "react-icons/pi";
import { CiSettings, CiLogout } from "react-icons/ci";

export const Bar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserState);
  const organization = useSelector(selectUserOrganization);
  const loadingOut = useSelector(selectStatusloadingOut);
  const toggleNav = useSelector(selectToggleNavState);
  const { NameMainOrganization } = useOrganization();
  const [visible, setVisible] = useState(false);
  const { userRole } = useRoleUser(user?.role);
  const [valueSelect, setValueSelect] = useState(
    NameMainOrganization(user?.main_organization)
  );
  const [selectVisibility, setSelectVisibility] = useState(false);

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

      <BarCenter>
        <SelectBar onMouseLeave={() => setSelectVisibility(() => false)}>
          <Button
            onClick={() =>
              setSelectVisibility((selectVisibility) => !selectVisibility)
            }
            $visible={selectVisibility}
          >
            {/* <PiUserThin size={"30px"} /> */}
            <Data>
              <DataValue>Organizacja</DataValue>
              <DataName>{valueSelect}</DataName>
            </Data>
          </Button>
          <SelectListBar $isVisibilty={selectVisibility}>
            {organization?.map((item, index) => (
              <SelectItem key={index}>
                <SelectButton
                  type="button"
                  onClick={() => setValueSelect(item.name_organization)}
                >
                  {item.name_organization}
                </SelectButton>
              </SelectItem>
            ))}
          </SelectListBar>
        </SelectBar>
      </BarCenter>

      <BarRight>
        <Button
          onClick={() => setVisible((visible) => !visible)}
          $visible={visible}
        >
          <Data>
            <DataName>{user?.name}</DataName>
            <DataValue>{userRole}</DataValue>
          </Data>
          <PiUserThin size={"30px"} />
        </Button>
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
            <li onClick={() => setVisible((visible) => !visible)}>
              <ListLink to={NAVIGATION.NAV_LINK_SETINGS}>
                <CiSettings size={"21px"} />
                <TextLink>{NAVIGATION.NAV_SETINGS}</TextLink>
              </ListLink>
            </li>
            <li>
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
