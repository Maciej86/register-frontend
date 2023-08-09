import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PanelLogin } from "../features/Login";
import { getDataSessionStorage } from "./saveSessionStorage";
import {
  fetchLoginUserToken,
  selectStatusTokenUser,
  selectTokenSessionUserState,
  selectUserNotExist,
} from "../features/Login/sliceLoginUser";
import { selectToggleNavState } from "../features/Bar/sliceBar";
import { Bar } from "../features/Bar";
import { LoadingToken } from "../features/Login/LoadingToken";
import { Navigation } from "../features/Navigation";
import { ContentBar } from "./styles/GlobalStyle";

export const App = () => {
  const dispatch = useDispatch();
  const tokenUser = useSelector(selectTokenSessionUserState);
  const loadingTokenUser = useSelector(selectStatusTokenUser);
  const userExist = useSelector(selectUserNotExist);
  const toggleNav = useSelector(selectToggleNavState);
  const tokenSessionStorage = getDataSessionStorage("token_user");

  useEffect(() => {
    if (tokenSessionStorage !== "" && tokenUser === undefined) {
      dispatch(fetchLoginUserToken(tokenSessionStorage));
    }
  }, [dispatch, tokenUser, tokenSessionStorage]);

  if (loadingTokenUser) {
    return <LoadingToken />;
  }

  if (userExist || tokenSessionStorage === "") {
    return <PanelLogin />;
  }

  return (
    <>
      <Navigation />
      <ContentBar $toggleNav={toggleNav}>
        <Bar />
        <h1 style={{ padding: "10px 20px" }}>Zawartość aplikacji</h1>
      </ContentBar>
    </>
  );
};
