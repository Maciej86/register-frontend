import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectUserState } from "../../../store/User/sliceUser";
import { useCheckPassword } from "../../../core/hooks/useChceckPassword";

export const useValidPasswordAccount = () => {
  const userData = useSelector(selectUserState);
  const passwordUserValue = useRef([]);
  const { checkPassword, dataInput, errorPasswords } = useCheckPassword();

  const changedPassword = (event) => {
    event.preventDefault();
    checkPassword(passwordUserValue.current, userData?.id);
  };

  return {
    changedPassword,
    passwordUserValue,
    errorPasswords,
    dataInput,
  };
};
