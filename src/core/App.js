import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PanelLogin } from "../features/Login";
import { getDataSessionStorage } from "./saveSessionStorage";
import {
  fetchLoginUserToken,
  selectTokenSessionUserState,
} from "../features/Login/sliceLoginUser";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

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

  return <h1>Tutaj aplikacja</h1>;
};

library.add(fas);
