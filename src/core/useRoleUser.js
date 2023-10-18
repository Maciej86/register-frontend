export const useRoleUser = () => {
  const roleUser = ["Devwloper", "super Admin", "Administrator", "Użytkownik"];

  const userRole = (role) => {
    let userRoleName = "";

    switch (role) {
      case "0":
        userRoleName = roleUser[parseInt(role)];
        break;
      case "1":
        userRoleName = roleUser[parseInt(role)];
        break;
      case "2":
        userRoleName = roleUser[parseInt(role)];
        break;
      case "3":
        userRoleName = roleUser[parseInt(role)];
        break;
      default:
        userRoleName = roleUser[3];
    }

    return userRoleName;
  };

  return { userRole };
};
