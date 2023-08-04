export const useRoleUser = (role) => {
  let userRole = "";

  switch (role) {
    case "0":
      userRole = "Developer";
      break;
    case "1":
      userRole = "Super Admin";
      break;
    case "2":
      userRole = "Administrator";
      break;
    case "3":
      userRole = "Użytkownik";
      break;
    default:
      userRole = "Użytkownik";
  }

  return userRole;
};
