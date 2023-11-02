import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditPassword,
  resetUserState,
  selectEditPassword,
} from "../../../store/User/sliceUser";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { USERSETTINGS } from "../../../core/InfoText";

export const useEditPassword = (userData) => {
  const dispatch = useDispatch();
  const confirmNewPassword = useSelector(selectEditPassword);
  const [passwordUserEmpty, setPasswordUserEmpty] = useState([]);
  const [oldPassword, setOldPassword] = useState(false);
  const passwordUserValue = useRef([]);
  const differentPasswords = useRef(false);

  useEffect(() => {
    if (confirmNewPassword === "ok") {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETTINGS.CONFIRM_EDIT_PASSWORD,
        })
      );
      dispatch(resetUserState());
    } else if (confirmNewPassword === "error") {
      setOldPassword(true);
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_OLD_PASSWORD_ERROR,
        })
      );
      dispatch(resetUserState());
    }
  }, [confirmNewPassword]);

  const changedPassword = () => {
    setOldPassword(false);
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
            text: USERSETTINGS.CONFIRM_EDIT_EMPTY_INPUT,
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
          text: USERSETTINGS.CONFIRM_DIFFRENT_PASSWORD,
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
          text: USERSETTINGS.CONFRIM_LENGTH_PASSWORD,
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
