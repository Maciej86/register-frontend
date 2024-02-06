import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../features/Confirm/sliceConfirm";
import {
  fetchEmailExsist,
  selectEmailExsist,
} from "../../store/User/sliceUser";
import { USERSETTINGS } from "../InfoText";

export const useCheckEmail = () => {
  const dispatch = useDispatch();
  const emailExsist = useSelector(selectEmailExsist);
  const emailExsistInDataBase = useRef(false);
  let errorRegexp = false;

  useEffect(() => {
    if (emailExsistInDataBase.current) {
      if (emailExsist === "exsist") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETTINGS.CONFIRM_EMAIL_EXSIST,
          })
        );
      }
      emailExsistInDataBase.current = false;
    }
  }, [emailExsist]);

  const checkEmail = (inputEmail, currentEmail = "") => {
    const regexpEmail =
      /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi;

    if (!regexpEmail.test(inputEmail)) {
      errorRegexp = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_ERROR_EMAIL,
        })
      );
    }

    if (currentEmail !== inputEmail) {
      dispatch(fetchEmailExsist(inputEmail));
      emailExsistInDataBase.current = true;
    }

    if (errorRegexp) {
      return true;
    }
  };

  return { checkEmail };
};
