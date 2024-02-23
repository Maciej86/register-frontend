import { useSelector } from "react-redux";
import { selecPasswordExsist } from "../../../store/User/sliceUser";
import { USERSETTINGS } from "../../../core/InfoText";
import { InputText } from "../../../common/InputText";
import { useValidPasswordAccount } from "../hooks/useValidPasswordAccount";
import { FormArea } from "../styled";

export const InputPasswordAccount = () => {
  const currentPasswordExsist = useSelector(selecPasswordExsist);
  const { changedPassword, passwordUserValue, differentPasswords, dataInput } =
    useValidPasswordAccount();

  console.log(currentPasswordExsist);

  const inputPasswordAccount = (
    <FormArea>
      <InputText
        id="oldpassword"
        placeholder={USERSETTINGS.OLD_PASSWORD_PLACEHOLDER}
        label={USERSETTINGS.OLD_PASSWORD_LABEL}
        type="password"
        maxlength="100"
        empty={dataInput.oldpassword === "" || currentPasswordExsist}
        ref={(ref) => (passwordUserValue.current[0] = ref)}
      />
      <InputText
        id="newpassword"
        placeholder={USERSETTINGS.NEW_PASSWORD_PLACEHOLDER}
        label={USERSETTINGS.NEW_PASSWORD_LABEL}
        type="password"
        maxlength="100"
        empty={dataInput.newpassword === "" || differentPasswords.current}
        ref={(ref) => (passwordUserValue.current[1] = ref)}
      />
      <InputText
        id="newpasswordconfirm"
        placeholder={USERSETTINGS.NEW_PASSWORD_REPEAT_PLACEHOLDER}
        label={USERSETTINGS.NEW_PASSWORD_REPEAT_LABEL}
        type="password"
        maxlength="100"
        empty={
          dataInput.newpasswordconfirm === "" || differentPasswords.current
        }
        ref={(ref) => (passwordUserValue.current[2] = ref)}
      />
    </FormArea>
  );

  return { inputPasswordAccount, changedPassword };
};
