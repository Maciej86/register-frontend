import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { USERSETTINGS } from "../../../../core/InfoText";
import {
  fetchEditPassword,
  resetUserState,
  selecEditPassword,
  selectStatusEditPassword,
} from "../../../../store/User/sliceUser";
import { addConfirm } from "../../../../store/Confirm/sliceConfirm";
import { Button } from "../../../../common/Button";
import { Loader } from "../../../../common/Loader";
import { InputEditPasswordUser } from "./InputEditPasswordUser";
import { LuSave } from "react-icons/lu";

export const FormEditPasswordUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loadingEditPassword = useSelector(selectStatusEditPassword);
  const confirmEditPassword = useSelector(selecEditPassword);
  const {
    checkPassword,
    correctPassword,
    dataInput,
    inputEditPasswordUser,
    passwordUserValue,
  } = InputEditPasswordUser();

  useEffect(() => {
    if (correctPassword) {
      dispatch(
        fetchEditPassword({
          id: parseInt(id),
          newpassword: dataInput.newpassword,
        })
      );
      dispatch(resetUserState());
    }
  }, [correctPassword]);

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

  const SubmitPasswordUser = (event) => {
    event.preventDefault();
    checkPassword(passwordUserValue.current);
  };

  const formEditPasswordUser = (
    <form onSubmit={SubmitPasswordUser}>
      {inputEditPasswordUser}
      {loadingEditPassword ? (
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

  return { formEditPasswordUser };
};
