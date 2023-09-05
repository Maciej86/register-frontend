import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditEmail,
  fetchEditPassword,
  fetchEditUser,
  selectEditAccount,
  selectEditPassword,
  selectEmailExsist,
  selectErrorServer,
} from "../../common/User/sliceUser";
import { addConfirm } from "../Confirm/sliceConfirm";
import { USERSETINGS } from "../../core/InfoText";

export const useCheckValue = (userData, themeValue) => {
  const dispatch = useDispatch();
  const confirmEditAccount = useSelector(selectEditAccount);
  const confirmNewPassword = useSelector(selectEditPassword);
  const errorServer = useSelector(selectErrorServer);
  const emailExsist = useSelector(selectEmailExsist);
  const [detaUserEmpty, setDataUserEmpty] = useState([]);
  const [passwordUserEmpty, setPasswordUserEmpty] = useState([]);
  const dataUserValue = useRef([]);
  const passwordUserValue = useRef([]);
  const incorrectEmail = useRef(false);
  const differentPasswords = useRef(false);
  const oldPassword = useRef(false);
  const checkEmail = useRef(false);

  useEffect(() => {
    if (errorServer) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: "Błąd połączenia z serwerem",
        })
      );
    }
  }, [errorServer]);

  useEffect(() => {
    if (confirmEditAccount) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETINGS.CONFIRM_EDIT_ACCOUNT,
        })
      );
    }
  }, [confirmEditAccount]);

  useEffect(() => {
    if (checkEmail.current) {
      if (emailExsist === "exsist") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETINGS.CONFIRM_EMAIL_EXSIST,
          })
        );
        return;
      }
      changedAccountUser();
      checkEmail.current = false;
    }
  }, [emailExsist]);

  useEffect(() => {
    if (confirmNewPassword === "ok") {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETINGS.CONFIRM_EDIT_PASSWORD,
        })
      );
    } else if (confirmNewPassword === "error") {
      oldPassword.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETINGS.CONFIRM_OLD_PASSWORD_ERROR,
        })
      );
    }
  }, [confirmNewPassword]);

  const changedDataUser = () => {
    setDataUserEmpty([]);
    incorrectEmail.current = false;

    for (const inputValue of dataUserValue.current) {
      let inputValueTrim = inputValue.value.trim();
      setDataUserEmpty((detaUserEmpty) => [...detaUserEmpty, inputValueTrim]);
    }

    for (const checkEmptyInput of dataUserValue.current) {
      if (checkEmptyInput.value === "") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETINGS.CONFIRMT_EDIT_EMPTY_INPUT,
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
          text: USERSETINGS.CONFIRM_ERROR_EMAIL,
        })
      );
      return;
    }

    if (userData?.email !== dataUserValue.current[2].value) {
      dispatch(fetchEditEmail(dataUserValue.current[2].value.trim()));
      checkEmail.current = true;
      return;
    }
    changedAccountUser();
  };

  const changedAccountUser = () => {
    if (emailExsist === "notexsist" || emailExsist === "") {
      dispatch(
        fetchEditUser({
          id: userData?.id,
          name: dataUserValue.current[0].value.trim(),
          lastname: dataUserValue.current[1].value.trim(),
          email: dataUserValue.current[2].value.trim(),
          theme: themeValue,
        })
      );
    }
  };

  const changedPassword = () => {
    oldPassword.current = false;
    differentPasswords.current = false;

    setPasswordUserEmpty(() => []);
    for (const inputValue of passwordUserValue.current) {
      let inputValueTrim = inputValue.value.trim();
      setPasswordUserEmpty((passwordUserEmpty) => [
        ...passwordUserEmpty,
        inputValueTrim,
      ]);
    }

    for (const checkEmptyInput of passwordUserValue.current) {
      if (checkEmptyInput.value === "") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETINGS.CONFIRMT_EDIT_EMPTY_INPUT,
          })
        );
        return;
      }
    }

    if (
      passwordUserValue.current[1].value.trim() !==
      passwordUserValue.current[2].value.trim()
    ) {
      differentPasswords.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETINGS.CONFIRM_DIFFRENT_PASSWORD,
        })
      );
      return;
    }

    if (passwordUserValue.current[1].value.trim().length < 6) {
      differentPasswords.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETINGS.CONFRIM_LENGTH_PASSWORD,
        })
      );
      return;
    }

    dispatch(
      fetchEditPassword({
        id: userData?.id,
        oldpassword: passwordUserValue.current[0].value.trim(),
        newpassword: passwordUserValue.current[1].value.trim(),
      })
    );
  };

  return {
    dataUserValue,
    passwordUserValue,
    detaUserEmpty,
    passwordUserEmpty,
    differentPasswords,
    incorrectEmail,
    changedDataUser,
    changedPassword,
    oldPassword,
  };
};
