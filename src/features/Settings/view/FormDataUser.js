import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEditAccount,
  resetUserState,
  selectEditAccount,
  selectEndChceckEmailExsist,
  selectStatusEditAccount,
} from "../../../store/User/sliceUser";
import { USERSETTINGS } from "../../../core/InfoText";
import { Loader } from "../../../common/Loader";
import { Button } from "../../../common/Button";
import { LuSave } from "react-icons/lu";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { nanoid } from "@reduxjs/toolkit";
import { InputDataAccount } from "./InputDataAccount";

export const FormDataUser = () => {
  const dispatch = useDispatch();
  const loadingEditUser = useSelector(selectStatusEditAccount);
  const endChceckEmailExsist = useSelector(selectEndChceckEmailExsist);
  const confirmEditUser = useSelector(selectEditAccount);
  const {
    inputDataAccount,
    userData,
    themeValueData,
    emailExsist,
    changedDataUser,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
    dataUser,
  } = InputDataAccount();

  useEffect(() => {
    if (
      emailExsist === false &&
      (endChceckEmailExsist || emailNotCheckInDataBase)
    ) {
      dispatch(
        fetchEditAccount({
          id: userData?.id,
          name: dataUser.name,
          lastname: dataUser.lastname,
          email: dataUser.email,
          role: userData?.role,
          theme: themeValueData,
        })
      );
      dispatch(resetUserState());
    }
    setEmailNotCheckInDataBase(false);
  }, [endChceckEmailExsist, emailNotCheckInDataBase]);

  useEffect(() => {
    if (confirmEditUser) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETTINGS.CONFIRM_EDIT_ACCOUNT,
        })
      );
      dispatch(resetUserState());
    }
  }, [confirmEditUser]);

  const formUserSetings = (
    <form onSubmit={changedDataUser}>
      {inputDataAccount}
      {loadingEditUser ? (
        <Loader margin="0" />
      ) : (
        <Button
          text={USERSETTINGS.BUTTON_EDIT_DATA_USER}
          icon={<LuSave size={"15px"} />}
          type="submit"
        />
      )}
    </form>
  );

  return { formUserSetings };
};
