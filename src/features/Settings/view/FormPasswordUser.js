import { useSelector } from "react-redux";
import { USERSETTINGS } from "../../../core/InfoText";
import { selectStatusEditPassword } from "../../../store/User/sliceUser";
import { Loader } from "../../../common/Loader";
import { Button } from "../../../common/Button";
import { InputPasswordAccount } from "./InputPasswordAccount";
import { LuSave } from "react-icons/lu";

export const FromPasswordUser = () => {
  const loadingEditPassword = useSelector(selectStatusEditPassword);
  const { inputPasswordAccount, changedPassword } = InputPasswordAccount();

  const formUserPassword = (
    <form onSubmit={changedPassword}>
      {inputPasswordAccount}
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
