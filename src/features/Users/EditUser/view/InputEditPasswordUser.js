import { useRef } from "react";
import { useCheckPassword } from "@coreHooks/useChceckPassword";
import { USERSETTINGS } from "@core/InfoText";
import { InputText } from "@common/InputText";
import { FormArea } from "../styled";

export const InputEditPasswordUser = () => {
  const { checkPassword, dataInput, errorPasswords, correctPassword } =
    useCheckPassword();
  const passwordUserValue = useRef([]);

  const inputEditPasswordUser = (
    <FormArea>
      <InputText
        id="newpassword"
        placeholder={USERSETTINGS.NEW_PASSWORD_PLACEHOLDER}
        label={USERSETTINGS.CREATE_USER_PASSWORD_LABEL}
        type="password"
        maxLength="100"
        empty={dataInput.newpassword === "" || errorPasswords.current}
        ref={(ref) => (passwordUserValue.current[0] = ref)}
      />
      <InputText
        id="newpasswordconfirm"
        placeholder={USERSETTINGS.CREATE_USER_PASSWORD_REPEAT_LABEL}
        label={USERSETTINGS.CREATE_USER_PASSWORD_REPEAT_LABEL}
        type="password"
        maxLength="100"
        empty={dataInput.newpasswordconfirm === "" || errorPasswords.current}
        ref={(ref) => (passwordUserValue.current[1] = ref)}
      />
    </FormArea>
  );

  return {
    checkPassword,
    correctPassword,
    dataInput,
    inputEditPasswordUser,
    passwordUserValue,
  };
};
