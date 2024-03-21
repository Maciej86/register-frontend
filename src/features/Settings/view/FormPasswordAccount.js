import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditPassword,
  resetUserState,
  selecEditPassword,
  selecEndChceckPasswordExsist,
  selecPasswordExsist,
  selectStatusEditPassword,
  selectUserState,
} from "@storeUser/sliceUser";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import { USERSETTINGS } from "@core/InfoText";
import { Loader } from "@common/Loader";
import { Button } from "@common/Button";
import { InputPasswordAccount } from "./InputPasswordAccount";
import { LuSave } from "react-icons/lu";

export const FormPasswordAccount = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserState);
  const loadingEditPassword = useSelector(selectStatusEditPassword);
  const confirmEditPassword = useSelector(selecEditPassword);
  const passwordExsist = useSelector(selecPasswordExsist);
  const endChceckPasswordExsist = useSelector(selecEndChceckPasswordExsist);
  const { checkPassword, passwordUserValue, inputPasswordAccount, dataInput } =
    InputPasswordAccount();

  useEffect(() => {
    if (passwordExsist === false && endChceckPasswordExsist) {
      dispatch(
        fetchEditPassword({
          id: userData?.id,
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

  const SubmitChangedPassword = (event) => {
    event.preventDefault();
    checkPassword(passwordUserValue.current, userData?.id);
  };

  const formUserPassword = (
    <form onSubmit={SubmitChangedPassword}>
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
