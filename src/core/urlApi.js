const url = "http://localhost:8080";

export const URL_USER = {
  LOGIN_USER: `${url}/login`,
  LOGIN_USER_TOKEN: `${url}/logintoken`,
  LOGIN_OUT_USER: `${url}/loginout`,
  EDIT_ACCOUNT: `${url}/editaccount`,
  CHANGED_PASSWORD: `${url}/editpassword`,
  EMAIL_EXSIST: `${url}/emailexsist`,
  PASSWORD_EXSIST: `${url}/passwordexsist`,
  ALL_USERS: `${url}/allusers`,
  ADD_USER: `${url}/adduser`,
  FETCH_DATA_USER: `${url}/fetchdatauser`,
  DELETE_USER: `${url}/deleteuser`,
};

export const URL_ORGANIZATION = {
  FETCH_ORGANIZATION: `${url}/organization`,
  FETCH_EDIT_NAME_ORGANIZATION: `${url}/editnameorganization`,
  FETCH_USER_ORGANIZATION: `${url}/userorganization`,
  FETCH_USERS_IN_ORGANIZATION: `${url}/usersinorganization`,
  FETCH_USERS_OUT_ORGANIZATION: `${url}/usersoutorganization`,
  FETCH_DELETE_USER_IN_ORGANIZATION: `${url}/deleteuserinorganization`,
  FETCH_ADD_USER_FOR_ORGANIZATION: `${url}/adduserorganization`,
  FETCH_EDIT_USER_ORGANIZATION: `${url}/edituserallorganization`,
  ADD_ORGANIZATION: `${url}/addorganization`,
  DELETE_ORGANIZATION: `${url}/deleteorganization`,
  FETCH_ALL_ORGANIZATION: `${url}/allorganization`,
};
