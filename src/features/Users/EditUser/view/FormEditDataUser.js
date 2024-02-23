import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { USERSETTINGS } from "../../../../core/InfoText";
import {
  fetchEditAccount,
  resetUserState,
  selectEditAccount,
  selectEndChceckEmailExsist,
  selectStatusEditAccount,
} from "../../../../store/User/sliceUser";
import { Button } from "../../../../common/Button";
import { Loader } from "../../../../common/Loader";
import { InputEditDataUser } from "./InputEditDataUser";
import { LuSave } from "react-icons/lu";
import { addConfirm } from "../../../Confirm/sliceConfirm";

export const FormEditDataUser = () => {
  const dispatch = useDispatch();
  const loadingEditUser = useSelector(selectStatusEditAccount);
  const endChceckEmailExsist = useSelector(selectEndChceckEmailExsist);
  const confirmEditUser = useSelector(selectEditAccount);
  const {
    inputEditDataUser,
    emailExsist,
    emailNotCheckInDataBase,
    checkDataUser,
    fetchData,
    fetchDataLoading,
    dataInput,
    roleUserValueData,
    idUser,
    theme,
  } = InputEditDataUser();

  useEffect(() => {
    if (
      emailExsist === false &&
      (emailNotCheckInDataBase || endChceckEmailExsist)
    ) {
      dispatch(
        fetchEditAccount({
          id: idUser,
          name: dataInput.name,
          lastname: dataInput.lastname,
          email: dataInput.email,
          role: roleUserValueData,
          theme: theme,
        })
      );
      dispatch(resetUserState());
    }
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

  const SubmitDataUser = (event) => {
    event.preventDefault();
    checkDataUser();
  };

  const formEditDataUser = (
    <form onSubmit={SubmitDataUser}>
      {inputEditDataUser}
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

  return {
    fetchData,
    fetchDataLoading,
    formEditDataUser,
  };
};
