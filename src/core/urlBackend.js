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
  FETCH_USER_ORGANIZATION: `${url}/userorganization`,
  ADD_ORGANIZATION: `${url}/addorganization`,
  ALL_ORGANIZATION: `${url}/allorganization`,
};
