import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditPassword,
  resetUserState,
  selectEditPassword,
  selectUserState,
} from "../../../store/User/sliceUser";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { USERSETTINGS } from "../../../core/InfoText";
import { useCheckPassword } from "../../../core/hooks/useChceckPassword";

export const useValidPasswordAccount = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserState);
  const confirmNewPassword = useSelector(selectEditPassword);
  const [oldPassword, setOldPassword] = useState(false);
  const passwordUserValue = useRef([]);

  const { checkPassword, dataInput, differentPasswords } = useCheckPassword();

  useEffect(() => {
    if (confirmNewPassword === "ok") {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETTINGS.CONFIRM_EDIT_PASSWORD,
        })
      );
      dispatch(resetUserState());
    } else if (confirmNewPassword === "error") {
      setOldPassword(true);
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_OLD_PASSWORD_ERROR,
        })
      );
      dispatch(resetUserState());
    }
  }, [confirmNewPassword]);

  const changedPassword = (event) => {
    event.preventDefault();

    checkPassword(passwordUserValue.current);

    // setOldPassword(false);

    // if (
    //   passwordUserValue.current[1].value.trim() !==
    //   passwordUserValue.current[2].value.trim()
    // ) {
    //   differentPasswords.current = true;
    //   dispatch(
    //     addConfirm({
    //       id: nanoid(),
    //       type: false,
    //       text: USERSETTINGS.CONFIRM_DIFFRENT_PASSWORD,
    //     })
    //   );
    //   return;
    // }

    // if (passwordUserValue.current[1].value.trim().length < 6) {
    //   differentPasswords.current = true;
    //   dispatch(
    //     addConfirm({
    //       id: nanoid(),
    //       type: false,
    //       text: USERSETTINGS.CONFRIM_LENGTH_PASSWORD,
    //     })
    //   );
    //   return;
    // }

    // dispatch(
    //   fetchEditPassword({
    //     id: userData?.id,
    //     oldpassword: passwordUserValue.current[0].value.trim(),
    //     newpassword: passwordUserValue.current[1].value.trim(),
    //   })
    // );
  };

  return {
    changedPassword,
    passwordUserValue,
    differentPasswords,
    oldPassword,
    dataInput,
  };
};
