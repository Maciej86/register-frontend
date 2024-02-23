import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchPasswordExsist,
  selecPasswordExsist,
} from "../../store/User/sliceUser";
import { useCheckEmptyInput } from "./useCheckEmptyInput";
import { addConfirm } from "../../features/Confirm/sliceConfirm";
import { USERSETTINGS } from "../InfoText";

export const useCheckPassword = () => {
  const dispatch = useDispatch();
  const currentPasswordExsist = useSelector(selecPasswordExsist);
  const { checkEmptyInput, dataInput } = useCheckEmptyInput();
  const differentPasswords = useRef(false);

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
    const oldPassword = valueInput
      .find((input) => input.id === "oldpassword")
      .value.trim();
    const newPassword = valueInput
      .find((input) => input.id === "newpassword")
      .value.trim();
    const confirmPassword = valueInput
      .find((input) => input.id === "newpasswordconfirm")
      .value.trim();

    differentPasswords.current = false;

    if (checkEmptyInput(valueInput)) {
      return;
    }

    if (newPassword.length < 6) {
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

    if (newPassword !== confirmPassword) {
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

    if (idUser !== "") {
      dispatch(
        fetchPasswordExsist({
          idUser: idUser,
          currentPassword: oldPassword,
        })
      );
    }
  };

  return { checkPassword, dataInput, differentPasswords };
};
