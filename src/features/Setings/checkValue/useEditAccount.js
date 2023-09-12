import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditEmail,
  fetchEditUser,
  selectEditAccount,
  selectEmailExsist,
  selectErrorServer,
} from "../../../common/User/sliceUser";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { USERSETINGS } from "../../../core/InfoText";

export const useEditAccount = (
  userData,
  themeValueData,
  organizationValueData
) => {
  const dispatch = useDispatch();
  const confirmEditAccount = useSelector(selectEditAccount);
  const emailExsist = useSelector(selectEmailExsist);
  const errorServer = useSelector(selectErrorServer);
  const [detaUserEmpty, setDataUserEmpty] = useState([]);
  const dataUserValue = useRef([]);
  const incorrectEmail = useRef(false);
  const checkEmail = useRef(false);

  useEffect(() => {
    if (errorServer) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: "Błąd połączenia z serwerem",
        })
      );
    }
  }, [errorServer]);

  useEffect(() => {
    if (confirmEditAccount) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETINGS.CONFIRM_EDIT_ACCOUNT,
        })
      );
    }
  }, [confirmEditAccount]);

  useEffect(() => {
    if (checkEmail.current) {
      if (emailExsist === "exsist") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETINGS.CONFIRM_EMAIL_EXSIST,
          })
        );
        return;
      }
      changedValueUser();
      checkEmail.current = false;
    }
  }, [emailExsist]);

  const changedDataUser = () => {
    setDataUserEmpty([]);
    incorrectEmail.current = false;

    for (const inputValue of dataUserValue.current) {
      let inputValueTrim = inputValue.value.trim();
      setDataUserEmpty((detaUserEmpty) => [...detaUserEmpty, inputValueTrim]);
    }

    for (const checkEmptyInput of dataUserValue.current) {
      if (checkEmptyInput.value === "") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETINGS.CONFIRMT_EDIT_EMPTY_INPUT,
          })
        );
        return;
      }
    }

    const regexpEmail =
      /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi;

    if (!regexpEmail.test(dataUserValue.current[2].value.trim())) {
      incorrectEmail.current = true;
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: USERSETINGS.CONFIRM_ERROR_EMAIL,
        })
      );
      return;
    }

    if (userData?.email !== dataUserValue.current[2].value) {
      dispatch(fetchEditEmail(dataUserValue.current[2].value.trim()));
      checkEmail.current = true;
      return;
    }
    changedValueUser();
  };

  const changedValueUser = () => {
    if (emailExsist === "notexsist" || emailExsist === "") {
      dispatch(
        fetchEditUser({
          id: userData?.id,
          name: dataUserValue.current[0].value.trim(),
          lastname: dataUserValue.current[1].value.trim(),
          email: dataUserValue.current[2].value.trim(),
          theme: themeValueData,
          organization: organizationValueData,
        })
      );
    }
  };

  return { changedDataUser, dataUserValue, detaUserEmpty, incorrectEmail };
};
