import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchPasswordExsist,
  resetUserState,
  selecPasswordExsist,
} from "../../store/User/sliceUser";
import { addConfirm } from "../../store/Confirm/sliceConfirm";
import { useCheckEmptyInput } from "./useCheckEmptyInput";
import { USERSETTINGS } from "../InfoText";

export const useCheckPassword = () => {
  const dispatch = useDispatch();
  const currentPasswordExsist = useSelector(selecPasswordExsist);
  const { checkEmptyInput, dataInput } = useCheckEmptyInput();
  const errorPasswords = useRef(false);

  useEffect(() => {
    dispatch(resetUserState());
  }, []);

  useEffect(() => {
    if (currentPasswordExsist) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_OLD_PASSWORD_ERROR,
        })
      );
    }
  }, [currentPasswordExsist]);

  const checkPassword = (valueInput, idUser = "") => {
    errorPasswords.current = false;
    let oldPassword = "";

    if (idUser !== "") {
      oldPassword = valueInput
        .find((input) => input.id === "oldpassword")
        .value.trim();
    }

    const newPassword = valueInput
      .find((input) => input.id === "newpassword")
      .value.trim();
    const confirmPassword = valueInput
      .find((input) => input.id === "newpasswordconfirm")
      .value.trim();

    if (checkEmptyInput(valueInput)) {
      return;
    }

    if (newPassword.length < 6) {
      errorPasswords.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFRIM_LENGTH_PASSWORD,
        })
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      errorPasswords.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_DIFFRENT_PASSWORD,
        })
      );
      return;
    }

    if (idUser !== "") {
      dispatch(
        fetchPasswordExsist({
          idUser: idUser,
          currentPassword: oldPassword,
        })
      );
    }
  };

  return { checkPassword, dataInput, errorPasswords };
};
