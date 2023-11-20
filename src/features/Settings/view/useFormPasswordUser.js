import { useSelector } from "react-redux";
import { useEditPassword } from "../hooks/useEditPassword";
import { USERSETTINGS } from "../../../core/InfoText";
import {
  selectStatusEditPassword,
  selectUserState,
} from "../../../store/User/sliceUser";
import { InputText } from "../../../common/InputText";
import { Loader } from "../../../common/Loader";
import { Button } from "../../../common/Button";
import { FormArea } from "../styled";
import { LuSave } from "react-icons/lu";

export const useFromPasswordUser = () => {
  const userData = useSelector(selectUserState);
  const loadingEditPassword = useSelector(selectStatusEditPassword);

  const {
    changedPassword,
    passwordUserValue,
    passwordUserEmpty,
    differentPasswords,
    oldPassword,
  } = useEditPassword(userData);

  const formUserPassword = (
    <form onSubmit={changedPassword}>
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
      {loadingEditPassword ? (
        <Loader margin="0" />
      ) : (
        <Button
          text={USERSETTINGS.NEW_PASSWORD_BUTTON}
          icon={<LuSave size={"15px"} />}
          type="submit"
        />
      )}
    </form>
  );

  return { formUserPassword };
};
