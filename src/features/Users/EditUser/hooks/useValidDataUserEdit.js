import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetUserState,
  selectEmailExsist,
} from "../../../../store/User/sliceUser";
import { useCheckEmail } from "../../../../core/hooks/useCheckEmail";
import { useCheckEmptyInput } from "../../../../core/hooks/useCheckEmptyInput";

export const useValidDataUserEdit = (currentEmail) => {
  const dispatch = useDispatch();
  const emailExsist = useSelector(selectEmailExsist);
  const { checkEmptyInput, dataUser } = useCheckEmptyInput();
  const { checkEmail, emailErrorRegExp, emailNotCheckInDataBase } =
    useCheckEmail();
  const dataUserValue = useRef([]);

  const checkDataUser = () => {
    dispatch(resetUserState());

    if (checkEmptyInput(dataUserValue.current)) {
      return;
    }
    checkEmail(dataUserValue.current[2].value.trim(), currentEmail);
  };

  return {
    dataUserValue,
    dataUser,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    emailExsist,
    checkDataUser,
  };
};
