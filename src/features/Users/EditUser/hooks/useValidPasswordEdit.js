import { useRef } from "react";
import { useCheckPassword } from "../../../../core/hooks/useChceckPassword";

export const useValidPasswordEdit = () => {
  const { checkPassword, dataInput, errorPasswords } = useCheckPassword();
  const passwordUserValue = useRef([]);

  const checkPasswordUser = () => {
    checkPassword(passwordUserValue.current);
  };

  return {
    checkPasswordUser,
    passwordUserValue,
    errorPasswords,
    dataInput,
  };
};
