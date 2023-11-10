export const useCompressionData = (usersData) => {
  let compressionUsersData = [];

  for (const user of usersData) {
    let findUser = compressionUsersData.find(({ id }) => id === user.id);

    if (findUser === undefined) {
      compressionUsersData = [
        ...compressionUsersData,
        {
          ...user,
          organization_id: [user.organization_id],
          organization_name: [user.organization_name],
        },
      ];
    } else {
      let findCurrentUserIndex = compressionUsersData.findIndex(
        ({ id }) => id === findUser.id
      );
      compressionUsersData[findCurrentUserIndex].organization_id.push(
        user.organization_id
      );
      compressionUsersData[findCurrentUserIndex].organization_name.push(
        user.organization_name
      );
    }
  }
  return { compressionUsersData };
};
