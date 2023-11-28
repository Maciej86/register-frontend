import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import { USERSETTINGS } from "../../../../core/InfoText";
import {
  fetchEmailExsist,
  resetUserState,
  selectEmailExsist,
} from "../../../../store/User/sliceUser";
import { addConfirm } from "../../../Confirm/sliceConfirm";

export const useValidDataUser = () => {
  const dispatch = useDispatch();
  const emailExsist = useSelector(selectEmailExsist);
  const { roleDefinitions } = useRoleUser();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState(roleDefinitions[3].name);
  const [roleUserValueData, setRoleUserValueData] = useState(3);
  const [dataUser, setDataUser] = useState([]);
  const dataUserValue = useRef([]);
  const incorrectEmail = useRef(false);
  const differentPasswords = useRef(false);
  const checkEmail = useRef(false);

  useEffect(() => {
    dispatch(resetUserState());
  }, []);

  useEffect(() => {
    if (checkEmail.current) {
      if (emailExsist === "exsist") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETTINGS.CONFIRM_EMAIL_EXSIST,
          })
        );
        return;
      }
      checkEmail.current = false;
    }
  }, [emailExsist]);

  const checkDataUser = () => {
    incorrectEmail.current = false;
    differentPasswords.current = false;
    setDataUser([]);

    for (const inputValue of dataUserValue.current) {
      let inputValueTrim = inputValue.value.trim();
      setDataUser((dataUser) => [...dataUser, inputValueTrim]);
    }
    setDataUser((dataUser) => [...dataUser, roleUserValueData]);

    for (const checkEmptyInput of dataUserValue.current) {
      if (checkEmptyInput.value === "") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETTINGS.CONFIRM_EDIT_EMPTY_INPUT,
          })
        );
        return;
      }
    }

    const regexpEmail =
      /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi;

    if (!regexpEmail.test(dataUserValue.current[2].value.trim())) {
      incorrectEmail.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_ERROR_EMAIL,
        })
      );
      return;
    } else {
      dispatch(fetchEmailExsist(dataUserValue.current[2].value.trim()));
      checkEmail.current = true;
    }

    if (
      dataUserValue.current[3].value.trim() !==
      dataUserValue.current[4].value.trim()
    ) {
      differentPasswords.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_DIFFRENT_PASSWORD,
        })
      );
      return;
    }

    if (dataUserValue.current[3].value.trim().length < 6) {
      differentPasswords.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFRIM_LENGTH_PASSWORD,
        })
      );
      return;
    }
  };

  return {
    roleDefinitions,
    userRoleToggle,
    setUserRoleToggle,
    roleUserValue,
    setRoleUserValue,
    roleUserValueData,
    setRoleUserValueData,
    dataUser,
    dataUserValue,
    incorrectEmail,
    emailExsist,
    checkDataUser,
  };
};
