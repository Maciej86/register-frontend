import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import { useCheckEmail } from "../../../../core/hooks/useCheckEmail";
import { USERSETTINGS } from "../../../../core/InfoText";
import {
  resetUserState,
  selectEmailExsist,
} from "../../../../store/User/sliceUser";
import { addConfirm } from "../../../Confirm/sliceConfirm";

export const useValidDataUser = () => {
  const dispatch = useDispatch();
  const emailExsist = useSelector(selectEmailExsist);
  const { roleDefinitions } = useRoleUser();
  const { checkEmail } = useCheckEmail();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState(roleDefinitions[3].name);
  const [roleUserValueData, setRoleUserValueData] = useState(3);
  const [dataUser, setDataUser] = useState([]);
  const [errorInput, setErrorInput] = useState(false);
  const dataUserValue = useRef([]);
  const incorrectEmail = useRef(false);
  const differentPasswords = useRef(false);

  const checkDataUser = () => {
    incorrectEmail.current = false;
    differentPasswords.current = false;
    setDataUser([]);
    dispatch(resetUserState());

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
        setErrorInput(false);
        return;
      }
    }

    if (checkEmail(dataUserValue.current[2].value.trim())) {
      setErrorInput(false);
      incorrectEmail.current = true;
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
      setErrorInput(false);
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
      setErrorInput(false);
      return;
    }
    setErrorInput(true);
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
    incorrectEmail,
    emailExsist,
    checkDataUser,
    errorInput,
  };
};
