import { useRef } from "react";
import { useSelector } from "react-redux";
import { selecPasswordExsist } from "../../../store/User/sliceUser";
import { useCheckPassword } from "../../../core/hooks/useChceckPassword";
import { USERSETTINGS } from "../../../core/InfoText";
import { InputText } from "../../../common/InputText";
import { FormArea } from "../styled";

export const InputPasswordAccount = () => {
  const currentPasswordExsist = useSelector(selecPasswordExsist);
  const passwordUserValue = useRef([]);
  const { checkPassword, dataInput, errorPasswords } = useCheckPassword();

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
        empty={dataInput.newpassword === "" || errorPasswords.current}
        ref={(ref) => (passwordUserValue.current[1] = ref)}
      />
      <InputText
        id="newpasswordconfirm"
        placeholder={USERSETTINGS.NEW_PASSWORD_REPEAT_PLACEHOLDER}
        label={USERSETTINGS.NEW_PASSWORD_REPEAT_LABEL}
        type="password"
        maxlength="100"
        empty={dataInput.newpasswordconfirm === "" || errorPasswords.current}
        ref={(ref) => (passwordUserValue.current[2] = ref)}
      />
    </FormArea>
  );

  return { checkPassword, passwordUserValue, inputPasswordAccount, dataInput };
};
