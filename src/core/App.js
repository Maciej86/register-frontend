import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { PanelLogin } from "../features/Login";
import { getDataSessionStorage } from "../store/User/saveSessionStorage";
import {
  fetchLoginUserToken,
  selectStatusTokenUser,
  selectTokenSessionUserState,
  selectUserNotExist,
} from "../store/User/sliceUser";
import { selectToggleNavState } from "../features/Bar/sliceBar";
import { Bar } from "../features/Bar";
import { LoadingToken } from "../features/Login/LoadingToken";
import { Navigation } from "../features/Navigation";
import { Content, Main } from "./styles/GlobalStyle";
import { Confirm } from "../features/Confirm";
import {
  selectLoadingOrganization,
  selectLoadingTokenOrganization,
} from "../store/Organization/sliceOrganization";

export const App = () => {
  const dispatch = useDispatch();
  const tokenUser = useSelector(selectTokenSessionUserState);
  const loadingTokenUser = useSelector(selectStatusTokenUser);
  const loadingTokenOrganization = useSelector(selectLoadingTokenOrganization);
  const loadingOrganization = useSelector(selectLoadingOrganization);
  const userExist = useSelector(selectUserNotExist);
  const toggleNav = useSelector(selectToggleNavState);
  const tokenSessionStorage = getDataSessionStorage("token_user");

  useEffect(() => {
    if (tokenSessionStorage !== "" && tokenUser === undefined) {
      dispatch(fetchLoginUserToken(tokenSessionStorage));
    }
  }, [dispatch, tokenUser, tokenSessionStorage]);

  if (loadingTokenUser || loadingTokenOrganization) {
    return <LoadingToken />;
  }

  if (userExist || loadingOrganization || tokenSessionStorage === "") {
    return <PanelLogin />;
  }

  return (
    <>
      <Navigation />
      <Main $toggleNav={toggleNav}>
        <Bar />
        <Content>
          <Outlet />
        </Content>
      </Main>
      <Confirm />
    </>
  );
};
