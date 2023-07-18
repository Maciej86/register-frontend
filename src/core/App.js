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
  console.log(tokenUser);

  if (tokenSessionStorage === "") {
    return <PanelLogin />;
  }

  if(tokenSessionStorage !== "") {
    dispatch(fetchLoginUserToken(tokenSessionStorage));
    if(tokenUser === undefined) {
      return <PanelLogin />;
    }
  }

  return <h1>Tutaj aplikacja</h1>;
};

library.add(fas);
