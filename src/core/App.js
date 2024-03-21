import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getDataSessionStorage } from "@storeUser/saveSessionStorage";
import {
  fetchLoginUserToken,
  selectStatusTokenUser,
  selectTokenSessionUserState,
  selectUserNotExist,
} from "@storeUser/sliceUser";
import { selectToggleNavState } from "@storeBar/sliceBar";
import { selectLoadingTokenOrganization } from "@storeOrganization/sliceOrganization";
import { PanelLogin } from "@features/Login";
import { Bar } from "@features/Bar";
import { LoadingToken } from "@features/Login/LoadingToken";
import { Navigation } from "@features/Navigation";
import { Confirm } from "@features/Confirm";
import { Content, Main } from "./styles/GlobalStyle";

export const App = () => {
  const dispatch = useDispatch();
  const tokenUser = useSelector(selectTokenSessionUserState);
  const loadingTokenUser = useSelector(selectStatusTokenUser);
  const loadingTokenOrganization = useSelector(selectLoadingTokenOrganization);
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

  if (userExist || tokenSessionStorage === "") {
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
