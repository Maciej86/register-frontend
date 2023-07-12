import { useDispatch, useSelector } from "react-redux";
import { PanelLogin } from "./features/Login";
import {
  fetchLoginUserToken,
  selectTokenExsist,
  selectTokenSessionUserState,
} from "./features/Login/sliceLoginUser";
import { getDataSessionStorage } from "./core/saveSessionStorage";

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
