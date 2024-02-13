import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../features/Confirm/sliceConfirm";
import {
  fetchEmailExsist,
  resetUserState,
  selectEmailExsist,
} from "../../store/User/sliceUser";
import { USERSETTINGS } from "../InfoText";

export const useCheckEmail = () => {
  const dispatch = useDispatch();
  const emailExsist = useSelector(selectEmailExsist);
  const [emailErrorRegExp, setEmailErrorRegExp] = useState(false);
  const [emailNotCheckInDataBase, setEmailNotCheckInDataBase] = useState(false);

  useEffect(() => {
    dispatch(resetUserState());
  }, []);

  useEffect(() => {
    if (emailExsist) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_EMAIL_EXSIST,
        })
      );
    }
  }, [emailExsist]);

  const checkEmail = (inputEmail, currentEmail = "") => {
    setEmailNotCheckInDataBase(false);

    const regexpEmail =
      /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi;

    if (!regexpEmail.test(inputEmail)) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_ERROR_EMAIL,
        })
      );
      setEmailErrorRegExp(true);
      return;
    }

    if (currentEmail !== inputEmail) {
      dispatch(fetchEmailExsist(inputEmail));
    } else {
      setEmailNotCheckInDataBase(true);
    }
  };
  return {
    checkEmail,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
  };
};
