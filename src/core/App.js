import { useDispatch, useSelector } from "react-redux";
import { PanelLogin } from "../features/Login";
import {
  fetchLoginUserToken,
  selectTokenSessionUserState,
} from "../features/Login/sliceLoginUser";
import { getDataSessionStorage } from "./saveSessionStorage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();
  const tokenUser = useSelector(selectTokenSessionUserState);
  const tokenSessionStorage = getDataSessionStorage("token_user");

  useEffect(() => {
    if(tokenSessionStorage !== "") {
      dispatch(fetchLoginUserToken(tokenSessionStorage));
    }
  },[dispatch, tokenSessionStorage]);

  if (tokenSessionStorage === "") {
    return <PanelLogin />;
  }

  if(tokenUser === undefined) {
    return <PanelLogin />;
  }

  return <h1>Tutaj aplikacja</h1>;
};

library.add(fas);
