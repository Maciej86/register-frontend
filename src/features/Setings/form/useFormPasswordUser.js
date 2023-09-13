import { useSelector } from "react-redux";
import { useEditPassword } from "../checkValue/useEditPassword";
import { USERSETINGS } from "../../../core/InfoText";
import {
  selectStatusEditPassword,
  selectUserState,
} from "../../../store/User/sliceUser";
import { Loader } from "../../../common/Loader";
import { Button } from "../../../common/elements/Button";
import { InputText } from "../../../common/elements/InputText";
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
    <form>
      <FormArea>
        <InputText
          id="oldpassword"
          placeholder={USERSETINGS.OLD_PASSWORD_PLACEHOLDER}
          label={USERSETINGS.OLD_PASSWORD_LABEL}
          type="password"
          empty={passwordUserEmpty[0] === "" || oldPassword.current}
          ref={(ref) => (passwordUserValue.current[0] = ref)}
        />
        <InputText
          id="newpassword"
          placeholder={USERSETINGS.NEW_PASSWORD_PLACEHOLDER}
          label={USERSETINGS.NEW_PASSWORD_LABEL}
          type="password"
          maxlength="100"
          empty={passwordUserEmpty[1] === "" || differentPasswords.current}
          ref={(ref) => (passwordUserValue.current[1] = ref)}
        />
        <InputText
          id="newpasswordconform"
          placeholder={USERSETINGS.NEW_PASSWORD_REPEAT_PLACEHOLDER}
          label={USERSETINGS.NEW_PASSWORD_REPEAT_LABEL}
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
          text={USERSETINGS.NEW_PASSWORD_CONFIRM}
          icon={<LuSave size={"15px"} />}
          action={changedPassword}
        />
      )}
    </form>
  );

  return formUserPassword;
};
