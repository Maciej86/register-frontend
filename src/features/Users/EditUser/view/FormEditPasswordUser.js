import { LuSave } from "react-icons/lu";
import { Button } from "../../../../common/Button";
import { USERSETTINGS } from "../../../../core/InfoText";
import { InputEditPasswordUser } from "./InputEditPasswordUser";

export const FormEditPasswordUser = () => {
  const { inputEditPasswordUser, checkPasswordUser } = InputEditPasswordUser();

  const SubmitPasswordUser = (event) => {
    event.preventDefault();
    checkPasswordUser();
  };

  const formEditPasswordUser = (
    <form onSubmit={SubmitPasswordUser}>
      {inputEditPasswordUser}
      <Button
        text={USERSETTINGS.BUTTON_EDIT_DATA_USER}
        icon={<LuSave size={"15px"} />}
        type="submit"
      />
    </form>
  );

  return { formEditPasswordUser };
};
