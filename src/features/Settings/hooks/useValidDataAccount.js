import { useRef } from "react";
import { useDispatch } from "react-redux";
import { resetUserState } from "../../../store/User/sliceUser";
import { useCheckEmail } from "../../../core/hooks/useCheckEmail";
import { useCheckEmptyInput } from "../../../core/hooks/useCheckEmptyInput";

export const useValidDataAccount = (currentEmail) => {
  const dispatch = useDispatch();
  const { checkEmptyInput, dataUser } = useCheckEmptyInput();
  const {
    checkEmail,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
  } = useCheckEmail();
  const dataUserValue = useRef([]);

  const changedDataUser = (event) => {
    event.preventDefault();
    dispatch(resetUserState());

    if (checkEmptyInput(dataUserValue.current)) {
      return;
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
