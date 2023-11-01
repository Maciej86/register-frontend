import { useSelector } from "react-redux";
import { ThemeDefault, ThemeEbonyClay } from "./styles/theme";
import { selectUserState } from "../store/User/sliceUser";

export const useSwitchTheme = () => {
  const userThemeState = useSelector(selectUserState);
  let userTheme;

  switch (userThemeState?.theme) {
    case "ThemeDefault":
      userTheme = ThemeDefault;
      break;
    case "ThemeEbonyClay":
      userTheme = ThemeEbonyClay;
      break;
    default:
      userTheme = ThemeDefault;
  }

  return userTheme;
};
