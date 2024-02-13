import { USERSETTINGS } from "../../../core/InfoText";
import { InputText } from "../../../common/InputText";
import { useValidPasswordAccount } from "../hooks/useValidPasswordAccount";
import { FormArea } from "../styled";

export const InputPasswordAccount = () => {
  const {
    changedPassword,
    passwordUserValue,
    passwordUserEmpty,
    differentPasswords,
    oldPassword,
  } = useValidPasswordAccount();

  const inputPasswordAccount = (
    <FormArea>
      <InputText
        id="oldpassword"
        placeholder={USERSETTINGS.OLD_PASSWORD_PLACEHOLDER}
        label={USERSETTINGS.OLD_PASSWORD_LABEL}
        type="password"
        empty={passwordUserEmpty[0] === "" || oldPassword}
        ref={(ref) => (passwordUserValue.current[0] = ref)}
      />
      <InputText
        id="newpassword"
        placeholder={USERSETTINGS.NEW_PASSWORD_PLACEHOLDER}
        label={USERSETTINGS.NEW_PASSWORD_LABEL}
        type="password"
        maxlength="100"
        empty={passwordUserEmpty[1] === "" || differentPasswords.current}
        ref={(ref) => (passwordUserValue.current[1] = ref)}
      />
      <InputText
        id="newpasswordconform"
        placeholder={USERSETTINGS.NEW_PASSWORD_REPEAT_PLACEHOLDER}
        label={USERSETTINGS.NEW_PASSWORD_REPEAT_LABEL}
        type="password"
        maxlength="100"
        empty={passwordUserEmpty[2] === "" || differentPasswords.current}
        ref={(ref) => (passwordUserValue.current[2] = ref)}
      />
    </FormArea>
  );

  return { inputPasswordAccount, changedPassword };
};
