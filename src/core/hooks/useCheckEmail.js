import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import {
  fetchEmailExsist,
  resetUserState,
  selectEmailExsist,
} from "@storeUser/sliceUser";
import { USERSETTINGS } from "@core/InfoText";

export const useCheckEmail = () => {
  const dispatch = useDispatch();
  const emailExsist = useSelector(selectEmailExsist);
  const [emailErrorRegExp, setEmailErrorRegExp] = useState(false);
  const [emailNotCheckInDataBase, setEmailNotCheckInDataBase] = useState(false);
  const [movingAnotherComponent, setMovingAnotherComponent] = useState(false);

  useEffect(() => {
    dispatch(resetUserState());
  }, []);

  useEffect(() => {
    setMovingAnotherComponent(true);
    if (emailExsist && movingAnotherComponent) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_EMAIL_EXSIST,
        })
      );
    }
  }, [emailExsist]);

  const checkEmail = (valueEmail, currentEmail = "") => {
    setEmailNotCheckInDataBase(false);

    const regexpEmail =
      /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi;

    if (!regexpEmail.test(valueEmail)) {
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

    if (currentEmail !== valueEmail) {
      dispatch(fetchEmailExsist(valueEmail));
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
