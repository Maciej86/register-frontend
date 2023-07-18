import { useDispatch, useSelector } from "react-redux";
import { PanelLogin } from "../features/Login";
import {
  fetchLoginUserToken,
  selectTokenSessionUserState,
} from "../features/Login/sliceLoginUser";
import { getDataSessionStorage } from "./saveSessionStorage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const App = () => {
  const dispatch = useDispatch();
  const tokenUser = useSelector(selectTokenSessionUserState);
  const tokenSessionStorage = getDataSessionStorage("token_user");

  if (tokenSessionStorage === "") {
    return <PanelLogin />;
  }

  if (tokenUser === undefined) {
    dispatch(fetchLoginUserToken(tokenSessionStorage));
  }

  return <h1>Tutaj aplikacja</h1>;
};

library.add(fas);
