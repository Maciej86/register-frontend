const url = "http://localhost:8080";

export const URL_USER = {
  LOGIN_USER: `${url}/login`,
  LOGIN_USER_TOKEN: `${url}/logintoken`,
  LOGIN_OUT_USER: `${url}/loginout`,
  EDIT_USER: `${url}/editaccount`,
  CHANGED_PASSWORD: `${url}/editpassword`,
  EMAIL_EXSIST: `${url}/emailexsist`,
};

export const URL_ORGANIZATION = {
  FETCH_ORGANIZATION: `${url}/organization`,
  FETCH_EDIT_NAME_ORGANIZATION: `${url}/editnameorganization`,
  FETCH_USER_ORGANIZATION: `${url}/userorganization`,
  FETCH_USER_IN_ORGANIZATION: `${url}/userinorganization`,
  FETCH_DELETE_USER_IN_ORGANIZATION: `${url}/deleteuserinorganization`,
  ADD_ORGANIZATION: `${url}/addorganization`,
  FETCH_ALL_ORGANIZATION: `${url}/allorganization`,
};
