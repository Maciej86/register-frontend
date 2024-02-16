import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import { useCheckEmptyInput } from "../../../../core/hooks/useCheckEmptyInput";
import { useCheckEmail } from "../../../../core/hooks/useCheckEmail";
import { USERSETTINGS } from "../../../../core/InfoText";
import { resetUserState } from "../../../../store/User/sliceUser";
import { addConfirm } from "../../../Confirm/sliceConfirm";

export const useValidDataUser = () => {
  const dispatch = useDispatch();
  const { roleDefinitions } = useRoleUser();
  const { checkEmptyInput, dataUser } = useCheckEmptyInput();
  const { checkEmail, emailErrorRegExp } = useCheckEmail();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState(roleDefinitions[3].name);
  const [roleUserValueData, setRoleUserValueData] = useState(3);
  const dataUserValue = useRef([]);
  const differentPasswords = useRef(false);

  const checkDataUser = () => {
    differentPasswords.current = false;
    dispatch(resetUserState());

    if (checkEmptyInput(dataUserValue.current)) {
      return;
    }

    if (
      dataUserValue.current[3].value.trim() !==
      dataUserValue.current[4].value.trim()
    ) {
      differentPasswords.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFIRM_DIFFRENT_PASSWORD,
        })
      );
      return;
    }

    if (dataUserValue.current[3].value.trim().length < 6) {
      differentPasswords.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETTINGS.CONFRIM_LENGTH_PASSWORD,
        })
      );
      return;
    }

    checkEmail(dataUserValue.current[2].value.trim());
  };

  return {
    roleDefinitions,
    userRoleToggle,
    setUserRoleToggle,
    roleUserValue,
    setRoleUserValue,
    roleUserValueData,
    setRoleUserValueData,
    dataUser,
    dataUserValue,
    emailErrorRegExp,
    checkDataUser,
  };
};
