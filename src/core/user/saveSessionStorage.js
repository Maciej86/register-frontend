export const saveDataInSessionStorage = (
  sessionStorageKey,
  dataSessionStorage
) => sessionStorage.setItem(sessionStorageKey, dataSessionStorage);

export const getDataSessionStorage = (sessionStorageKey) =>
  sessionStorage.getItem(sessionStorageKey) || "";
