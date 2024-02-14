import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  resetUserState,
  selectEmailExsist,
} from "../../../../store/User/sliceUser";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import { USERSETTINGS } from "../../../../core/InfoText";
import { addConfirm } from "../../../Confirm/sliceConfirm";
import { useCheckEmail } from "../../../../core/hooks/useCheckEmail";

export const useValidDataUserEdit = (role, currentEmail) => {
  const dispatch = useDispatch();
  const emailExsist = useSelector(selectEmailExsist);
  const { roleDefinitions } = useRoleUser();
  const { checkEmail, emailErrorRegExp, emailNotCheckInDataBase } =
    useCheckEmail();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState("");
  const [roleUserValueData, setRoleUserValueData] = useState(role);
  const [dataUser, setDataUser] = useState([]);
  const dataUserValue = useRef([]);

  useEffect(() => {
    setRoleUserValue(roleDefinitions[role]?.name);
    setRoleUserValueData(role);
  }, [role]);

  const checkDataUser = () => {
    setUserRoleToggle(false);
    dispatch(resetUserState());
    setDataUser([]);

    for (const inputValue of dataUserValue.current) {
      let inputValueTrim = inputValue.value.trim();
      setDataUser((dataUser) => [...dataUser, inputValueTrim]);
    }
    setDataUser((dataUser) => [...dataUser, roleUserValueData]);

    for (const checkEmptyInput of dataUserValue.current) {
      if (checkEmptyInput.value === "") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETTINGS.CONFIRM_EDIT_EMPTY_INPUT,
          })
        );
        return;
      }
    }

    checkEmail(dataUserValue.current[2].value.trim(), currentEmail);
  };

  return {
    roleDefinitions,
    userRoleToggle,
    setUserRoleToggle,
    roleUserValue,
    setRoleUserValue,
    roleUserValueData,
    setRoleUserValueData,
    dataUserValue,
    dataUser,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    emailExsist,
    checkDataUser,
  };
};
