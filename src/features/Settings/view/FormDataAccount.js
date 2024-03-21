import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditAccount,
  resetUserState,
  selectEditAccount,
  selectEndChceckEmailExsist,
  selectStatusEditAccount,
} from "@storeUser/sliceUser";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import { USERSETTINGS } from "@core/InfoText";
import { Loader } from "@common/Loader";
import { Button } from "@common/Button";
import { LuSave } from "react-icons/lu";
import { InputDataAccount } from "./InputDataAccount";

export const FormDataAccount = () => {
  const dispatch = useDispatch();
  const loadingEditUser = useSelector(selectStatusEditAccount);
  const endChceckEmailExsist = useSelector(selectEndChceckEmailExsist);
  const confirmEditUser = useSelector(selectEditAccount);
  const {
    checkEmptyInput,
    checkEmail,
    inputDataAccount,
    userCurrentData,
    themeValueData,
    emailExsist,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
    dataInput,
    dataUserValue,
  } = InputDataAccount();

  useEffect(() => {
    if (
      emailExsist === false &&
      (endChceckEmailExsist || emailNotCheckInDataBase)
    ) {
      dispatch(
        fetchEditAccount({
          id: userCurrentData?.id,
          name: dataInput.name,
          lastname: dataInput.lastname,
          email: dataInput.email,
          role: userCurrentData?.role,
          theme: themeValueData,
          myaccount: true,
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

  const SubmitChangedDataUser = (event) => {
    event.preventDefault();
    dispatch(resetUserState());

    if (checkEmptyInput(dataUserValue.current)) {
      return;
    }
    checkEmail(
      dataUserValue.current.find((input) => input.id === "email").value.trim(),
      userCurrentData.email
    );
  };

  const formUserSetings = (
    <form onSubmit={SubmitChangedDataUser}>
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
