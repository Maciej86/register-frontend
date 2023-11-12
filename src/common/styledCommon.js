export const getColorButtonOnValue = (theme, action) => {
  switch (action) {
    case "confirm":
      return theme.color.info;
    case "cancel":
      return theme.color.primary_color;
    case "warning":
      return theme.color.warning;
    case "delete":
      return theme.color.danger;
    default:
      return theme.color.info;
  }
};

export const getColorButtoHovernOnValue = (theme, action) => {
  switch (action) {
    case "confirm":
      return theme.color.info_dark;
    case "cancel":
      return theme.color.dark;
    case "warning":
      return theme.color.warning_dark;
    case "delete":
      return theme.color.danger_dark;
    default:
      return theme.color.info_dark;
  }
};
