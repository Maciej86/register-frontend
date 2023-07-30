import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PanelLogin } from "../features/Login";
import { getDataSessionStorage } from "./saveSessionStorage";
import {
  fetchLoginUserToken,
  selectTokenSessionUserState,
} from "../features/Login/sliceLoginUser";
import { Bar } from "../features/Bar";

export const App = () => {
  const dispatch = useDispatch();
  const tokenUser = useSelector(selectTokenSessionUserState);
  const tokenSessionStorage = getDataSessionStorage("token_user");

  useEffect(() => {
    if (tokenSessionStorage !== "") {
      dispatch(fetchLoginUserToken(tokenSessionStorage));
    }
  }, [dispatch, tokenSessionStorage]);

  if (tokenSessionStorage === "") {
    return <PanelLogin />;
  }

  if (tokenUser === undefined) {
    return <PanelLogin />;
  }

  return <Bar />;
};
