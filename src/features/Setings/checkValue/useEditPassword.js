import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditPassword,
  selectEditPassword,
  selectErrorServer,
} from "../../../common/User/sliceUser";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { USERSETINGS } from "../../../core/InfoText";

export const useEditPassword = (userData) => {
  const dispatch = useDispatch();
  const confirmNewPassword = useSelector(selectEditPassword);
  const errorServer = useSelector(selectErrorServer);
  const [passwordUserEmpty, setPasswordUserEmpty] = useState([]);
  const passwordUserValue = useRef([]);
  const differentPasswords = useRef(false);
  const oldPassword = useRef(false);

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
    changedPassword,
    passwordUserValue,
    passwordUserEmpty,
    differentPasswords,
    oldPassword,
  };
};
