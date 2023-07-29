import { useSelector } from "react-redux";
import { ThemeDefault, ThemeEbonyClay } from "./styles/theme";
import { selectThemeUserState } from "../features/Login/sliceLoginUser";

export const useSwitchTheme = () => {
  const userThemeState = useSelector(selectThemeUserState);
  let userTheme;

  switch (userThemeState) {
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
