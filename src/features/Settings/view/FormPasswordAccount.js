import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { USERSETTINGS } from "../../../core/InfoText";
import {
  fetchEditPassword,
  resetUserState,
  selecEditPassword,
  selecEndChceckPasswordExsist,
  selecPasswordExsist,
  selectStatusEditPassword,
  selectUserState,
} from "../../../store/User/sliceUser";
import { addConfirm } from "../../../store/Confirm/sliceConfirm";
import { Loader } from "../../../common/Loader";
import { Button } from "../../../common/Button";
import { InputPasswordAccount } from "./InputPasswordAccount";
import { LuSave } from "react-icons/lu";

export const FormPasswordAccount = () => {
  const dispatch = useDispatch();
  const idUserAccount = useSelector(selectUserState);
  const loadingEditPassword = useSelector(selectStatusEditPassword);
  const confirmEditPassword = useSelector(selecEditPassword);
  const passwordExsist = useSelector(selecPasswordExsist);
  const endChceckPasswordExsist = useSelector(selecEndChceckPasswordExsist);
  const { inputPasswordAccount, changedPassword, dataInput } =
    InputPasswordAccount();

  useEffect(() => {
    if (passwordExsist === false && endChceckPasswordExsist) {
      dispatch(
        fetchEditPassword({
          id: idUserAccount?.id,
          newpassword: dataInput.newpassword,
        })
      );
      dispatch(resetUserState());
    }
  }, [endChceckPasswordExsist]);

  useEffect(() => {
    if (confirmEditPassword) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETTINGS.CONFIRM_EDIT_ACCOUNT,
        })
      );
      dispatch(resetUserState());
    }
  }, [confirmEditPassword]);

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
