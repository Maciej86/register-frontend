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
import { Bar } from "../features/Bar";
import { LoadingToken } from "../features/Login/LoadingToken";

export const App = () => {
  const dispatch = useDispatch();
  const tokenUser = useSelector(selectTokenSessionUserState);
  const loadingTokenUser = useSelector(selectStatusTokenUser);
  const userExist = useSelector(selectUserNotExist);
  const tokenSessionStorage = getDataSessionStorage("token_user");

  useEffect(() => {
    if (tokenSessionStorage !== "" && tokenUser === undefined) {
      dispatch(fetchLoginUserToken(tokenSessionStorage));
    }
  }, [dispatch, tokenSessionStorage]);

  if (loadingTokenUser) {
    return <LoadingToken />;
  }

  if (userExist || tokenSessionStorage === "") {
    return <PanelLogin />;
  }

  return <Bar />;
};
