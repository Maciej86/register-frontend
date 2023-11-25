import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEmailExsist,
  fetchEditUser,
  resetUserState,
  selectEditAccount,
  selectEmailExsist,
} from "../../../store/User/sliceUser";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { USERSETTINGS } from "../../../core/InfoText";

export const useEditAccount = (userData, themeValueData) => {
  const dispatch = useDispatch();
  const emailExsist = useSelector(selectEmailExsist);
  const confirmEditUser = useSelector(selectEditAccount);
  const [dataUserEmpty, setDataUserEmpty] = useState([]);
  const dataUserValue = useRef([]);
  const incorrectEmail = useRef(false);
  const checkEmail = useRef(false);

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
      changedValueUser();
      checkEmail.current = false;
      dispatch(resetUserState());
    }
  }, [emailExsist]);

  useEffect(() => {
    if (confirmEditUser) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETTINGS.CONFIRM_EDIT_ACCOUNT,
        })
      );
      dispatch(resetUserState());
    }
  }, [confirmEditUser]);

  const changedDataUser = (event) => {
    event.preventDefault();

    setDataUserEmpty([]);
    incorrectEmail.current = false;

    for (const inputValue of dataUserValue.current) {
      let inputValueTrim = inputValue.value.trim();
      setDataUserEmpty((dataUserEmpty) => [...dataUserEmpty, inputValueTrim]);
    }

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
    }

    if (userData?.email !== dataUserValue.current[2].value) {
      dispatch(fetchEmailExsist(dataUserValue.current[2].value.trim()));
      checkEmail.current = true;
      return;
    }
    changedValueUser();
  };

  const changedValueUser = () => {
    if (emailExsist === "notexsist" || emailExsist === "") {
      dispatch(
        fetchEditUser({
          id: userData?.id,
          name: dataUserValue.current[0].value.trim(),
          lastname: dataUserValue.current[1].value.trim(),
          email: dataUserValue.current[2].value.trim(),
          theme: themeValueData,
        })
      );
    }
  };

  return { changedDataUser, dataUserValue, dataUserEmpty, incorrectEmail };
};
