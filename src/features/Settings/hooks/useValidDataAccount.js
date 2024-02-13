import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { resetUserState } from "../../../store/User/sliceUser";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { USERSETTINGS } from "../../../core/InfoText";
import { useCheckEmail } from "../../../core/hooks/useCheckEmail";

export const useValidDataAccount = (currentEmail) => {
  const dispatch = useDispatch();
  const {
    checkEmail,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
  } = useCheckEmail();
  const [dataUser, setDataUser] = useState([]);
  const dataUserValue = useRef([]);

  const changedDataUser = (event) => {
    event.preventDefault();
    dispatch(resetUserState());
    setDataUser([]);

    for (const inputValue of dataUserValue.current) {
      let inputValueTrim = inputValue.value.trim();
      setDataUser((dataUser) => [...dataUser, inputValueTrim]);
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

    checkEmail(dataUserValue.current[2].value.trim(), currentEmail);
  };

  return {
    changedDataUser,
    dataUser,
    dataUserValue,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
  };
};
