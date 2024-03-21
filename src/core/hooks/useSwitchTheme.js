import { useSelector } from "react-redux";
import { selectUserState } from "@storeUser/sliceUser";
import { ThemeDefault, ThemeEbonyClay } from "@core/styles/theme";

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
