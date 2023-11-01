import { UserAdmin, UserDeveloper, UserUser } from "../common/styledCommon";

export const useRoleUser = () => {
  const roleUser = ["Deweloper", "Super Admin", "Administrator", "Użytkownik"];

  const userRole = (role, color) => {
    let userRoleName = "";

    switch (role) {
      case "0":
        userRoleName = color ? (
          <UserDeveloper>{roleUser[parseInt(role)]}</UserDeveloper>
        ) : (
          roleUser[parseInt(role)]
        );
        break;
      case "1":
        userRoleName = color ? (
          <UserAdmin>{roleUser[parseInt(role)]}</UserAdmin>
        ) : (
          roleUser[parseInt(role)]
        );
        break;
      case "2":
        userRoleName = color ? (
          <UserAdmin>{roleUser[parseInt(role)]}</UserAdmin>
        ) : (
          roleUser[parseInt(role)]
        );
        break;
      case "3":
        userRoleName = color ? (
          <UserUser>{roleUser[parseInt(role)]}</UserUser>
        ) : (
          roleUser[parseInt(role)]
        );
        break;
      default:
        userRoleName = color ? (
          <UserUser>{roleUser[parseInt(role)]}</UserUser>
        ) : (
          roleUser[parseInt(role)]
        );
    }

    return userRoleName;
  };

  return { userRole };
};
