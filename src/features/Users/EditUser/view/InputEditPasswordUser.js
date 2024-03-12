import { InputText } from "../../../../common/InputText";
import { USERSETTINGS } from "../../../../core/InfoText";
import { useValidPasswordEdit } from "../hooks/useValidPasswordEdit";
import { FormArea } from "../styled";

export const InputEditPasswordUser = () => {
  const { checkPasswordUser, passwordUserValue, errorPasswords, dataInput } =
    useValidPasswordEdit();

  const inputEditPasswordUser = (
    <FormArea>
      <InputText
        id="newpassword"
        placeholder={USERSETTINGS.NEW_PASSWORD_PLACEHOLDER}
        label={USERSETTINGS.CREATE_USER_PASSWORD_LABEL}
        type="password"
        maxlength="100"
        empty={dataInput.newpassword === "" || errorPasswords.current}
        ref={(ref) => (passwordUserValue.current[0] = ref)}
      />
      <InputText
        id="newpasswordconfirm"
        placeholder={USERSETTINGS.CREATE_USER_PASSWORD_REPEAT_LABEL}
        label={USERSETTINGS.CREATE_USER_PASSWORD_REPEAT_LABEL}
        type="password"
        maxlength="100"
        empty={dataInput.newpasswordconfirm === "" || errorPasswords.current}
        ref={(ref) => (passwordUserValue.current[1] = ref)}
      />
    </FormArea>
  );

  return { inputEditPasswordUser, checkPasswordUser };
};
