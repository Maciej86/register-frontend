import {
  UserAdmin,
  UserDeveloper,
  UserUser,
} from "../../common/styledUserRole";

export const useRoleUser = () => {
  const roleDefinitions = [
    { db: 0, name: "Deweloper" },
    { db: 1, name: "Super Admin" },
    { db: 2, name: "Administrator" },
    { db: 3, name: "Użytkownik" },
  ];

  const userRole = (role, color) => {
    let userRoleName = "";

    switch (role) {
      case "0":
        userRoleName = color ? (
          <UserDeveloper>{roleDefinitions[parseInt(role)].name}</UserDeveloper>
        ) : (
          roleDefinitions[parseInt(role)].name
        );
        break;
      case "1":
        userRoleName = color ? (
          <UserAdmin>{roleDefinitions[parseInt(role)].name}</UserAdmin>
        ) : (
          roleDefinitions[parseInt(role)].name
        );
        break;
      case "2":
        userRoleName = color ? (
          <UserAdmin>{roleDefinitions[parseInt(role)].name}</UserAdmin>
        ) : (
          roleDefinitions[parseInt(role)].name
        );
        break;
      case "3":
        userRoleName = color ? (
          <UserUser>{roleDefinitions[parseInt(role)].name}</UserUser>
        ) : (
          roleDefinitions[parseInt(role)].name
        );
        break;
      default:
        userRoleName = color ? (
          <UserUser>
            {roleDefinitions[roleDefinitions.length - 1].name}
          </UserUser>
        ) : (
          roleDefinitions[roleDefinitions.length - 1].name
        );
    }

    return userRoleName;
  };

  return { roleDefinitions, userRole };
};
