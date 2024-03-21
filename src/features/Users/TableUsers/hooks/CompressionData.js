export const CompressionData = (usersData) => {
  let compressionUsersData = [];

  for (const user of usersData) {
    let findUser = compressionUsersData.find(({ id }) => id === user.id);

    if (findUser === undefined) {
      compressionUsersData = [
        ...compressionUsersData,
        {
          ...user,
          organizations:
            user.organization_id !== null
              ? [{ id: user.organization_id, name: user.organization_name }]
              : [],
        },
      ];
    } else {
      let findCurrentUserIndex = compressionUsersData.findIndex(
        ({ id }) => id === findUser.id
      );
      compressionUsersData[findCurrentUserIndex].organizations.push({
        id: user.organization_id,
        name: user.organization_name,
      });
    }
  }

  for (const item of compressionUsersData) {
    delete item.organization_id;
    delete item.organization_name;
  }

  return { compressionUsersData };
};
